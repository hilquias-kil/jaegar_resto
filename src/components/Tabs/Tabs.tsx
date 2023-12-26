import Link from "next/link";

interface TabProps {
  children: string;
  href: string;
  active?: boolean;
}

const tabVariants = {
  active:
    "text-primary after:content-[''] after:block after:absolute after:bg-primary after:w-1/2 after:h-[3px] after:bottom-0",
  default: "text-white",
};

const Tab = ({ children, href, active }: TabProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`text-sm font-semibold hover:text-primary pb-3 block relative ${
          active ? tabVariants.active : tabVariants.default
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export const Tabs = () => {
  return (
    <ul className="flex gap-8 border-b-line border-b-[1px] mb-6">
      <Tab href="/" active>
        Hot Dishes
      </Tab>
      <Tab href="/">Cold Dishes</Tab>
      <Tab href="/">Soup</Tab>
      <Tab href="/">Grill</Tab>
      <Tab href="/">Appetizer</Tab>
      <Tab href="/">Dessert</Tab>
    </ul>
  );
};
