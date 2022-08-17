import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

import AOS from "aos";
import Routers from "./router";
import { ToastContainer } from "react-toastify";
import SessionTimeout from "./utils/SessionTimeout";

AOS.init();

function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
      <SessionTimeout />
    </>
  );
}

export default App;
