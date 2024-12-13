export interface TokenSchema {
  id: string;
  tokenName: string;
  tokenDescription: string;
  tokenValue: string;
  tokenCreatedDate: Date;
  tokenExpiryDate: Date;
  notificationOption: string;
  createdAt: Date;
  userId: string;
}
