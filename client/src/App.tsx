import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesRender } from "@/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesRender />
      </BrowserRouter>
    </>
  );
}

export default App;
