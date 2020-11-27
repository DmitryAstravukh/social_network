import * as initActions from './init';
import * as authActions from './auth';
import * as profileActions from './profile';
import * as usersActions from './users';

//https://habr.com/ru/company/alfa/blog/452620/
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InitActions = ReturnType<InferValueTypes<typeof initActions>>;
export type AuthActions = ReturnType<InferValueTypes<typeof authActions>>;
export type ProfileActions = ReturnType<InferValueTypes<typeof profileActions>>;
export type UsersActions = ReturnType<InferValueTypes<typeof usersActions>>;