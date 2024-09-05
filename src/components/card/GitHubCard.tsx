async function fetchData(response: string) {
  const data = await fetch(`https://api.github.com/users/${response}`, {
      method: 'GET',
  });
  const responseult = await data.json();
  return responseult;
}

interface PropTypes {
  username: string;
}

const GitHubCard = ({ username }: PropTypes) => {
  return (
    <a href={"github.com/anilmawji"} target="_blank">
      <div>

      </div>
    </a>
  );
}

export { GitHubCard };