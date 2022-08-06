// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;
contract Vote{
    // 记录投票人状态
    mapping(address => bool) public voters;
    uint public candidatesCount ;
    // 定义候选人
    struct Candidate {
    uint id;
    string name;
    uint voteCount;
    }
    event votedEvent(uint id);
    mapping(uint => Candidate) public candidates;
    constructor() {
        addCandidate("ly");
        addCandidate("zgd");
    }
    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
    function vote (uint _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount ++;
        emit votedEvent(_candidateId);

    }





}
