declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      HOST?: string;
    }
  }

  interface Transaction {
    reason: string;
    amount: number;
    date: string;
  }

  interface User {
    transactionHistory: Transaction[];
    maximumSpend: number;
    balance: number;

    password: string;
    email: string;
    name: string;

    goals: string;
  }
}

export {};
