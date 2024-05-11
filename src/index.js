import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import store from "./redux/store";
import "./styles/main.css";

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    },
    queries:{
      refetchOnWindowFocus : false,
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter basename="/monitoringDemo" >
          <App />
          <Toaster />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
