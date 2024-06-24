import { useRouteError, Link } from "react-router-dom";
/* pravim taka, che ako greshkata e 404, da se poqvi specialna stranica. I da ima
buton, koyto ako cyknem - da ni zavede v home stranicata.
Ako e drug tip greshka - shte se poqvi prosto "there was an error..."*/
const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-light sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldnt find the page youre looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h1 className="text-center font-bold text-4xl">there was an error...</h1>
    </main>
  );
};
export default Error;
