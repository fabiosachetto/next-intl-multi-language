import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["pt", "en", "es"],

	// Used when no locale matches
	defaultLocale: "pt",
  pathnames: {
    "Escunas": {
      "pt": "/Escunas",
      "en": "/Schooners",
      "es": "/Goletas"
    },
    "Jeeps": {
      "pt": "/Jeeps",
      "en": "/Jeeps",
      "es": "/Jeeps"
    },
    "Privativos": {
      "pt": "/Privativos",
      "en": "/Private",
      "es": "/Privados"
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing)["locales"][number];
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
