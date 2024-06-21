import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";
/* loader ne e hook, i tr da prefakturirame koda, za da prilozhim i react query. Tuk, kakto
instruktoryt se izrazi, situaciqta stava malko "funky" i e trudno da se shvane. */
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};
//
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";
    /* here's what happens. We have this await query client again coming from app JSX.
    And with this method, essentially we check, do we have this data in the cache or no.
    If we do, then it's right away provided over here. If not, then we again fetch it in
    the loader and again, it's provided here in the use query. */
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
