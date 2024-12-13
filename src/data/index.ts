export interface TokenSchema {
  id: string;
  tokenName: string;
  tokenDescription: string;
  tokenValue: string;
  tokenCreatedDate: Date;
  tokenExpiryDate: Date;
  notificationOption: string;
  createdAt: Date;
}

export const dummyTokens: TokenSchema[] = [
  {
    id: "1",
    tokenName: "Token-1",
    tokenDescription: "AWS",
    tokenValue: "a2026f214cb86b08960",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-11-19T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "2",
    tokenName: "Token-2",
    tokenDescription: "AWS",
    tokenValue: "11d0a8af15f46c475157",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-11-12T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "3",
    tokenName: "Token-3",
    tokenDescription: "MS",
    tokenValue: "c4f6d43ab12a9f938ed",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-12-22T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "4",
    tokenName: "Token-4",
    tokenDescription: "AWS",
    tokenValue: "cf000932e6bda584c06",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2025-01-06T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "5",
    tokenName: "Token-5",
    tokenDescription: "AWS",
    tokenValue: "49e075b170ece61176f",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-12-20T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "6",
    tokenName: "Token-6",
    tokenDescription: "MS",
    tokenValue: "8c01e1fac6b2a6cb34f",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2025-01-18T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "7",
    tokenName: "Token-7",
    tokenDescription: "AWS",
    tokenValue: "e48a0bfd7cd31c695fc",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-12-17T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "8",
    tokenName: "Token-8",
    tokenDescription: "MS",
    tokenValue: "b8c8f9829efb8dd02e5",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-12-29T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "9",
    tokenName: "Token-9",
    tokenDescription: "MS",
    tokenValue: "17dbc3dedd286005fb14",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2024-12-18T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: "10",
    tokenName: "Token-10",
    tokenDescription: "MS",
    tokenValue: "126b1aa551e766a6e921",
    tokenCreatedDate: "2024-12-12T00:00:00.000Z",
    tokenExpiryDate: "2025-01-02T00:00:00.000Z",
    notificationOption: "1 day before expiry",
    createdAt: "2024-12-12T00:00:00.000Z",
  },
].map((token) => {
  return {
    ...token,
    tokenCreatedDate: new Date(token.tokenCreatedDate),
    tokenExpiryDate: new Date(token.tokenExpiryDate),
    createdAt: new Date(token.createdAt),
  };
});
