import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="add" element={<AddMenu />} />
          <Route path="edit/:id" element={<EditMenu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
