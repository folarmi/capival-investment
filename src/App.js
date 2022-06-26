import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

import AOS from "aos";
import Routers from "./router";
import { ToastContainer } from "react-toastify";

AOS.init();

function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
}

export default App;
