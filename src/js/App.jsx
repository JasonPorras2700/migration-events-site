import { createRoot } from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { Header } from "./components/Header.jsx";

// eslint-disable-next-line no-unused-vars
const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);