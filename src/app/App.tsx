import { PrestationsPage } from "@/pages/PrestationsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { AddressPage } from "@/pages/AddressPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.prestations} element={<PrestationsPage />} />
        <Route path={ROUTES.address} element={<AddressPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
