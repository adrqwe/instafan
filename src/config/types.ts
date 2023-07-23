export interface IConfig {
  api: TApiDefault;
  defaultPartner: number;
  activeLanguage: listOfActiveLanguage;
}
type TApiDefault = {
  default: string | undefined;
};

export type listOfActiveLanguage = "PL" | "EN";
