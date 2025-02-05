import { Link } from '@/i18n/routing';
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("Escuna.title")}</h2>
      <Link href="/about">{t("description")}</Link>
    </div>
  );
}