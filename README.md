# Yield Farming & Staking Rewards

This repository provides a high-quality implementation of a Liquidity Mining/Staking contract. It is designed to distribute rewards to users who lock their LP tokens or ERC-20 assets into the vault.

### Features
* **Time-Weighted Rewards:** Rewards are calculated per-second, ensuring fair distribution based on the duration of the stake.
* **Efficient Accounting:** Uses the "Stored Reward Per Token" algorithm to avoid O(n) loops, making it gas-efficient regardless of the number of stakers.
* **Flexible Duration:** Governance can set and update the reward duration for different "seasons" of farming.

[Image of yield farming staking rewards distribution flow]

### Mathematical Foundation
The contract calculates rewards using the following logic:
1. `rewardPerToken` = Current cumulative rewards divided by total supply.
2. `earned` = User balance multiplied by the change in `rewardPerToken` since their last update.

### License
MIT
