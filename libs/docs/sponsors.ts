export type SponsorType = "USER" | "ORGANIZATION" | "COLLECTIVE";
export type SponsorRole = "ADMIN" | "BACKER" | "CONTRIBUTOR" | "HOST" | "MEMBER" | "FUNDRAISER";

export const SPONSOR_TIERS = {
  BACKER: "Backer 🖤",
  BRONZE: "Bronze Sponsor 🥉",
  SILVER: "Silver Sponsor 🥈",
  GOLD: "Gold Sponsor 🥇",
  PLATINUM: "Platinum Sponsor ⭐️",
  HERO: "Hero Sponsor 🎖",
};

export const SPONSOR_TIER_BY_AMOUNT = {
  [SPONSOR_TIERS.HERO]: 1000,
  [SPONSOR_TIERS.PLATINUM]: 500,
  [SPONSOR_TIERS.GOLD]: 100,
  [SPONSOR_TIERS.SILVER]: 30,
  [SPONSOR_TIERS.BRONZE]: 10,
  [SPONSOR_TIERS.BACKER]: 1,
};

export const SPONSOR_COLORS = {
  [SPONSOR_TIERS.BACKER]: "default",
  [SPONSOR_TIERS.BRONZE]: "default",
  [SPONSOR_TIERS.SILVER]: "primary",
  [SPONSOR_TIERS.GOLD]: "warning",
  [SPONSOR_TIERS.PLATINUM]: "secondary",
  [SPONSOR_TIERS.HERO]: "gradient",
};

export type SponsorTiers =
  | "Backer 🖤"
  | "Bronze Sponsor 🥉"
  | "Silver Sponsor 🥈"
  | "Gold Sponsor 🥇"
  | "Platinum Sponsor ⭐️"
  | "Hero Sponsor 🎖";

export type Sponsor = {
  name: string;
  login: string;
  avatar: string;
  amount: number;
  link: string;
  org: boolean;
};

export const mockData: Sponsor[] = [

];

export const getTier = (amount: number) => {
  return (
    Object.keys(SPONSOR_TIER_BY_AMOUNT).find((tier) => amount >= SPONSOR_TIER_BY_AMOUNT[tier]) ??
    SPONSOR_TIERS.BACKER
  );
};
