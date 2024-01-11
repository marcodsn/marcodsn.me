import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import AppConfig from "@/app/config"

// Define an array of social media platforms
const socialMediaLinks = [
    {
      name: 'Github',
      icon: <FaGithub />,
      url: AppConfig.socialLinks.github
    },
    {
      name: 'Discord',
      icon: <FaDiscord />,
      url: AppConfig.socialLinks.discord
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: AppConfig.socialLinks.twitter
    }
    // Add more social media platforms as needed
  ];
  
  export function SocialMediaIcons() {
      return (
          <div className="flex gap-2">
              {socialMediaLinks.map(({ name, icon, url }) => (
                  <a
                      key={name}
                      target="_blank"
                      href={url}
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground focus:outline-accent-foreground"
                  >
                      {icon}
                  </a>
              ))}
          </div>
      );
  }
