declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      HOST?: string;
    }
  }

  interface User {
    id: string;
    balance: number;
    name: string;
    password: string;
  }
}

export {};
