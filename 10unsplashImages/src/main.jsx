import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
);

// kak da instalirame react query dev tools - npm i @tanstack/react-query-devtools, sled tova npm run dev
// i vizhdame prozorec (tozi dolu vlqvo) where i can find bunch of useful info about my queries.
// za da go zatvorim - prosto cykame na cveteto ili promenqme initialIsOpen na false
