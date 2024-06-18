import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=pyFtgHOiITJlJrUaat0dNT00TKcEasWWcAzG4n-ULNw&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  console.log(response);
  return <h2>Gallery</h2>;
};
export default Gallery;
