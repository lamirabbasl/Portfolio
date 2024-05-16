import "./index.css";
import Sidebar from "./sections/Sidebar";
import Menu from "./sections/Menu";
import Main from "./sections/Main";

function App() {
  return (
    <div className=" bg-black ">
      <Sidebar />
      <Main />
      <Menu />
    </div>
  );
}

export default App;
