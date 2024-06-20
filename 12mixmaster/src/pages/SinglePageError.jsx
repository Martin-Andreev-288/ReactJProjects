import { useRouteError } from "react-router-dom";
// simulirane na greshka i syzdavane na specialen komponent za greshka
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>{error.message}</h2>;
};
export default SinglePageError;
