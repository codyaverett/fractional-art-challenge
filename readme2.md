_NOTE: Please use Javascript / Typescript / Python with exercises where it makes sense._

# Prerequisites

1. You need a Github account to push your branch (submit your solution) to remote.
2. You need a [Infura](https://infura.io) / [Alchemy](https://www.alchemy.com) account to connect to the Ethereum Node.
   You can use free-tier resources for this test.
3. You might need an AWS account. Create one if you do not own one already. You can use free-tier resources for this
   test.

## Basic

Solve exercise A and explain your reasoning. It's ok to use pseudo-code where needed as well as any popular language
you're comfortable with (except when noted otherwise).

A) Please write a function that sorts 11 small numbers (<100) as fast as possible. Once written, provide an estimate for
how long it would take to execute that function 10 Billion (10^10) times on a normal machine.

## Practical

_Please use Javascript / Typescript / Node JS / Python for the following task._

1. Create an application that will:
  - Index every [The Doge NFT (DOG) token](https://etherscan.io/address/0xbaac2b4491727d78d2b78815144570b9f2fe8899) Transfer event on the Ethereum Mainnet. 
  - Be able to index the events using 2 strategies: continuously (following the latest block) and on-demand (index events based on a block range `from [block number] to [block number]`).
  - Process Transfer events - create an aggregation of token holders (list of token holders with their balance).

2. Prepare the data in a way that it can be consumed by the engineering team. The team will be:
    - Fetching token holder's balance
    - Fetching top 100 token holders - make sure to include what % of the total supply their balance represent
    - Fetching token holder's weekly balance change (in %)

3. The solution should be scalable to 100 million entries.

4. Write all needed tests.

5. Write a high-level description (1 page) explaining your solution. Explanation should include:
  - A description of what you've built
  - Which technologies you've used and how they tie together
  - Your reasons for high-level decisions and potential improvements, bottlenecks and performance estimates

If anything above feels unclear, please use your own judgement to make assumptions. If you have a question about which
coding language or framework you should be using on a particular task, please send an email to nate@fractional.art to
confirm.

Time limit: 7 days.

Send us your answers, as-well as the link to the Github repository back via email.

Please also make sure that the repository is private and that you give the following users access

- TRCSamurai
- jernejc
- Naltharial
- smaroo
