import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import exp from 'constants';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pt", "en", "es"],
 
  // Used when no locale matches
  defaultLocale: "pt"
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing)["locales"][number];
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);