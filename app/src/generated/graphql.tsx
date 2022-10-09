import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  group_name?: InputMaybe<Scalars['String']>;
  leader_id?: InputMaybe<Scalars['Int']>;
};

export type CreateMemberInput = {
  group_id?: InputMaybe<Scalars['Int']>;
  member_id?: InputMaybe<Scalars['Int']>;
};

export type CreateTaskInput = {
  task?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  description?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  group_name?: Maybe<Scalars['String']>;
  leader_id?: Maybe<Scalars['Int']>;
  members?: Maybe<Array<Maybe<Member>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Member = {
  __typename?: 'Member';
  group?: Maybe<Array<Maybe<Group>>>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup: Group;
  createTask: Task;
  createUser: User;
  join: Member;
  login?: Maybe<Scalars['String']>;
  register: User;
  removeGroup?: Maybe<Group>;
  removeMember?: Maybe<Member>;
  removeTask?: Maybe<Task>;
  removeUser?: Maybe<User>;
  updateGroup: Group;
  updateMember: Member;
  updateTask: Task;
  updateUser: User;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationJoinArgs = {
  createMemberInput: CreateMemberInput;
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveGroupArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMemberArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};


export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};


export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  group?: Maybe<Group>;
  groups: Array<Maybe<Group>>;
  me?: Maybe<User>;
  member?: Maybe<Member>;
  memberinfo?: Maybe<Member>;
  members: Array<Maybe<Member>>;
  task?: Maybe<Task>;
  tasks: Array<Maybe<Task>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryGroupArgs = {
  id: Scalars['Int'];
};


export type QueryMemberArgs = {
  id: Scalars['Int'];
};


export type QueryMemberinfoArgs = {
  member_id?: InputMaybe<Scalars['Int']>;
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['Int'];
  task: Scalars['String'];
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  group_name?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdateMemberInput = {
  id: Scalars['Int'];
};

export type UpdateTaskInput = {
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  id?: Maybe<Scalars['Int']>;
  member?: Maybe<Array<Maybe<Member>>>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type BroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type BroupsQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Group', group_name?: string | null, group_id?: number | null, description?: string | null, leader_id?: number | null, members?: Array<{ __typename?: 'Member', member_id?: number | null, id?: number | null, group_id?: number | null, users?: Array<{ __typename?: 'User', id?: number | null, name?: string | null, email?: string | null } | null> | null } | null> | null } | null> };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id?: number | null } | null> };


export const BroupsDocument = gql`
    query Broups {
  groups {
    group_name
    group_id
    description
    leader_id
    members {
      member_id
      id
      group_id
      users {
        id
        name
        email
      }
    }
  }
}
    `;

/**
 * __useBroupsQuery__
 *
 * To run a query within a React component, call `useBroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBroupsQuery(baseOptions?: Apollo.QueryHookOptions<BroupsQuery, BroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BroupsQuery, BroupsQueryVariables>(BroupsDocument, options);
      }
export function useBroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BroupsQuery, BroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BroupsQuery, BroupsQueryVariables>(BroupsDocument, options);
        }
export type BroupsQueryHookResult = ReturnType<typeof useBroupsQuery>;
export type BroupsLazyQueryHookResult = ReturnType<typeof useBroupsLazyQuery>;
export type BroupsQueryResult = Apollo.QueryResult<BroupsQuery, BroupsQueryVariables>;
export const HelloDocument = gql`
    query hello {
  users {
    id
  }
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;