import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import netflixLogo from "./assets/media/netflix_logo.png";
import MyNav from "./components/nav";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import Account from "./components/Account";

function App() {
  return (
    <>
      <MyHeader/>
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
