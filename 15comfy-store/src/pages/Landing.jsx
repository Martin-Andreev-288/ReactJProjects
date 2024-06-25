import { Hero } from "../components";
/* Landing loader i podrobno razqsnenie zashto e po-dobre da izvlichame
dannite po tozi nachin - s const products = response.data.data i return { products } */
import { customFetch } from "../utils";
const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
