import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>Oops! Something went wrong!</div>
      <div>
        {err.status}:{err.statusText}
      </div>
    </>
  );
};
export default Error;
