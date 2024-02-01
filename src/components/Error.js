import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ooops</h1>
      <h2>An error has occured</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};
