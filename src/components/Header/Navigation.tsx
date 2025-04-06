"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { classNames } from "@/utils";

const Navigation = ({ classes }: { classes?: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Category 1", href: "/#", current: false },
    { name: "Category 2", href: "/#", current: false },
    { name: "Category 3", href: "/#", current: false },
  ];

  return (
    <nav className={classes}>
      <div className="mx-auto max-w-7xl hidden md:block">
        <div className="flex h-16 items-center justify-between">
          <div className="ml-10 flex items-center space-x-4 text-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-slate-800 text-white"
                    : "text-current hover:text-gray-100 hover:bg-slate-800",
                  "rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden w-full" id="mobile-menu">
        <div className="">
          <button
            type="button"
            className="rounded-md m-1 p-2.5 text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Close menu</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={classNames(
            isMobileMenuOpen
              ? "opacity-100 bg-gray-900"
              : "opacity-0 pointer-events-none invisible",
            "absolute top-20 left-0 w-full z-2 p-2 transition-opacity duration-300 ease-in-out",
            "space-y-1 px-2 pt-2 pb-3 sm:px-3 z-2"
          )}
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-slate-800 text-white"
                  : "text-white hover:bg-slate-800",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
