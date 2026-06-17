"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: "🏠",
    },
    {
      name: "Hero Section",
      href: "/admin/hero",
      icon: "🦅",
    },
    {
      name: "Committees",
      href: "/admin/committees",
      icon: "🏛️",
    },
    {
      name: "Secretariat",
      href: "/admin/secretariat",
      icon: "👥",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-black border-r border-yellow-500/20 flex flex-col">

      {/* Header */}
      <div className="p-8 border-b border-yellow-500/20">

        <h1 className="text-3xl font-bold text-yellow-400">
          CSMUN 4.0
        </h1>

        <p className="text-gray-400 mt-2">
          Admin Dashboard
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                pathname === item.href
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:bg-yellow-500/10 hover:text-yellow-400"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>
            </Link>
          ))}

        </div>

      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-yellow-500/20">

        <div className="glass-card p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            CSMUN 4.0
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Cornerstone School
          </p>

        </div>

      </div>

    </aside>
  );
}