import { Program } from "@coral-xyz/anchor";
import { EternitySc } from "./web3/idl";
import idl from "./web3/idl.json";

class Web3Utils {
  private static instance: Web3Utils;
  private static program: Program<EternitySc>;

  public static getInstance(): Web3Utils {
    if (!Web3Utils.instance) {
      Web3Utils.instance = new Web3Utils();
    }

    return Web3Utils.instance;
  }

  public static getProgram(): Program<EternitySc> {
    if (!Web3Utils.program) {
      Web3Utils.program = new Program(idl as EternitySc);
    }
    return Web3Utils.program;
  }
}

export default Web3Utils;
