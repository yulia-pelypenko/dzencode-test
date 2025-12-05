import { Layout } from "@/modules/common/components/Layout";
import { loadPages } from "@/utils/loadPages";
import { Route, Routes } from "react-router-dom";

const pages = loadPages();

export const RoutesRender = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {pages.map(({ route, component: Component }) => {
        return <Route key={route} path={route} element={<Component />} />;
      })}
    </Route>
  </Routes>
);
