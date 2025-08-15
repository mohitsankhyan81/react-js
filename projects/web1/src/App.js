import Nav from "./navigation/Nav";
import Products from "./Pro/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import './index.css';

function App() {
  return (
    <>
    <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </>
  );
}

export default App;