export const getEnv = () => ({
  BASE_URL: process.env.REACT_APP_BASE_URL || "http://localhost:5173",
  BASE_API_URL: process.env.REACT_APP_BASE_API_URL || "http://localhost:1337",
});
