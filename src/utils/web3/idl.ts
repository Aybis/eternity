/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/eternity_sc.json`.
 */
export type EternitySc = {
  address: '6a1antQyJy5BhsrYcv3kvRBffy7UjQnjEXvYMMbznrZ7';
  metadata: {
    name: 'eternitySc';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'createFragments';
      discriminator: [66, 68, 145, 32, 254, 87, 149, 94];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'fragments';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 103, 109, 101, 110, 116, 115];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
              {
                kind: 'arg';
                path: 'fragmentsId';
              },
            ];
          };
        },
        {
          name: 'oldFragments';
          writable: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'fragmentsId';
          type: 'u32';
        },
      ];
    },
    {
      name: 'createPersonality';
      discriminator: [51, 247, 169, 76, 82, 18, 210, 4];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'personality';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 101, 114, 115, 111, 110, 97, 108, 105, 116, 121];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'age';
          type: 'u16';
        },
        {
          name: 'hobbie';
          type: {
            vec: 'string';
          };
        },
        {
          name: 'message';
          type: 'string';
        },
      ];
    },
    {
      name: 'createRelic';
      discriminator: [206, 19, 99, 204, 157, 190, 94, 228];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'description';
          type: 'string';
        },
      ];
    },
    {
      name: 'createVault';
      discriminator: [29, 237, 247, 208, 193, 82, 54, 135];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'vaultLamport';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
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
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'mAddFragment';
      discriminator: [66, 9, 98, 120, 26, 32, 230, 214];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'fragments';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 103, 109, 101, 110, 116, 115];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
              {
                kind: 'arg';
                path: 'fragmentsId';
              },
            ];
          };
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'fragmentsId';
          type: 'u32';
        },
        {
          name: 'key';
          type: {
            array: ['u8', 36];
          };
        },
      ];
    },
    {
      name: 'mBuyToken';
      discriminator: [151, 89, 179, 71, 150, 144, 84, 39];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'vaultLamport';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
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
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'mDeleteFragment';
      discriminator: [155, 170, 145, 189, 106, 88, 152, 122];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'fragments';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 103, 109, 101, 110, 116, 115];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
              {
                kind: 'arg';
                path: 'fragmentsId';
              },
            ];
          };
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'fragmentsId';
          type: 'u32';
        },
        {
          name: 'id';
          type: 'u16';
        },
      ];
    },
    {
      name: 'mSetPersonalityHobbie';
      discriminator: [137, 164, 124, 78, 30, 103, 88, 50];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'personality';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 101, 114, 115, 111, 110, 97, 108, 105, 116, 121];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'hobbie';
          type: {
            vec: 'string';
          };
        },
      ];
    },
    {
      name: 'mSetPersonalityMessage';
      discriminator: [91, 199, 162, 92, 134, 81, 91, 230];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'personality';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 101, 114, 115, 111, 110, 97, 108, 105, 116, 121];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'message';
          type: 'string';
        },
      ];
    },
    {
      name: 'mSetRelicAuthority';
      discriminator: [54, 39, 186, 17, 212, 190, 92, 144];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'newAuthority';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'mSetRelicDescription';
      discriminator: [48, 208, 167, 60, 188, 249, 185, 67];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'description';
          type: 'string';
        },
      ];
    },
    {
      name: 'mSetRelicHeir';
      discriminator: [245, 23, 101, 61, 141, 53, 84, 48];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'heir';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'mTakeToken';
      discriminator: [188, 132, 208, 27, 179, 46, 233, 201];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'vaultLamport';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
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
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'mUpdateFragment';
      discriminator: [75, 107, 62, 218, 86, 111, 221, 242];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'fragments';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 103, 109, 101, 110, 116, 115];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
              {
                kind: 'arg';
                path: 'fragmentsId';
              },
            ];
          };
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'fragmentsId';
          type: 'u32';
        },
        {
          name: 'id';
          type: 'u16';
        },
        {
          name: 'key';
          type: {
            array: ['u8', 36];
          };
        },
      ];
    },
    {
      name: 'updatePersonality';
      discriminator: [251, 230, 116, 135, 110, 223, 101, 63];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'personality';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 101, 114, 115, 111, 110, 97, 108, 105, 116, 121];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'age';
          type: 'u16';
        },
        {
          name: 'hobbie';
          type: {
            vec: 'string';
          };
        },
        {
          name: 'message';
          type: 'string';
        },
      ];
    },
    {
      name: 'updateRelic';
      discriminator: [75, 37, 236, 186, 132, 190, 45, 187];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'relic';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 108, 105, 99];
              },
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'arg';
                path: 'relicId';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'relicId';
          type: 'u32';
        },
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'description';
          type: 'string';
        },
        {
          name: 'visibillity';
          type: 'bool';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'fragments';
      discriminator: [46, 172, 133, 254, 138, 87, 236, 11];
    },
    {
      name: 'personality';
      discriminator: [6, 239, 30, 187, 45, 55, 195, 216];
    },
    {
      name: 'relic';
      discriminator: [221, 240, 73, 58, 219, 202, 233, 189];
    },
    {
      name: 'vault';
      discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
    },
    {
      name: 'vaultLamport';
      discriminator: [93, 192, 187, 113, 181, 95, 120, 220];
    },
  ];
  events: [
    {
      name: 'authorityNotify';
      discriminator: [168, 99, 117, 62, 100, 83, 102, 196];
    },
    {
      name: 'dataNotify';
      discriminator: [91, 144, 99, 36, 19, 51, 243, 103];
    },
    {
      name: 'tokenNotify';
      discriminator: [63, 245, 137, 60, 209, 38, 129, 8];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'relicInputDataNotValid';
      msg: 'The provided relic data is invalid. Ensure the fields input is correct.';
    },
  ];
  types: [
    {
      name: 'authorityNotify';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'by';
            type: 'pubkey';
          },
          {
            name: 'account';
            type: 'pubkey';
          },
          {
            name: 'message';
            type: 'string';
          },
          {
            name: 'oldAuthority';
            type: 'pubkey';
          },
          {
            name: 'newAuthority';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'dataNotify';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'by';
            type: 'pubkey';
          },
          {
            name: 'account';
            type: 'pubkey';
          },
          {
            name: 'message';
            type: 'string';
          },
          {
            name: 'operation';
            type: {
              defined: {
                name: 'operation';
              };
            };
          },
        ];
      };
    },
    {
      name: 'fragments';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fragmentsId';
            type: 'u32';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'fragment';
            type: {
              vec: {
                array: ['u8', 36];
              };
            };
          },
          {
            name: 'dataAlloc';
            type: 'u16';
          },
          {
            name: 'nextFragments';
            type: {
              option: 'pubkey';
            };
          },
        ];
      };
    },
    {
      name: 'operation';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'create';
          },
          {
            name: 'update';
          },
          {
            name: 'delete';
          },
        ];
      };
    },
    {
      name: 'personality';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'age';
            type: 'u16';
          },
          {
            name: 'hobbie';
            type: {
              vec: 'string';
            };
          },
          {
            name: 'message';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'relic';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'relicId';
            type: 'u32';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'heir';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'description';
            type: 'string';
          },
          {
            name: 'dataCount';
            type: 'u64';
          },
          {
            name: 'size';
            type: 'u32';
          },
          {
            name: 'visibility';
            type: 'bool';
          },
          {
            name: 'fragments';
            type: {
              option: 'pubkey';
            };
          },
        ];
      };
    },
    {
      name: 'tokenNotify';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'by';
            type: 'pubkey';
          },
          {
            name: 'account';
            type: 'pubkey';
          },
          {
            name: 'message';
            type: 'string';
          },
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'vault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'token';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'vaultLamport';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
  ];
};
