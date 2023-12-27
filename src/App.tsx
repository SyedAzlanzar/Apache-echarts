import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import PageNotFound from "./components/PageNotFound";
import Layout from "./layout/layout";
import Chart from "./components/Chart";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Chart />
          </Layout>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
