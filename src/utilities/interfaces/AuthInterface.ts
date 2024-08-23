
export interface IUserLogin {
  Email: string;
  Password: string;
}

export interface IAuthModel {
  accessTokenExpireOn: Date | null;
  email: string;
  isAuthenticated: boolean;
  message: string | null;
  refrashToken: string;
  refreshTokenExpiresOn: Date | null;
  roles: string[];
  token: string;
  username: string | null;
  userId: string | null;
}
