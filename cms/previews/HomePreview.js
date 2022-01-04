const HomePreview = (props) => {
  const entry = props.entry;
  const title = entry.getIn(["data", "pageTitle"]);
  const body = entry.getIn(["data", "pageBody"]);
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(body)}></div>
    </div>
  );
};

function createMarkup(html) {
  return { __html: html };
}

export default HomePreview;
