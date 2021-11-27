import { Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";
import routes from "./Routes";
const App = function () {
  const routesContent = routes.map((el) => <Route {...el} />);
  return (
    <div className="flex flex-col h-auto">
      <Header />
      <Routes>{routesContent}</Routes>
      <Footer />
    </div>
  );
};

export default App;
