import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";
/* Predi we weren't able to see the latest results
t.e. (dyrveno obqsnenie, no vse pak) tr da se smeni i queryKey-a (koyto v nachaloto
na tova video e queryKey: ["images"]. ReactQuery keshira rezultatite i se poluchava
problem.  KAK GO POPRAVQME - ami v sluchaq prosto dobavqme searchTerm sled "images").
INTERESNO NESHTO I NESHTO POLEZNO ZA REACT QUERY - ako veche sme tyrsili s nqkakva
tema i po-kysno potyrsim pak s neq, v sledvashtite pyti shte zarezhda momentalno,
bez zabavqne, kakto e samo v pyrviq pyt */
const url =
  "https://api.unsplash.com/search/photos?client_id=pyFtgHOiITJlJrUaat0dNT00TKcEasWWcAzG4n-ULNw";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (!results.length) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};
export default Gallery;
