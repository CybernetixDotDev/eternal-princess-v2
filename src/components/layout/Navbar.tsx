import Link from "next/link";

const navItems = [
  { href: "#atelier", label: "Atelier" },
  { href: "#garden", label: "Garden" },
  { href: "#cosmos", label: "Cosmos" },
  { href: "/playground", label: "Playground" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/55 bg-white/35 px-5 py-3 shadow-[0_18px_55px_rgba(96,45,104,0.12)] backdrop-blur-xl">
        <Link href="/" className="font-serif text-lg font-semibold text-plum-950">
          Eternal Princess
        </Link>
        <div className="hidden items-center gap-2 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-plum-900/75 transition hover:bg-white/50 hover:text-plum-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
