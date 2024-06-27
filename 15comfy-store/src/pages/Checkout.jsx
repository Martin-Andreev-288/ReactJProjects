import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
// Zapochvame s checkout-a. Tuk zasega ne e sig dali tr da e cartTotal ili cartTotal.length
// ostava da rescrictnem access-a i da doopravim funkcionalnostta
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
