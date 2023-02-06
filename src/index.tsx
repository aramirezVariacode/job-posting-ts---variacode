import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { JobPostingApp } from "./JobPostingApp";
import { store } from "./store";
import "./styles.css";
import { AppTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AppTheme>
          <JobPostingApp />
        </AppTheme>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// I
