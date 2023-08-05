import { EN_translations } from "../../../models/translationsContext/mapTranslations/EN_translations";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

export type TMonths = {
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
};

const useMonthTranslate = () => {
  const { translate } = useTranslationContext();
  const translations = translate("singUp");

  let englishMonths = EN_translations.translations.singUp.months.split(",");
  let translateMonths = translations.months.split(",");
  var result: any = {};
  englishMonths.forEach(
    (key, i) => (result[key.toLowerCase()] = translateMonths[i])
  );

  return result as TMonths;
};

export default useMonthTranslate;
