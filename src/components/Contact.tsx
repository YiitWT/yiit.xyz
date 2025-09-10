

import { useTranslation } from "../i18n/TranslationProvider";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background py-12 w-full mt-12" id="contact">
      {/* Section Title */}
      <div className="text-4xl text-white flex xl:ml-96 md:ml-24 ml-4 items-center ">
        <h1 className="text-white">
          <span className="text-primary">#</span>{t("contact")}
        </h1>
        <div className="h-[1px] bg-primary md:w-1/2 w-32 ml-8"></div>
      </div>

      {/* Content */}
      <div className="md:flex">
        <div className="flex flex-col gap-6 md:ml-28 ml-4 xl:ml-96 mt-6 md:-12 md:w-1/3 ">
          <p className="text-xl text-secondary ">
            {t("contact_intro")}
          </p>
        </div>

        <div className=" mb-8 ml-4 mt-4 md:ml-28 py-2 px-6 md:border-2 border-secondary ">
          <h1 className="text-xl text-white">{t("contact_find_me")}</h1>
          <ul className="mt-2 flex-grow flex-1 list-disc md:list-none">
            <li className="text-lg font-bold">
              <a target="_blank" href="https://github.com/yiitwt" >
                <span className="text-primary"><i className="fa-brands fa-github pr-1 text-primary"></i></span> {t("contact_github")}
              </a>
            </li>
            <li className="text-lg font-bold ">
              <a target="_blank" href="#" >
                <span className="text-primary"><i className="fa-brands fa-discord text-primary"></i></span> {t("contact_discord")}
              </a>
            </li>
            <li className="text-lg font-bold">
              <a target="_blank" href="https://instagram.com/yiit_locked" >
                <span className="text-primary"><i className="fa-brands fa-instagram text-primary pr-1"></i></span> {t("contact_instagram")}
              </a>
            </li>
            <li className="text-lg font-bold">
              <a target="_blank" href="mailto:contact@yiit.xyz">
                <span className="text-primary"><i className="fa-solid fa-envelope pr-1 text-primary"></i></span> {t("contact_email")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact