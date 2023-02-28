import Link from "next/link";
import Button from "./button";

export interface MenuItem {
  name: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
}

export default function BaseMenu({ menuItems }: Props) {
  return (
    <nav className="my-4 flex justify-center ">
      <ul className="flex space-x-4">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.link}>
              <Button name={menuItem.name} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
