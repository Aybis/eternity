import { AnchorProvider, Program, Provider } from "@coral-xyz/anchor";
import { Connection } from "@solana/web3.js";
import { EternitySc } from "./web3/idl";
import idl from "./web3/idl.json";

class Web3Utils {
  private static program: Program<EternitySc> | null = null;
  private static connection: Connection | null = null;
  private static instance: Web3Utils | null = null;
  private static provider: Provider | null = null;

  private constructor() {}

  public static getInstance(): Web3Utils {
    if (!Web3Utils.instance) {
      Web3Utils.instance = new Web3Utils();
    }

    return Web3Utils.instance;
  }

  public getProgram() {
    if (!Web3Utils.program) {
      Web3Utils.program = new Program<EternitySc>(
        idl as EternitySc,
        this.getProvider()
      );
    }
    return Web3Utils.program;
  }

  public getConnection() {
    if (!Web3Utils.connection) {
      Web3Utils.connection = new Connection(
        "http://localhost:8899",
        "confirmed"
      );
    }

    return Web3Utils.connection;
  }

  public getProvider() {
    if (!Web3Utils.provider) {
      Web3Utils.provider = new AnchorProvider(this.getConnection(), {} as any);
    }

    return Web3Utils.provider;
  }
}

export default Web3Utils;
