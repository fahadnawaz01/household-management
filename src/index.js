import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.style = "background: #c6aeae;";
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
