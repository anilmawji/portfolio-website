import Page from "./Page";

const NotFound = () => {
  return (
    <Page className="not_found_page">
      <p>
        Error 404: No page exists at this path.
      </p>
    </Page>
  );
}

export default NotFound;