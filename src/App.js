import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import Transaction from "./components/Transaction";
import { GlobalProvider } from "./context/GlobalState";
import background from "./image/background.jpg";

const image = {
  width: "100%",
  height: "400px",
  backgroundImage: `url${background}`,
};

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
