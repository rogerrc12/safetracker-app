export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: any;
}

export type IAuthCredentials = Pick<IAuthState, "token" | "user">;
