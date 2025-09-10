
import { useTranslation } from "../i18n/TranslationProvider";

const Quote = () => {
        const { t } = useTranslation();
        const quoteKeys = [
                "quote_power_electricity",
                "quote_predict_invent",
                "quote_life_react",
                "quote_limit_doubt",
                "quote_success_courage",
                "quote_love_work",
                "quote_miss_shots",
                "quote_future_dreams",
                "quote_slowly_stop",
                "quote_impossible_journey",
                "quote_believe_halfway",
                "quote_act_difference",
                "quote_success_busy",
                "quote_clock_keepgoing",
                "quote_reputation_do",
                "quote_future_today",
                "quote_revenge_success",
                "quote_time_limited",
                "quote_achieve_impossible",
                "quote_success_difference",
                "quote_success_dictionary",
                "quote_success_enthusiasm",
                "quote_started_doing",
                "quote_giveup_good",
                "quote_greatness_permission",
                "quote_success_who",
                "quote_happiness_success"
        ];
        const randomKey = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
        return (
                <div className="bg-background w-full pb-24">
                        <div className="flex-box w-fit flex-shrink items-center justify-center flex-col m-auto text-2xl">
                                <div className="border-2 border-secondary">
                                        <h1 className="px-4 py-2 text-white font-medium">
                                                {t(randomKey)}
                                        </h1>
                                </div>
                                <div className="border-2 border-secondary ml-auto w-fit px-4 py-2 text-white text-lg">
                                        {t("quote_author")}
                                </div>
                        </div>
                </div>
        );
}

export default Quote
