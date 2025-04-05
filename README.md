# Freel-AI
Freelancers and clients face issues like lack of trust, delayed payments, and poor job matching. Centralized platforms charge high fees and control all interactions. This project aims to create a decentralized, AI-powered freelance marketplace where smart contracts handle payments securely and AI matches the right people to the right jobs.

# 🔐 Freel-AI – AI-Powered Decentralized Freelance Platform

> A smart contract-based escrow system for freelancers and clients. Powered by Solidity, Ethereum, and AI-driven matching (coming soon!).

---

## 🚀 Features

- 🤝 Escrow between client and freelancer
- 🔐 Trustless, automated ETH payments
- 📬 Job completion verified by client
- 🧠 AI (coming soon): Job matching, NLP for job descriptions
- 💡 Built with Hardhat, Ethers.js, and Solidity

---

## 🛠️ Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Frontend  | Next.js *(coming soon)*          |
| Backend   | Node.js + Hardhat                |
| Smart Contracts | Solidity + Ethereum (Local / Testnet) |
| Blockchain Tools | Hardhat, Ethers.js        |

---

## 📂 Project Structure

freelai/
├── client/              → Next.js frontend
│   ├── pages/
│   ├── components/
│   └── utils/           → Wallet and API helpers
├── server/              → Node.js backend
│   ├── routes/
│   ├── models/
│   └── controllers/
├── ai-engine/           → Python (Flask) AI module
│   ├── match.py
│   └── summarize.py
├── smart-contracts/     → Solidity contracts
│   ├── JobEscrow.sol
│   └── deploy.js
└── README.md


---

## 📦 How to Run

```bash
# 1. Clone repo
git clone https://github.com/YOUR_USERNAME/job-escrow-dapp.git
cd freel-ai

# 2. Install dependencies
npm install

# 3. Compile smart contract
npx hardhat compile

# 4. Deploy to local blockchain
npx hardhat node   # in one terminal
npx hardhat run scripts/deploy.js --network localhost   # in another terminal

