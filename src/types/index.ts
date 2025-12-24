export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  avatarUrl?: string;
  score: number;
  rank: number;
  updatedAt: string;
  prize?: string;
}

export interface LeaderboardSeason {
  seasonId: string;
  startsAt: string;
  endsAt: string;
  poolSize: number;
  rulesVersion: string;
}

export interface TransparencyKPI {
  burnTotal: number;
  poolSize: number;
  referralTotal: number;
  treasuryTotal: number;
  lastUpdatedAt: string;
}

export interface TransparencyTx {
  txHash: string;
  sourceChain: string;
  category: 'ticket' | 'revive' | 'burn' | 'referral' | 'platform' | 'sponsor';
  amountBWT: number;
  timestamp: string;
}
