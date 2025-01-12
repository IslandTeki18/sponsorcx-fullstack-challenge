import { RoutesLayout } from "./RoutesLayout";
import { DealsPage, AccountsPage } from "../features";

export const mainRoutes = [
  {
    element: <RoutesLayout />,
    children: [
      {
        path: "/",
        element: <DealsPage />,
        index: true,
      },
      {
        path: "/accounts",
        element: <AccountsPage />,
      },
    ],
  },
];
