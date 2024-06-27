import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";
/* startirame s orders page. Ponezhe nqma kak vsichko da se zasneme, postarah se da sybera kakvoto e vazhno i kakto e ok
Ideqta e i da vidim kakvo logva */
const Orders = () => {
  return <h1 className="text-4xl">Orders</h1>;
};
export default Orders;

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }
    // this (the params) is strictly for the pages
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      /* and then remember, this is a restricted request. So we need to pass in both - we first need to pass in the params,
      our pages, and also we want to go with headers. */
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");

      return null;
    }
  };
