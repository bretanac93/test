module.exports = {
  "**/*.{vue,ts,tsx,js,jsx,css,scss}": ["prettier --write", "git add"],
  "src/**/*.{ts,tsx}": ["npm run lint:fix", "git add"]
};
