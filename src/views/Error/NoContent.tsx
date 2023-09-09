import ViewError from "./ErrorView.tsx";

const NoContent = () => {
  return (
    <ViewError title="404" text="Hmm, looks like this page doesn't exist." />
  );
};

export default NoContent;
