// config.ts

interface AppConfig {
  brandName: string;
  socialLinks: {
    github?: string;
    githubAlt?: string;
    instagram?: string;
    instagramAlt?: string;
    twitter?: string;
    twitterAlt?: string;
    discord?: string;
    discordAlt?: string;
    linkedin?: string;
    // ... add other social networks as needed
  };
  AIWriterKey?: string; // Optional
  // Add other configuration sections as needed
}

const config: AppConfig = {
  brandName: "marcodsn",
  socialLinks: {
    github: "https://github.com/marcodsn",
    githubAlt: "@marcodsn",
    instagram: "https://instagram.com/marcodsn_",
    instagramAlt: "@marcodsn_",
    twitter: "https://twitter.com/marcodsn_",
    twitterAlt: "@marcodsn_",
    discord: "https://discordapp.com/users/149204830198562816",
    discordAlt: "@marcodsn",
    // linkedin: "https://linkedin.com/in/yourusername", // Uncomment if needed
    // ... other links
  },
  AIWriterKey: "Muishiki", // Optional, if you don't want to use AI Writer, remove this line
  // Other configurations can be added here
};

export default config;
