// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JobEscrow {
    address public client;
    address public freelancer;
    uint public amount;
    bool public jobCompleted;

    constructor(address _freelancer) payable {
        client = msg.sender;
        freelancer = _freelancer;
        amount = msg.value;
        jobCompleted = false;
    }

    function markCompleted() public {
        require(msg.sender == client, "Only client can mark as completed");
        jobCompleted = true;
        payable(freelancer).transfer(amount);
    }
}
