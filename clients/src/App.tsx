import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import routers from "./router";
import { ConfigProvider } from "antd";
import { themes } from "./config/theme.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(routers);

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={themes}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
