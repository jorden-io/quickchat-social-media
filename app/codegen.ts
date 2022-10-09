import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4001/graphql",
  documents: "src/graphql/*.graphql",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
