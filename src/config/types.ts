export interface IConfig {
  api: TApiDefault;
  defaultPartner: number;
  activeLanguage: listOfActiveLanguage;
  activeTheme: listOfActiveTheme;
  secret: string | undefined;
  ivKey: string | undefined;
}
type TApiDefault = {
  default: string | undefined;
};

export type listOfActiveLanguage = "PL" | "EN";
export type listOfActiveTheme = "lightTheme" | "darkTheme";
