enum SOCardTheme {
  Default = "default",
  Clean = "clean",
  Dark = "dark",
  Hotdog = "hotdog",
  Combined = "combined"
}

interface PropTypes extends React.ImgHTMLAttributes<HTMLImageElement> {
  user_id: string;
  width?: number;
  height?: number;
  theme?: SOCardTheme;
}

const StackOverflowCard = ({ user_id, width = 208, height = 58, theme = SOCardTheme.Default, ...restProps }: PropTypes) => {
  return (
    <a href={`https://stackoverflow.com/users/${user_id}`} target="_blank">
      <img
        src={`https://stackoverflow.com/users/flair/${user_id}.png?theme=${theme}`}
        width={width}
        height={height}
        alt="My profile at Stack Overflow, a site for professional and enthusiast programmers"
        title="My profile at Stack Overflow, a site for professional and enthusiast programmers"
        {...restProps}
      />
    </a>
  );
}

export { StackOverflowCard, SOCardTheme };