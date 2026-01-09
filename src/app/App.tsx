import { PrestationsPage } from "@/pages/PrestationsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.prestations} element={<PrestationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
