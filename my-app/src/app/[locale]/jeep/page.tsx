import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

// export default function PrivativosPage() {
export default async function JeepsPage() {
  const t = await getTranslations("JeepPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{t("link")}</Link>
    </div>
  );
}
