import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { AppLayout } from "./components/layout/app-layout.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <AppLayout>
        <App />
      </AppLayout>
    </ThemeProvider>
  </StrictMode>,
);
