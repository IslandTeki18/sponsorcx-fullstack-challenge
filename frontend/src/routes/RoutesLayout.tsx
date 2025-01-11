import { Outlet } from "react-router-dom";
export const RoutesLayout = () => {
  return (
    <main className="bg-gray-100">
      <Outlet />
    </main>
  );
};
