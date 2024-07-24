/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Projects = {
  __typename?: 'Projects';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Maybe<Projects_Skills_1>>>;
  skills_func?: Maybe<Count_Functions>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};


export type ProjectsSkillsArgs = {
  filter?: InputMaybe<Projects_Skills_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Projects_Skills = {
  __typename?: 'Projects_Skills';
  Projects_id?: Maybe<Projects>;
  Skills_id?: Maybe<Skills>;
  id: Scalars['ID']['output'];
};


export type Projects_SkillsProjects_IdArgs = {
  filter?: InputMaybe<Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Projects_SkillsSkills_IdArgs = {
  filter?: InputMaybe<Skills_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Projects_Skills_1 = {
  __typename?: 'Projects_Skills_1';
  Projects_id?: Maybe<Projects>;
  Skills_id?: Maybe<Skills>;
  id: Scalars['ID']['output'];
};


export type Projects_Skills_1Projects_IdArgs = {
  filter?: InputMaybe<Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Projects_Skills_1Skills_IdArgs = {
  filter?: InputMaybe<Skills_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Projects_Skills_1_Aggregated = {
  __typename?: 'Projects_Skills_1_aggregated';
  avg?: Maybe<Projects_Skills_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Projects_Skills_1_Aggregated_Fields>;
  count?: Maybe<Projects_Skills_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Projects_Skills_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Projects_Skills_1_Aggregated_Fields>;
  min?: Maybe<Projects_Skills_1_Aggregated_Fields>;
  sum?: Maybe<Projects_Skills_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Projects_Skills_1_Aggregated_Fields>;
};

export type Projects_Skills_1_Aggregated_Count = {
  __typename?: 'Projects_Skills_1_aggregated_count';
  Projects_id?: Maybe<Scalars['Int']['output']>;
  Skills_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Projects_Skills_1_Aggregated_Fields = {
  __typename?: 'Projects_Skills_1_aggregated_fields';
  Projects_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Projects_Skills_1_Filter = {
  Projects_id?: InputMaybe<Projects_Filter>;
  Skills_id?: InputMaybe<Skills_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Projects_Skills_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Projects_Skills_1_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Projects_Skills_1_Mutated = {
  __typename?: 'Projects_Skills_1_mutated';
  data?: Maybe<Projects_Skills_1>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Projects_Skills_Aggregated = {
  __typename?: 'Projects_Skills_aggregated';
  avg?: Maybe<Projects_Skills_Aggregated_Fields>;
  avgDistinct?: Maybe<Projects_Skills_Aggregated_Fields>;
  count?: Maybe<Projects_Skills_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Projects_Skills_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Projects_Skills_Aggregated_Fields>;
  min?: Maybe<Projects_Skills_Aggregated_Fields>;
  sum?: Maybe<Projects_Skills_Aggregated_Fields>;
  sumDistinct?: Maybe<Projects_Skills_Aggregated_Fields>;
};

export type Projects_Skills_Aggregated_Count = {
  __typename?: 'Projects_Skills_aggregated_count';
  Projects_id?: Maybe<Scalars['Int']['output']>;
  Skills_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Projects_Skills_Aggregated_Fields = {
  __typename?: 'Projects_Skills_aggregated_fields';
  Projects_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Projects_Skills_Filter = {
  Projects_id?: InputMaybe<Projects_Filter>;
  Skills_id?: InputMaybe<Skills_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Projects_Skills_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Projects_Skills_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Projects_Skills_Mutated = {
  __typename?: 'Projects_Skills_mutated';
  data?: Maybe<Projects_Skills>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Projects_Aggregated = {
  __typename?: 'Projects_aggregated';
  avg?: Maybe<Projects_Aggregated_Fields>;
  avgDistinct?: Maybe<Projects_Aggregated_Fields>;
  count?: Maybe<Projects_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Projects_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Projects_Aggregated_Fields>;
  min?: Maybe<Projects_Aggregated_Fields>;
  sum?: Maybe<Projects_Aggregated_Fields>;
  sumDistinct?: Maybe<Projects_Aggregated_Fields>;
};

export type Projects_Aggregated_Count = {
  __typename?: 'Projects_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  skills?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['Int']['output']>;
};

export type Projects_Aggregated_Fields = {
  __typename?: 'Projects_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Projects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Projects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Projects_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  skills?: InputMaybe<Projects_Skills_1_Filter>;
  skills_func?: InputMaybe<Count_Function_Filter_Operators>;
  thumbnail?: InputMaybe<String_Filter_Operators>;
};

export type Projects_Mutated = {
  __typename?: 'Projects_mutated';
  data?: Maybe<Projects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  Projects: Array<Projects>;
  Projects_Skills: Array<Projects_Skills>;
  Projects_Skills_1: Array<Projects_Skills_1>;
  Projects_Skills_1_aggregated: Array<Projects_Skills_1_Aggregated>;
  Projects_Skills_1_by_id?: Maybe<Projects_Skills_1>;
  Projects_Skills_1_by_version?: Maybe<Version_Projects_Skills_1>;
  Projects_Skills_aggregated: Array<Projects_Skills_Aggregated>;
  Projects_Skills_by_id?: Maybe<Projects_Skills>;
  Projects_Skills_by_version?: Maybe<Version_Projects_Skills>;
  Projects_aggregated: Array<Projects_Aggregated>;
  Projects_by_id?: Maybe<Projects>;
  Projects_by_version?: Maybe<Version_Projects>;
  Skills: Array<Skills>;
  Skills_aggregated: Array<Skills_Aggregated>;
  Skills_by_id?: Maybe<Skills>;
  Skills_by_version?: Maybe<Version_Skills>;
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_SkillsArgs = {
  filter?: InputMaybe<Projects_Skills_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_Skills_1Args = {
  filter?: InputMaybe<Projects_Skills_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_Skills_1_AggregatedArgs = {
  filter?: InputMaybe<Projects_Skills_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_Skills_1_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjects_Skills_1_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryProjects_Skills_AggregatedArgs = {
  filter?: InputMaybe<Projects_Skills_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_Skills_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjects_Skills_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryProjects_AggregatedArgs = {
  filter?: InputMaybe<Projects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjects_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjects_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySkillsArgs = {
  filter?: InputMaybe<Skills_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySkills_AggregatedArgs = {
  filter?: InputMaybe<Skills_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySkills_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySkills_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Skills = {
  __typename?: 'Skills';
  color?: Maybe<Scalars['String']['output']>;
  dark?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type Skills_Aggregated = {
  __typename?: 'Skills_aggregated';
  count?: Maybe<Skills_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Skills_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Skills_Aggregated_Count = {
  __typename?: 'Skills_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  dark?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Skills_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Skills_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Skills_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dark?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
};

export type Skills_Mutated = {
  __typename?: 'Skills_mutated';
  data?: Maybe<Skills>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  Projects_Skills_1_mutated?: Maybe<Projects_Skills_1_Mutated>;
  Projects_Skills_mutated?: Maybe<Projects_Skills_Mutated>;
  Projects_mutated?: Maybe<Projects_Mutated>;
  Skills_mutated?: Maybe<Skills_Mutated>;
};


export type SubscriptionProjects_Skills_1_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionProjects_Skills_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionProjects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSkills_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Version_Projects = {
  __typename?: 'version_Projects';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Scalars['JSON']['output']>;
  skills_func?: Maybe<Count_Functions>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type Version_Projects_Skills = {
  __typename?: 'version_Projects_Skills';
  Projects_id?: Maybe<Scalars['JSON']['output']>;
  Skills_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Projects_Skills_1 = {
  __typename?: 'version_Projects_Skills_1';
  Projects_id?: Maybe<Scalars['JSON']['output']>;
  Skills_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Skills = {
  __typename?: 'version_Skills';
  color?: Maybe<Scalars['String']['output']>;
  dark?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', Skills: Array<{ __typename?: 'Skills', id: string, color?: string | null, dark?: boolean | null }> };


export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dark"}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;