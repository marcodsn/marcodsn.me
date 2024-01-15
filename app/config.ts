// config.ts

interface AppConfig {
  brandName: string;
  socialLinks: {
    github?: string;
    githubAlt?: string; // Optional
    twitter?: string;
    twitterAlt?: string; // Optional
    discord?: string; // Optional
    discordAlt?: string; // Optional
    linkedin?: string; // Optional
    // ... add other social networks as needed
  };
  // Add other configuration sections as needed
}

const config: AppConfig = {
  brandName: "marcodsn",
  socialLinks: {
    github: "https://github.com/marcodsn",
    githubAlt: "@marcodsn",
    twitter: "https://twitter.com/marcodsn_",
    twitterAlt: "@marcodsn_",
    discord: "https://discordapp.com/users/149204830198562816",
    discordAlt: "@marcodsn",
    // linkedin: "https://linkedin.com/in/yourusername", // Uncomment if needed
    // ... other links
  },
  // Other configurations can be added here
};

export default config;
