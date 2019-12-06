export interface IXboxProfile {
  xuid: string;
  profilePic: string;
  gamerTag: string;
  gamerScore: string;
  reputation: string;
  isOnline: boolean;
  currentlyPlaying: string;
  isBroadcasting: boolean;
  preferredColor: IPreferredColor;
  accountDetails: IAccountDetails;
}

export interface IPreferredColor {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export interface IAccountDetails {
  accountTier: string;
  bio: string;
  followerCount: number;
  followingCount: number;
  hasGamePass: string;
}
