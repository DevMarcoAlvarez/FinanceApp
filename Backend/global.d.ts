declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      HOST?: string;
    }
  }

  interface User {
    name: string;
  }
}

export {};
