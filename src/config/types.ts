export interface IConfig {
  api: TApiDefault;
  defaultPartner: number;
  activeLanguage: listOfActiveLanguage;
  secret: string | undefined;
  ivKey: string | undefined;
}
type TApiDefault = {
  default: string | undefined;
};

export type listOfActiveLanguage = "PL" | "EN";
