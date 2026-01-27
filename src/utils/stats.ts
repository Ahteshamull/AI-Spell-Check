export interface Stats {
  totalChecks: number;
  totalFixes: number;
  lastUsed: Date;
}

let stats: Stats = {
  totalChecks: 0,
  totalFixes: 0,
  lastUsed: new Date()
};

export function incrementChecks(): void {
  stats.totalChecks++;
  stats.lastUsed = new Date();
}

export function incrementFixes(): void {
  stats.totalFixes++;
  stats.lastUsed = new Date();
}

export function getStats(): Stats {
  return { ...stats };
}
