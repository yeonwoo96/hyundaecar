import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./Globalstyle.tsx";
import { ThemeProvider } from "styled-components";
import { Theme } from "./myTheme.ts";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
