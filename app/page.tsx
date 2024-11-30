"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Types
interface ListItemProps {
  code: string;
  title: string;
  date: string;
  additionalInfo: string;
}

// Helper function to sort items by date
const sortByDate = (items: ListItemProps[]) => {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

// Define the ListItem component
const ListItem = ({ code, title, additionalInfo }: ListItemProps) => {
  return (
    <li className="ui w-full p-4 border-b hover-bg">
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {code} - {title} - {additionalInfo}
        </span>
        <ArrowUpRight size={16} />
      </div>
    </li>
  );
};

// Define the Tab Button component
const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-3 transition-all duration-200 ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
      style={{
        position: "relative",
        fontWeight: isActive ? "bold" : "normal",
        borderTop: isActive
          ? "4px solid var(--color-orange)"
          : "4px solid transparent",
        backgroundColor: isActive ? "var(--color-light-bg)" : "transparent",
      }}
    >
      {label}
    </button>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("HOME");
  const tabs = ["HOME", "POSTS", "WORKS"];

  const homeItems: ListItemProps[] = [
    {
      code: "H.01",
      title: "First Home Item",
      date: "2023-10-01",
      additionalInfo: "Featured",
    },
    {
      code: "H.02",
      title: "Second Home Item",
      date: "2023-09-15",
      additionalInfo: "New",
    },
    {
      code: "H.03",
      title: "Third Home Item",
      date: "2023-08-20",
      additionalInfo: "Popular",
    },
  ];

  const postItems: ListItemProps[] = [
    {
      code: "P.01",
      title: "First Blog Post",
      date: "2023-10-05",
      additionalInfo: "Technology",
    },
    {
      code: "P.02",
      title: "Second Blog Post",
      date: "2023-09-20",
      additionalInfo: "Design",
    },
    {
      code: "P.03",
      title: "Third Blog Post",
      date: "2023-08-25",
      additionalInfo: "Development",
    },
  ];

  const workItems: ListItemProps[] = [
    {
      code: "W.01",
      title: "Client Project",
      date: "2023-10-10",
      additionalInfo: "Web Development",
    },
    {
      code: "W.02",
      title: "Personal Project",
      date: "2023-09-25",
      additionalInfo: "Mobile App",
    },
    {
      code: "W.03",
      title: "Open Source",
      date: "2023-08-30",
      additionalInfo: "Library",
    },
  ];

  const getContent = () => {
    switch (activeTab) {
      case "HOME":
        return (
          <div>
            <ul>
              {sortByDate(homeItems).map((item) => (
                <ListItem key={item.code} {...item} />
              ))}
            </ul>
          </div>
        );
      case "POSTS":
        return (
          <div>
            <ul>
              {sortByDate(postItems).map((item) => (
                <ListItem key={item.code} {...item} />
              ))}
            </ul>
          </div>
        );
      case "WORKS":
        return (
          <div>
            <ul>
              {sortByDate(workItems).map((item) => (
                <ListItem key={item.code} {...item} />
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="text-3xl px-4">Undergrad CS Student</div>
      <div className="subtitle text-3xl px-4 pb-8">
        <span className="italic">Hobbiest</span> Developer <br />
        <span className="italic">Aspiring</span> Web Designer <br />
        <span className="italic">Aspiring</span> AI Researcher
      </div>
      <div className="ui tabs w-full border-b flex justify-start">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="content">{getContent()}</div>
    </div>
  );
}
