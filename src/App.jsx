import "./App.css";
import Header from "./components/Layout/Header/Header";
import ActionBar from "./components/Registration/ActionBar/ActionBar";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="registration-section">
        <Registration />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;
