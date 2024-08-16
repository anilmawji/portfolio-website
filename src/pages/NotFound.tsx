import Page from "./Page";

const NotFound = () => {
  return (
    <Page>
      <p className="notFound">
        Error 404: No page exists at this path.
      </p>
    </Page>
  );
}

export default NotFound;