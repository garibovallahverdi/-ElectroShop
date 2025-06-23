"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { useCart } from "@/lib/context/CartContext ";

export function Navbar() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { cart, removeFromCart, clearCart } = useCart();

  const categories = [
    { name: "Kompüterlər", href: "/products/komputerler" },
    { name: "Telefonlar", href: "/products/telefonlar" },
    { name: "Aksessuarlar", href: "/products/aksessuarlar" },
    { name: "Televizorlar", href: "/products/televizorlar" },
  ];
  // Search input'a tıklanınca odaklan
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // ESC ile kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-nowrap text-blue-600">
          🛒 ElectroShop
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Kateqoriya Dropdown */}
            <Link href="/" className="hover:text-blue-600 text-nowrap">
            Ana səhifə
          </Link>
          <div
            className="relative"
            // onMouseEnter={() => setCategoriesOpen(true)}
            // onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              className="font-semibold text-nowrap hover:text-blue-600"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Kateqoriyalar ▾
            </button>

            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-40">
                {categories.map((cat) => (
                  <Link
                    href={cat.href}
                    key={cat.name}
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setCategoriesOpen(false)} // Dropdown kapat
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

        
          <Link href="/about" className="hover:text-blue-600">
            Haqqımızda
          </Link>
        </nav>

   
        {/* Iconlar */}
        <div className="flex items-center space-x-4">
               {/* Masaüstü Arama */}
        <div className="hidden lg:flex items-center relative transition-all duration-300">
          {!searchOpen && (
            <button
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={22} />
            </button>
          )}

          {searchOpen && (
            <div className="flex items-center border border-gray-300 rounded px-2 py-1 ml-2 bg-white shadow transition-all w-64">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                ref={searchInputRef}
                type="text" 
                placeholder="Axtar..."
                className="w-full focus:outline-none"
                onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
              />
            </div>
          )}
        </div>
          {/* Səbət */}
          <Link href="/cart" className="relative hover:text-blue-600">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Hesabım */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <User size={24} />
              <span className="hidden md:inline">Hesabım ▾</span>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-blue-50 border-b"
              >
                Daxil ol
              </Link>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-blue-50 border-b"
              >
                Profilim
              </Link>
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50">
                Çıxış
              </button>
            </div>
          </div>

          {/* Mobil Hamburger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-6">
                  <Link href="/" className="text-lg font-semibold">
                    Ana səhifə
                  </Link>

                  <details>
                    <summary className="cursor-pointer font-semibold">
                      Kateqoriyalar
                    </summary>
                    <div className="pl-4 flex flex-col gap-2 mt-2">
                      {categories.map((cat) => (
                        <Link key={cat.name} href={cat.href}>
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <div>
                    <label className="font-semibold block mb-2">Axtar</label>
                    <input
                      type="text"
                      placeholder="Məhsul, marka və ya kateqoriya..."
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>

                  <Link href="/about" className="font-semibold">
                    Haqqımızda
                  </Link>
                  <Link href="/cart" className="font-semibold">
                    Səbət ({cart.length})
                  </Link>
                  <Link href="/login" className="font-semibold">
                    Daxil ol
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
