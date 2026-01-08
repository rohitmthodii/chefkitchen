import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MenuLayout from "./Layouts/MenuLayout";
import MenuCard from "./Components/MenuCard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuLayout />}>
        <Route index element={<MenuCard />} />
        <Route path="menucard" element={<MenuCard />} />
      </Route>
    </Routes>
  );
}

export default App;
