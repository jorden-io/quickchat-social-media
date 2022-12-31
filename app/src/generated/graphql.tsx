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

export type Comment = {
  __typename?: 'Comment';
  comment_body?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type CreateCommentInput = {
  comment_body?: InputMaybe<Scalars['String']>;
  post_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
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

export type CreateMessageInput = {
  group_id?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreatePostInput = {
  post_body?: InputMaybe<Scalars['String']>;
  post_title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateProfilePrefrenceInput = {
  accent_color?: InputMaybe<Scalars['String']>;
  background_color?: InputMaybe<Scalars['String']>;
  frame_color?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateTaskInput = {
  task?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateUserInput = {
  avatar_src?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  last_name: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  description?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  group_messages?: Maybe<Array<Maybe<Message>>>;
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

export type Message = {
  __typename?: 'Message';
  group_id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createGroup: Group;
  createMessage: Message;
  createPost: Post;
  createProfilePrefrence: ProfilePrefrence;
  createTask: Task;
  createUser: User;
  join: Member;
  login?: Maybe<Scalars['String']>;
  register: User;
  removeComment?: Maybe<Comment>;
  removeGroup?: Maybe<Group>;
  removeMember?: Maybe<Member>;
  removeMessage?: Maybe<Message>;
  removePost?: Maybe<Post>;
  removeProfilePrefrence?: Maybe<ProfilePrefrence>;
  removeTask?: Maybe<Task>;
  removeUser?: Maybe<User>;
  updateComment: Comment;
  updateGroup: Group;
  updateMember: Member;
  updateMessage: Message;
  updatePost: Post;
  updateProfilePrefrence?: Maybe<ProfilePrefrence>;
  updateTask: Task;
  updateUser: User;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateProfilePrefrenceArgs = {
  createProfilePrefrenceInput: CreateProfilePrefrenceInput;
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
  avatar_src?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveCommentArgs = {
  comment_id: Scalars['Int'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMemberArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMessageArgs = {
  message_id: Scalars['Int'];
};


export type MutationRemovePostArgs = {
  post_id: Scalars['Int'];
};


export type MutationRemoveProfilePrefrenceArgs = {
  user_id: Scalars['Int'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateCommentInput;
};


export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};


export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateProfilePrefrenceArgs = {
  updateProfilePrefrenceInput?: InputMaybe<UpdateProfilePrefrenceInput>;
};


export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Maybe<Comment>>>;
  post_body?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Int']>;
  post_title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ProfilePrefrence = {
  __typename?: 'ProfilePrefrence';
  accent_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  frame_color?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: Array<Maybe<Comment>>;
  findUser?: Maybe<User>;
  group?: Maybe<Group>;
  groups: Array<Maybe<Group>>;
  me?: Maybe<User>;
  member?: Maybe<Member>;
  memberinfo?: Maybe<Member>;
  members: Array<Maybe<Member>>;
  message?: Maybe<Message>;
  messages: Array<Maybe<Message>>;
  myPrefrences?: Maybe<ProfilePrefrence>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  profilePrefrence?: Maybe<ProfilePrefrence>;
  profilePrefrences: Array<Maybe<ProfilePrefrence>>;
  task?: Maybe<Task>;
  tasks: Array<Maybe<Task>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryCommentArgs = {
  comment_id: Scalars['Int'];
};


export type QueryFindUserArgs = {
  user_name?: InputMaybe<Scalars['String']>;
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


export type QueryMessageArgs = {
  message_id: Scalars['Int'];
};


export type QueryPostArgs = {
  post_id: Scalars['Int'];
};


export type QueryProfilePrefrenceArgs = {
  user_id: Scalars['Int'];
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

export type UpdateCommentInput = {
  comment_body?: InputMaybe<Scalars['String']>;
  comment_id: Scalars['Int'];
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  group_name?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdateMemberInput = {
  id: Scalars['Int'];
};

export type UpdateMessageInput = {
  message?: InputMaybe<Scalars['String']>;
  message_id: Scalars['Int'];
};

export type UpdatePostInput = {
  id: Scalars['Int'];
  post_body?: InputMaybe<Scalars['String']>;
  post_title?: InputMaybe<Scalars['String']>;
};

export type UpdateProfilePrefrenceInput = {
  accent_color?: InputMaybe<Scalars['String']>;
  background_color?: InputMaybe<Scalars['String']>;
  frame_color?: InputMaybe<Scalars['String']>;
  user_id: Scalars['Int'];
};

export type UpdateTaskInput = {
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  avatar_src?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatar_src?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  group_messages?: Maybe<Array<Maybe<Message>>>;
  groups?: Maybe<Array<Maybe<Group>>>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Member>>>;
  online?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profile_prefrences?: Maybe<Array<Maybe<ProfilePrefrence>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  user_name?: Maybe<Scalars['String']>;
};

export type CreateProfilePrefrenceMutationVariables = Exact<{
  createProfilePrefrenceInput: CreateProfilePrefrenceInput;
}>;


export type CreateProfilePrefrenceMutation = { __typename?: 'Mutation', createProfilePrefrence: { __typename?: 'ProfilePrefrence', user_id?: number | null, background_color?: string | null, frame_color?: string | null, accent_color?: string | null } };

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: string | null };

export type RegisterMutationVariables = Exact<{
  avatarSrc?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id?: number | null, email?: string | null, password?: string | null, user_name?: string | null } };

export type UpdateProfilePrefrencesMutationVariables = Exact<{
  updateProfilePrefrenceInput: UpdateProfilePrefrenceInput;
}>;


export type UpdateProfilePrefrencesMutation = { __typename?: 'Mutation', updateProfilePrefrence?: { __typename?: 'ProfilePrefrence', user_id?: number | null, background_color?: string | null, frame_color?: string | null, accent_color?: string | null } | null };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Group', group_name?: string | null, group_id?: number | null, description?: string | null, leader_id?: number | null } | null> };

export type GetUserQueryVariables = Exact<{
  userName?: InputMaybe<Scalars['String']>;
}>;


export type GetUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id?: number | null, email?: string | null, last_name?: string | null, first_name?: string | null, gender?: string | null, user_name?: string | null, avatar_src?: string | null, profile_prefrences?: Array<{ __typename?: 'ProfilePrefrence', accent_color?: string | null, background_color?: string | null, frame_color?: string | null } | null> | null, posts?: Array<{ __typename?: 'Post', post_id?: number | null, post_title?: string | null, post_body?: string | null, user_id?: number | null, comments?: Array<{ __typename?: 'Comment', comment_id?: number | null, comment_body?: string | null, user_id?: number | null, post_id?: number | null } | null> | null } | null> | null } | null };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id?: number | null } | null> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: number | null, email?: string | null, last_name?: string | null, first_name?: string | null, user_name?: string | null, gender?: string | null, avatar_src?: string | null, online?: boolean | null, posts?: Array<{ __typename?: 'Post', post_id?: number | null, post_title?: string | null, user_id?: number | null, post_body?: string | null, comments?: Array<{ __typename?: 'Comment', comment_id?: number | null, comment_body?: string | null, user_id?: number | null, post_id?: number | null } | null> | null } | null> | null, profile_prefrences?: Array<{ __typename?: 'ProfilePrefrence', user_id?: number | null, frame_color?: string | null, background_color?: string | null, accent_color?: string | null } | null> | null, groups?: Array<{ __typename?: 'Group', group_id?: number | null, group_name?: string | null, description?: string | null, leader_id?: number | null } | null> | null } | null };


export const CreateProfilePrefrenceDocument = gql`
    mutation CreateProfilePrefrence($createProfilePrefrenceInput: CreateProfilePrefrenceInput!) {
  createProfilePrefrence(
    createProfilePrefrenceInput: $createProfilePrefrenceInput
  ) {
    user_id
    background_color
    frame_color
    accent_color
  }
}
    `;
export type CreateProfilePrefrenceMutationFn = Apollo.MutationFunction<CreateProfilePrefrenceMutation, CreateProfilePrefrenceMutationVariables>;

/**
 * __useCreateProfilePrefrenceMutation__
 *
 * To run a mutation, you first call `useCreateProfilePrefrenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfilePrefrenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfilePrefrenceMutation, { data, loading, error }] = useCreateProfilePrefrenceMutation({
 *   variables: {
 *      createProfilePrefrenceInput: // value for 'createProfilePrefrenceInput'
 *   },
 * });
 */
export function useCreateProfilePrefrenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfilePrefrenceMutation, CreateProfilePrefrenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfilePrefrenceMutation, CreateProfilePrefrenceMutationVariables>(CreateProfilePrefrenceDocument, options);
      }
export type CreateProfilePrefrenceMutationHookResult = ReturnType<typeof useCreateProfilePrefrenceMutation>;
export type CreateProfilePrefrenceMutationResult = Apollo.MutationResult<CreateProfilePrefrenceMutation>;
export type CreateProfilePrefrenceMutationOptions = Apollo.BaseMutationOptions<CreateProfilePrefrenceMutation, CreateProfilePrefrenceMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String, $password: String) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($avatarSrc: String, $gender: String, $firstName: String, $lastName: String, $userName: String, $email: String, $password: String) {
  register(
    avatar_src: $avatarSrc
    gender: $gender
    first_name: $firstName
    last_name: $lastName
    user_name: $userName
    email: $email
    password: $password
  ) {
    id
    email
    password
    user_name
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      avatarSrc: // value for 'avatarSrc'
 *      gender: // value for 'gender'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      userName: // value for 'userName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateProfilePrefrencesDocument = gql`
    mutation updateProfilePrefrences($updateProfilePrefrenceInput: UpdateProfilePrefrenceInput!) {
  updateProfilePrefrence(
    updateProfilePrefrenceInput: $updateProfilePrefrenceInput
  ) {
    user_id
    background_color
    frame_color
    accent_color
  }
}
    `;
export type UpdateProfilePrefrencesMutationFn = Apollo.MutationFunction<UpdateProfilePrefrencesMutation, UpdateProfilePrefrencesMutationVariables>;

/**
 * __useUpdateProfilePrefrencesMutation__
 *
 * To run a mutation, you first call `useUpdateProfilePrefrencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfilePrefrencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfilePrefrencesMutation, { data, loading, error }] = useUpdateProfilePrefrencesMutation({
 *   variables: {
 *      updateProfilePrefrenceInput: // value for 'updateProfilePrefrenceInput'
 *   },
 * });
 */
export function useUpdateProfilePrefrencesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfilePrefrencesMutation, UpdateProfilePrefrencesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfilePrefrencesMutation, UpdateProfilePrefrencesMutationVariables>(UpdateProfilePrefrencesDocument, options);
      }
export type UpdateProfilePrefrencesMutationHookResult = ReturnType<typeof useUpdateProfilePrefrencesMutation>;
export type UpdateProfilePrefrencesMutationResult = Apollo.MutationResult<UpdateProfilePrefrencesMutation>;
export type UpdateProfilePrefrencesMutationOptions = Apollo.BaseMutationOptions<UpdateProfilePrefrencesMutation, UpdateProfilePrefrencesMutationVariables>;
export const GroupsDocument = gql`
    query groups {
  groups {
    group_name
    group_id
    description
    leader_id
  }
}
    `;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
      }
export function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const GetUserDocument = gql`
    query getUser($userName: String) {
  findUser(user_name: $userName) {
    id
    email
    last_name
    first_name
    gender
    user_name
    avatar_src
    profile_prefrences {
      accent_color
      background_color
      frame_color
    }
    posts {
      post_id
      post_title
      post_body
      user_id
      comments {
        comment_id
        comment_body
        user_id
        post_id
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    last_name
    first_name
    user_name
    gender
    avatar_src
    online
    posts {
      post_id
      post_title
      user_id
      post_body
      comments {
        comment_id
        comment_body
        user_id
        post_id
      }
    }
    profile_prefrences {
      user_id
      frame_color
      background_color
      accent_color
    }
    groups {
      group_id
      group_name
      description
      leader_id
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;