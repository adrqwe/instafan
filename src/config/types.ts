export interface IConfig {
  api: TApiDefault;
  defaultPartner: number;
  activeLanguage: "PL" | "EN";
}
type TApiDefault = {
  default: string | undefined;
};
