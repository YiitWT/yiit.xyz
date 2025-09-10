
import { useTranslation } from "../i18n/TranslationProvider";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full py-8 flex items-center justify-center text-secondary mt-24 border-t-secondary border-t-2">
      <div className="text-center">
        <p className="text-lg">
          {t("footer_made_with")}
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} {t("footer_rights")}
        </p>
      </div>
    </div>
  );
}

export default Footer