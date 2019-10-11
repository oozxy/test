export interface IHeaderProps {
  localImageSrc: string;
  onLineImageSrc: string;
}
export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  const { localImageSrc, onLineImageSrc } = props;
  return (
    <div className="header-container">
      <img src={localImageSrc} />
      <img src={onLineImageSrc} />
    </div>
  )
}