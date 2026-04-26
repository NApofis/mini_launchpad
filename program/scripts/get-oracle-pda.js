#!/usr/bin/env node
// Run from repo root: node program/scripts/get-oracle-pda.js
// Or from program/: node scripts/get-oracle-pda.js
import { PublicKey } from "@solana/web3.js";

const ORACLE_PROGRAM_ID = new PublicKey("A1gbTLzurEGTMXp1KnKUqbU6LzUvnG7ZD7m8Soyc9617");
const [oraclePda] = PublicKey.findProgramAddressSync(
  [Buffer.from("oracle_state")],
  ORACLE_PROGRAM_ID
);
console.log("ORACLE_STATE_PUBKEY=" + oraclePda.toBase58());
