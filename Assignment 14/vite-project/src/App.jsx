import "./index.css";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header text="Simple React App" />
      <Content />
      <Footer text="“Website without visitors is like a ship lost in the horizon.”" />
    </div>
  );
}

export default App;