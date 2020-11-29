export interface User {
  email: string;
  email_verified: true;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
  "https://hasura.io/jwt/claims": {
    "x-hasura-user-id": string;
  };
}
