
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCommentInput {
    comment_body?: Nullable<string>;
    post_id?: Nullable<number>;
    user_id?: Nullable<number>;
}

export class UpdateCommentInput {
    comment_id: number;
    comment_body?: Nullable<string>;
}

export class CreateGroupInput {
    group_name?: Nullable<string>;
    description?: Nullable<string>;
    leader_id?: Nullable<number>;
}

export class UpdateGroupInput {
    id: number;
    group_name?: Nullable<string>;
    description?: Nullable<string>;
}

export class CreateMemberInput {
    group_id?: Nullable<number>;
    member_id?: Nullable<number>;
}

export class UpdateMemberInput {
    id: number;
}

export class CreateMessageInput {
    message?: Nullable<string>;
    user_id?: Nullable<number>;
    group_id?: Nullable<number>;
}

export class UpdateMessageInput {
    message?: Nullable<string>;
    message_id: number;
}

export class CreatePostInput {
    user_id?: Nullable<number>;
    post_title?: Nullable<string>;
    post_body?: Nullable<string>;
}

export class UpdatePostInput {
    post_title?: Nullable<string>;
    post_body?: Nullable<string>;
    id: number;
}

export class CreateProfilePrefrenceInput {
    user_id?: Nullable<number>;
    background_color?: Nullable<string>;
    frame_color?: Nullable<string>;
    accent_color?: Nullable<string>;
}

export class UpdateProfilePrefrenceInput {
    id?: Nullable<number>;
    background_color?: Nullable<string>;
    frame_color?: Nullable<string>;
    accent_color?: Nullable<string>;
}

export class CreateTaskInput {
    task?: Nullable<string>;
    user_id?: Nullable<number>;
}

export class UpdateTaskInput {
    id: number;
}

export class CreateUserInput {
    first_name: string;
    last_name: string;
    user_name: string;
    avatar_src?: Nullable<string>;
    gender?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
}

export class UpdateUserInput {
    id: number;
    avatar_src?: Nullable<string>;
    gender?: Nullable<string>;
    first_name: string;
}

export class Comment {
    comment_id?: Nullable<number>;
    comment_body?: Nullable<string>;
    user_id?: Nullable<number>;
    post_id?: Nullable<number>;
}

export abstract class IQuery {
    abstract comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;

    abstract comment(comment_id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;

    abstract group(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract members(): Nullable<Member>[] | Promise<Nullable<Member>[]>;

    abstract member(id: number): Nullable<Member> | Promise<Nullable<Member>>;

    abstract memberinfo(member_id?: Nullable<number>): Nullable<Member> | Promise<Nullable<Member>>;

    abstract messages(): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract message(message_id: number): Nullable<Message> | Promise<Nullable<Message>>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(post_id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract profilePrefrences(): Nullable<ProfilePrefrence>[] | Promise<Nullable<ProfilePrefrence>[]>;

    abstract profilePrefrence(id: number): Nullable<ProfilePrefrence> | Promise<Nullable<ProfilePrefrence>>;

    abstract tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: number): Nullable<Task> | Promise<Nullable<Task>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;

    abstract findUser(user_name?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(comment_id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;

    abstract updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;

    abstract removeGroup(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract join(createMemberInput: CreateMemberInput): Member | Promise<Member>;

    abstract updateMember(updateMemberInput: UpdateMemberInput): Member | Promise<Member>;

    abstract removeMember(id: number): Nullable<Member> | Promise<Nullable<Member>>;

    abstract createMessage(createMessageInput: CreateMessageInput): Message | Promise<Message>;

    abstract updateMessage(updateMessageInput: UpdateMessageInput): Message | Promise<Message>;

    abstract removeMessage(message_id: number): Nullable<Message> | Promise<Nullable<Message>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(post_id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createProfilePrefrence(createProfilePrefrenceInput: CreateProfilePrefrenceInput): ProfilePrefrence | Promise<ProfilePrefrence>;

    abstract updateProfilePrefrence(updateProfilePrefrenceInput: UpdateProfilePrefrenceInput): ProfilePrefrence | Promise<ProfilePrefrence>;

    abstract removeProfilePrefrence(id: number): Nullable<ProfilePrefrence> | Promise<Nullable<ProfilePrefrence>>;

    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;

    abstract removeTask(id: number): Nullable<Task> | Promise<Nullable<Task>>;

    abstract login(email?: Nullable<string>, password?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;

    abstract register(avatar_src?: Nullable<string>, gender?: Nullable<string>, first_name?: Nullable<string>, last_name?: Nullable<string>, user_name?: Nullable<string>, email?: Nullable<string>, password?: Nullable<string>): User | Promise<User>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Group {
    group_id?: Nullable<number>;
    group_name?: Nullable<string>;
    description?: Nullable<string>;
    leader_id?: Nullable<number>;
    users?: Nullable<Nullable<User>[]>;
    members?: Nullable<Nullable<Member>[]>;
    group_messages?: Nullable<Nullable<Message>[]>;
}

export class Member {
    member_id?: Nullable<number>;
    id?: Nullable<number>;
    group_id?: Nullable<number>;
    users?: Nullable<Nullable<User>[]>;
    group?: Nullable<Nullable<Group>[]>;
}

export class Message {
    message_id?: Nullable<number>;
    message?: Nullable<string>;
    user_id?: Nullable<number>;
    group_id?: Nullable<number>;
}

export class Post {
    post_id?: Nullable<number>;
    post_title?: Nullable<string>;
    post_body?: Nullable<string>;
    user_id?: Nullable<number>;
    comments?: Nullable<Nullable<Comment>[]>;
}

export class ProfilePrefrence {
    id?: Nullable<number>;
    user_id?: Nullable<number>;
    background_color?: Nullable<string>;
    frame_color?: Nullable<string>;
    accent_color?: Nullable<string>;
}

export class Task {
    id: number;
    task: string;
}

export class User {
    id?: Nullable<number>;
    email?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    user_name?: Nullable<string>;
    gender?: Nullable<string>;
    avatar_src?: Nullable<string>;
    password?: Nullable<string>;
    online?: Nullable<boolean>;
    posts?: Nullable<Nullable<Post>[]>;
    tasks?: Nullable<Nullable<Task>[]>;
    groups?: Nullable<Nullable<Group>[]>;
    group_messages?: Nullable<Nullable<Message>[]>;
    members?: Nullable<Nullable<Member>[]>;
    comments?: Nullable<Nullable<Comment>[]>;
    profile_prefrences?: Nullable<Nullable<ProfilePrefrence>[]>;
}

type Nullable<T> = T | null;
