import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      
      <div>
        <h2>{t("Escunas.title")}</h2>
        <Link href="/escunas" className="text-red-600 hover:bg-slate-400">{t("Escunas.title_link")}</Link>
      </div>

      <div>
        <h2>{t("Jeep.title")}</h2>
        <Link href="/jeep" className="text-red-600 hover:bg-slate-400">{t("Jeep.title_link")}</Link>
      </div>

      <div>
        <h2>{t("Privativos.title")}</h2>
        <h3>{t("Privativos.subtitle")}</h3>
        <Link href="/privativos" className="text-red-600 hover:bg-slate-400">{t("Privativos.title_link")}</Link>
      </div>
    </div>
  );
}

