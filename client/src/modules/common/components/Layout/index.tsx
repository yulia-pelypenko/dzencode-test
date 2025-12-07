import { Outlet } from "react-router-dom";
import { NavigationMenu } from "@/modules/common/components/NavigationMenu";
import { TopMenu } from "@/modules/common/components/TopMenu";

export const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <TopMenu />

      <div className="d-flex flex-grow-1 ">
        <NavigationMenu />

        <main className="flex-grow-1 overflow-auto px-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

