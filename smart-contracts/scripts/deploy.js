// scripts/deploy.js

const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const JobEscrow = await hre.ethers.getContractFactory("JobEscrow");

  // Replace this with the freelancer's Ethereum address (use a dummy one for now)
  const freelancerAddress = "0x0000000000000000000000000000000000000001";

  // Deploy and send 1 ETH as escrow value (adjust value as needed)
  const jobEscrow = await JobEscrow.deploy(freelancerAddress, {
    value: hre.ethers.parseEther("1.0"),
  });


  console.log("✅ JobEscrow contract deployed to:", jobEscrow.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
