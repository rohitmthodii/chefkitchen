import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MenuLayout from "./Layouts/MenuLayout";
import MenuCard from "./Components/MenuCard";
import { AppProvider } from "./Contexts/CartContext";


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuLayout />}>
          <Route index element={<MenuCard />} />
          <Route path="menucard" element={<MenuCard />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
