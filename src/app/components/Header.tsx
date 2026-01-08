import Link from "next/link";
import Logo from "./Logo";

const routes = [
  { path: "/", label: "Home" },
  { path: "/events/all", label: "All Events" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-6 text-sm">
          {routes.map((route) => (
            <li key={route.path} className="text-white/50 hover:text-white transition">
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  )
}

