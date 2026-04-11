const USER_COLORS = [
  "#ff6b6b", // coral red
  "#4ecdc4", // teal
  "#45b7d1", // sky blue
  "#96ceb4", // sage green
  "#ffeaa7", // soft yellow
  "#dda0dd", // plum
  "#98d8c8", // mint
  "#f7dc6f", // gold
  "#bb8fce", // lavender purple
  "#85c1e9", // light blue
];

export function getUserColor(username: string): string {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = (hash * 31 + username.charCodeAt(i)) >>> 0;
  }
  return USER_COLORS[hash % USER_COLORS.length];
}
