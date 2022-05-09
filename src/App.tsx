import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Discover from "./pages/Discover";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="discover" element={<Discover />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
