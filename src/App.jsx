import { BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
