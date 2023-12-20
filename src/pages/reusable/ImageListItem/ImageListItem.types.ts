export interface IImageListItem {
  image: string;
  countOfComment: number;
  countOfLikes: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
