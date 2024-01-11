// config.ts

interface AppConfig {
  brandName: string;
  socialLinks: {
    github: string;
    twitter: string;
    discord?: string; // Optional
    linkedin?: string; // Optional
    // ... add other social networks as needed
  };
  // Add other configuration sections as needed
}

const config: AppConfig = {
  brandName: "marcodsn",
  socialLinks: {
    github: "https://github.com/marcodsn",
    twitter: "https://twitter.com/marcodsn",
    discord: "https://discord.com/invite/invitecode",
    // linkedin: "https://linkedin.com/in/yourusername", // Uncomment if needed
    // ... other links
  },
  // Other configurations can be added here
};

export default config;
