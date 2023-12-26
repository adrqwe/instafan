export interface ISelectProps {
  selectedVisibleValue: string;
  ariaLabel: string;
  defaultValue: string | number | readonly string[] | undefined;
  selectKeys: string[];
  fullObject: any;
  localStorageName: string;
}
