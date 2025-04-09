/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/eternity_sc.json`.
 */
export type EternitySc = {
  address: "GWgEbF6ewumjA5ZSgxWbBjDKJhdZ6GyxKQJZmyjGFADF";
  metadata: {
    name: "eternitySc";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "addSp";
      discriminator: [92, 10, 251, 111, 78, 222, 210, 220];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "storagePointer";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 112];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              },
              {
                kind: "arg";
                path: "spId";
              }
            ];
          };
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "spId";
          type: "u32";
        },
        {
          name: "key";
          type: {
            array: ["u8", 32];
          };
        }
      ];
    },
    {
      name: "buyToken";
      discriminator: [138, 127, 14, 91, 38, 87, 115, 105];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "vault";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "vaultLamport";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  108,
                  97,
                  109,
                  112,
                  111,
                  114,
                  116
                ];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "createLocker";
      discriminator: [167, 90, 137, 154, 75, 47, 17, 84];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "description";
          type: "string";
        }
      ];
    },
    {
      name: "createProfile";
      discriminator: [225, 205, 234, 143, 17, 186, 50, 220];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "profile";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 102, 105, 108, 101];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "age";
          type: "u16";
        },
        {
          name: "hobbie";
          type: {
            vec: "string";
          };
        },
        {
          name: "message";
          type: "string";
        }
      ];
    },
    {
      name: "createSp";
      discriminator: [211, 97, 93, 71, 223, 37, 82, 95];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "storagePointer";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 112];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              },
              {
                kind: "arg";
                path: "spId";
              }
            ];
          };
        },
        {
          name: "oldStoragePointer";
          writable: true;
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "spId";
          type: "u32";
        }
      ];
    },
    {
      name: "createVault";
      discriminator: [29, 237, 247, 208, 193, 82, 54, 135];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "vault";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "vaultLamport";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  108,
                  97,
                  109,
                  112,
                  111,
                  114,
                  116
                ];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "deleteSp";
      discriminator: [34, 198, 6, 144, 40, 17, 213, 156];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "storagePointer";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 112];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              },
              {
                kind: "arg";
                path: "spId";
              }
            ];
          };
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "spId";
          type: "u32";
        },
        {
          name: "id";
          type: "u16";
        }
      ];
    },
    {
      name: "takeToken";
      discriminator: [122, 245, 91, 55, 208, 100, 59, 39];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "vault";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "vaultLamport";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  108,
                  97,
                  109,
                  112,
                  111,
                  114,
                  116
                ];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "updateLocker";
      discriminator: [93, 167, 35, 96, 137, 119, 30, 26];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "description";
          type: "string";
        },
        {
          name: "visibillity";
          type: "bool";
        }
      ];
    },
    {
      name: "updateProfile";
      discriminator: [98, 67, 99, 206, 86, 115, 175, 1];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "profile";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 102, 105, 108, 101];
              },
              {
                kind: "account";
                path: "signer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "age";
          type: "u16";
        },
        {
          name: "hobbie";
          type: {
            vec: "string";
          };
        },
        {
          name: "message";
          type: "string";
        }
      ];
    },
    {
      name: "updateSp";
      discriminator: [119, 184, 133, 165, 252, 8, 55, 68];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "storagePointer";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 112];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              },
              {
                kind: "arg";
                path: "spId";
              }
            ];
          };
        },
        {
          name: "locker";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 111, 99, 107, 101, 114];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "arg";
                path: "lockerId";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lockerId";
          type: "u32";
        },
        {
          name: "spId";
          type: "u32";
        },
        {
          name: "id";
          type: "u16";
        },
        {
          name: "key";
          type: {
            array: ["u8", 32];
          };
        }
      ];
    }
  ];
  accounts: [
    {
      name: "locker";
      discriminator: [74, 246, 6, 113, 249, 228, 75, 169];
    },
    {
      name: "profile";
      discriminator: [184, 101, 165, 188, 95, 63, 127, 188];
    },
    {
      name: "storagePointer";
      discriminator: [116, 97, 91, 209, 62, 139, 54, 149];
    },
    {
      name: "vault";
      discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
    },
    {
      name: "vaultLamport";
      discriminator: [93, 192, 187, 113, 181, 95, 120, 220];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "profileNotFound";
      msg: "The specified profile could not be found.";
    },
    {
      code: 6001;
      name: "profileAlreadyExists";
      msg: "A profile with the same identifier already exists.";
    },
    {
      code: 6002;
      name: "lockerNotFound";
      msg: "The specified locker could not be found.";
    },
    {
      code: 6003;
      name: "lockerAlreadyExists";
      msg: "A locker with the same identifier already exists.";
    },
    {
      code: 6004;
      name: "lockerLimitExceeded";
      msg: "The maximum number of lockers has been exceeded.";
    },
    {
      code: 6005;
      name: "storagePointerGroupNotFound";
      msg: "The specified storage pointer group could not be found.";
    },
    {
      code: 6006;
      name: "storagePointerGroupAlreadyExists";
      msg: "A storage pointer group with the same identifier already exists.";
    },
    {
      code: 6007;
      name: "storagePointerGroupLimitExceeded";
      msg: "The maximum number of storage pointer groups has been exceeded.";
    },
    {
      code: 6008;
      name: "dataNotValid";
      msg: "The provided input data is not valid.";
    },
    {
      code: 6009;
      name: "unAuthorized";
      msg: "Not Authorized";
    },
    {
      code: 6010;
      name: "lamportNotEnough";
      msg: "Not Enough Lamport or SOL";
    }
  ];
  types: [
    {
      name: "locker";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "id";
            type: "u32";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "dataCount";
            type: "u64";
          },
          {
            name: "size";
            type: "u32";
          },
          {
            name: "visibility";
            type: "bool";
          },
          {
            name: "storagePointer";
            type: {
              option: "pubkey";
            };
          }
        ];
      };
    },
    {
      name: "profile";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "age";
            type: "u16";
          },
          {
            name: "hobbie";
            type: {
              vec: "string";
            };
          },
          {
            name: "message";
            type: "string";
          }
        ];
      };
    },
    {
      name: "storagePointer";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "lockerId";
            type: "u32";
          },
          {
            name: "id";
            type: "u32";
          },
          {
            name: "data";
            type: {
              vec: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "dataCount";
            type: "u16";
          },
          {
            name: "nextSp";
            type: {
              option: "pubkey";
            };
          }
        ];
      };
    },
    {
      name: "vault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "token";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "vaultLamport";
      type: {
        kind: "struct";
      };
    }
  ];
};
