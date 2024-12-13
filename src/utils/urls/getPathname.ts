export const getPagePath = {
  homePage: () => "/",
  logInPage: () => "/auth/log-in",
  signUpPage: () => "/auth/sign-up",
  tokenWritePage: () => "/token/write",
  tokenDetailPage: ({ id }: { id: string }) => `/token/${id}`,
  tokenEditPage: ({ id }: { id: string }) => `/token/${id}/edit`,
};
