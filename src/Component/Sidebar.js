import SidebarItem from "./SidebarItem";
import items from "../Data/Sidebar.json";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
