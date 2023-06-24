import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

const DecimalPoint = (number: number) => {
  const { translate } = useTranslationContext();
  const decimalPointTranslations = translate("decimalPoint");

  const numberToString = number.toString();
  let outputText = "";
  for (let i = 0; i < numberToString.length; i++) {
    if (numberToString[i] === ".") {
      outputText += decimalPointTranslations.point;
    } else {
      outputText += numberToString[i];
    }
  }
  return outputText;
};

export default DecimalPoint;
