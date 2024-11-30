import MenuItem from "./menu-item";

const SidePanel = () => {
  const menuItems = [
    {
      imageSrc: "/images/warning.png",
      label: "WORK",
      subtitle: "A selection of recent work",
      href: "/gallery",
    },
    {
      imageSrc: "/images/warning.png",
      label: "PLAY",
      subtitle: "Making things for fun",
      href: "/play",
    },
    {
      imageSrc: "/images/warning.png",
      label: "ABOUT",
      subtitle: "Let's get to know each other",
      href: "/about",
    },
  ];

  return (
    <aside className="ui hidden md:flex flex-col w-80 h-screen bg-background border-r p-4 fixed left-0 top-0">
      <nav className="space-y-4 mt-16">
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            imageSrc={item.imageSrc}
            label={item.label}
            subtitle={item.subtitle}
            href={item.href}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SidePanel;
