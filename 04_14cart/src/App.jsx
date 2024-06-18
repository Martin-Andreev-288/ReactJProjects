// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
// nachalo na proekta. NE GO ZAPOCHVAME OT 0, zashtoto shte se koncentrirame v/u useReducer
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
