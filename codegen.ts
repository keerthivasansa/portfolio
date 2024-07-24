import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
   schema: 'https://directus.keerthivasan.in/graphql',
   documents: ['app/**/*.ts?(x)'],
   generates: {
      './lib/gql/': {
         preset: "client",
         presetConfig: {
            gqlTagName: "gql",
         },
      }
   }
}

export default config