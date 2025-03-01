import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  pathnames: {
    "/": {
      pt: "/",
      en: "/",
      es: "/",
    },
    "/escunas": {
      pt: "/escunas",
      en: "/escunas",
      es: "/escunas",
    },
    "/jeep": {
      pt: "/jeep",
      en: "/jeep",
      es: "/jeep",
    },
    "/privativos": {
      pt: "/privativos",
      en: "/privativos",
      es: "/privativos",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing)["locales"][number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
