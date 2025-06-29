import { Button } from "@/components/ui/button";

const Sidebar = ({ current, setCurrent }) => {
  const links = [
    { label: "Overview", key: "overview" },
    { label: "Orders", key: "orders" },
    { label: "Cart", key: "cart" },
    { label: "Settings", key: "settings" },
    { label: "Password", key: "password" },
  ];

  return (
    <aside className="w-48 p-4 border-r space-y-2">
      {links.map((link) => (
        <Button
          key={link.key}
          variant={current === link.key ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setCurrent(link.key)}
        >
          {link.label}
        </Button>
      ))}
    </aside>
  );
};

export default Sidebar;