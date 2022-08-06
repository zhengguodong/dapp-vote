<template>
  <div id="nav">
    <h3>投票Dapp</h3>
    <button @click="connect">连接钱包</button>
    <el-table :data="tableData" style="width: 50%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="score" label="票数"/>
      <el-table-column label="Operations" >
        <template #default="scope">
          <el-button link type="primary" size="small" @click="up(scope)">投票</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
  import vote from "../build/contracts/Vote.json";
  interface table{
    id:string,
    name:string,score:string
  }
  import {ref,onMounted} from "vue"
  import Web3 from "web3"
  let Contract=ref<any>(null)
  let Web3=ref<any>(null)
  onMounted(async ()=>{
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
    Web3.value=web3
    const {abi} =vote;
    const networkID = await web3.eth.net.getId();
    let address = vote.networks[networkID].address;
    let contract=new web3.eth.Contract(abi,address)
    Contract.value=contract
    let num=await Contract.value.methods.candidatesCount().call()
    for(let i=1;i<=num;i++){
      let data=await Contract.value.methods.candidates(i).call()
      console.log(data)
      tableData.value.push({
        id:data.id,
        name:data.name,
        score:data.voteCount
      })
    }

  })
  let connect= async ()=>{
    // let web3= await initWeb3()
    // await window.ethereum.enable();
    console.log("yy")
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    // await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  let tableData=ref<Array<table>>([])
  let up=async (scope:any)=>{
    console.log("dd",Contract.value.methods)
    let msg=await Contract.value.methods.vote(scope.row.id,{from:Web3.value.eth.defaultAccount}).call()
    console.log("msg",msg)
    let event=await Contract.value.events.votedEvent(scope.row.id)
    console.log("event",event)
  }
</script>
<style lang="scss">
#nav{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
  flex-direction: column;
}
  body,html{
    margin: 0;
    padding: 0;
  }
</style>
