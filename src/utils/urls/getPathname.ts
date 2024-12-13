export const getPagePath = {
  homePage: () => "/",
  tokenWritePage: () => "/token/write",
  tokenDetailPage: ({ id }: { id: string }) => `/token/${id}`,
  tokenEditPage: ({ id }: { id: string }) => `/token/${id}/edit`,
};
