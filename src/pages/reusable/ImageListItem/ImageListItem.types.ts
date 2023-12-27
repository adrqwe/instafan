export interface IImageListItem {
  image: string;
  countOfComment: number;
  countOfLikes: number;
  description: string;
  postId: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onLoad: () => void;
}
