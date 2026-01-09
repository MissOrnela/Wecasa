import { PrestationsPage } from "@/pages/PrestationsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { AddressPage } from "@/pages/AddressPage";
import { AppointmentPage } from "@/pages/AppointmentPage";
import { ConfirmationPage } from "@/pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.prestations} element={<PrestationsPage />} />
        <Route path={ROUTES.address} element={<AddressPage />} />
        <Route path={ROUTES.appointment} element={<AppointmentPage />} />
        <Route path={ROUTES.confirmation} element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
