/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetNestedProject{\n    Projects {\n      name\n      skills {\n        Skills_id {\n          color\n          id\n        }\n      }\n      thumbnail\n    }\n  }\n": types.GetNestedProjectDocument,
    "\nquery GetSkill($skName: String!) {\n\tSkills(filter: {\n\t\tid: {\n\t\t\t_eq: $skName\n\t\t}\n\t}) {\n\t\tcolor\n    dark\n\t}\n}": types.GetSkillDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetNestedProject{\n    Projects {\n      name\n      skills {\n        Skills_id {\n          color\n          id\n        }\n      }\n      thumbnail\n    }\n  }\n"): (typeof documents)["query GetNestedProject{\n    Projects {\n      name\n      skills {\n        Skills_id {\n          color\n          id\n        }\n      }\n      thumbnail\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetSkill($skName: String!) {\n\tSkills(filter: {\n\t\tid: {\n\t\t\t_eq: $skName\n\t\t}\n\t}) {\n\t\tcolor\n    dark\n\t}\n}"): (typeof documents)["\nquery GetSkill($skName: String!) {\n\tSkills(filter: {\n\t\tid: {\n\t\t\t_eq: $skName\n\t\t}\n\t}) {\n\t\tcolor\n    dark\n\t}\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;