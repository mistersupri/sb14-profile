import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import routers from "./router";
import { ConfigProvider } from "antd";
import { themes } from "./config/theme.config";

const router = createBrowserRouter(routers);

function App() {
  return (
    <ConfigProvider theme={themes}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
