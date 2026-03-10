const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  // Addresses of your staking and reward tokens
  const STAKING_TOKEN = "0x..."; 
  const REWARDS_TOKEN = "0x...";

  const StakingRewards = await hre.ethers.getContractFactory("StakingRewards");
  const contract = await StakingRewards.deploy(STAKING_TOKEN, REWARDS_TOKEN);

  await contract.waitForDeployment();
  console.log(`StakingRewards deployed to: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
