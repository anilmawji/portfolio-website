interface PropTypes extends React.ImgHTMLAttributes<HTMLImageElement> {
  username: string;
}

const TryHackMeCard = ({ username, ...restProps }: PropTypes) => {
  return (
    <a href={`https://tryhackme.com/p/${username}`} target="_blank">
      <img src={`https://tryhackme-badges.s3.amazonaws.com/${username}.png`} alt="TryHackMe" {...restProps} />
    </a>
  );
}

export default TryHackMeCard;