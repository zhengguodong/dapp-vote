// import Web3 from "web3";
// import vote from "../../build/contracts/Vote.json"
// let initContract=async ()=>{
//     if(window.ethereum!=null){
//         const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//         const {abi} =vote;
//         const networkID = await web3.eth.net.getId();
//         let address = vote.networks[networkID].address;
//         let contract = new web3.eth.Contract(abi, address);
//         return contract;
//     }else{
//         alert("no etheruem")
//     }
// }
// export default initContract;
import Web3 from "web3";
import vote from "../../build/contracts/Vote.json"
export const Contract=async ()=>{
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
    const {abi} =vote;
    const networkID = await web3.eth.net.getId();
    let address = vote.networks[networkID].address;
    let contract=new web3.eth.Contract(abi,address)
    const initWeb3=async() =>{
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
            } catch (error) {
                console.error("User denied account access")
            }
        }
        // else if (window.web3) {
        //     App.web3Provider = window.web3.currentProvider;
        // }
        // else {
        //     App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        // }
        // let web3 = new Web3(App.web3Provider);
        // return web3;
    }
    const Vote=async (id)=>{
        // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        // const {abi} =vote;
        // const networkID = await web3.eth.net.getId();
        // let address = vote.networks[networkID].address;
        // let contract=new web3.eth.Contract(abi,address)
        return contract.methods.vote(id).call();
    }
    const getData=async (i)=>{
        // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        // const {abi} =vote;
        // const networkID = await web3.eth.net.getId();
        // let address = vote.networks[networkID].address;
        // let contract=new web3.eth.Contract(abi,address)
        return contract.methods.candidates(i).call()
    }
    const count=async ()=>{
        // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        // const {abi} =vote;
        // const networkID = await web3.eth.net.getId();
        // let address = vote.networks[networkID].address;
        // let contract=new web3.eth.Contract(abi,address)
        let num=await contract.methods.candidatesCount().call()
        return num
    }
    const listenVoteEvent=async (id)=>{
        // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        // const {abi} =vote;
        // const networkID = await web3.eth.net.getId();
        // let address = vote.networks[networkID].address;
        // let contract=new web3.eth.Contract(abi,address)
        return contract.events.votedEvent(id)
    }
}

// export const initWeb3=async() =>{
//
//     if (window.ethereum) {
//         try {
//             await window.ethereum.enable();
//         } catch (error) {
//             console.error("User denied account access")
//         }
//     }
//     // else if (window.web3) {
//     //     App.web3Provider = window.web3.currentProvider;
//     // }
//     // else {
//     //     App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
//     // }
//     // let web3 = new Web3(App.web3Provider);
//     // return web3;
// }
// export const Vote=async (id)=>{
//     // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//     // const {abi} =vote;
//     // const networkID = await web3.eth.net.getId();
//     // let address = vote.networks[networkID].address;
//     // let contract=new web3.eth.Contract(abi,address)
//     return this.contract.methods.vote(id).call();
// }
// export const getData=async (i)=>{
//     // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//     // const {abi} =vote;
//     // const networkID = await web3.eth.net.getId();
//     // let address = vote.networks[networkID].address;
//     // let contract=new web3.eth.Contract(abi,address)
//     return this.contract.methods.candidates(i).call()
// }
// export const count=async ()=>{
//     // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//     // const {abi} =vote;
//     // const networkID = await web3.eth.net.getId();
//     // let address = vote.networks[networkID].address;
//     // let contract=new web3.eth.Contract(abi,address)
//     let num=await this.contract.methods.candidatesCount().call()
//     return num
// }
// export const listenVoteEvent=async (id)=>{
//     // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//     // const {abi} =vote;
//     // const networkID = await web3.eth.net.getId();
//     // let address = vote.networks[networkID].address;
//     // let contract=new web3.eth.Contract(abi,address)
//     return this.contract.events.votedEvent(id)
// }
//

