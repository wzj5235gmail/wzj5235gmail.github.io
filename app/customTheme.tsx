import type { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: "text-lg block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700  text-color4 font-bold",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-white",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    },
  },
  footer: {
    groupLink: {
      base: "flex flex-wrap text-sm text-white dark:text-white",
    },
    title: {
      base: "mb-6 text-lg font-semibold uppercase text-color4 dark:text-white",
    },
    copyright: {
      base: "text-sm text-white dark:text-gray-400 sm:text-center",
    },
    icon: {
      base: "text-white dark:hover:text-white",
    },
    root: {
      base: "w-full bg-color6 dark:bg-gray-800 md:flex md:items-center md:justify-between",
    },
  },
};
