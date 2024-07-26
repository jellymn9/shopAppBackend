export interface RegisterUserI {
  username: string;
  password: string;
  email: string;
}

export interface LoginUserI {
  username: string;
  password: string;
}

export type ReqDataT = RegisterUserI | LoginUserI;

// export type FindDataErrorT = <T>(data: T) => string | undefined;

// export interface GenericIdentityFn {
//   <Type>(data: Type): string | undefined;
// }
