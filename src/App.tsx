import { Link, Route, Routes } from "react-router";
import { AppLayout } from "./components/layout/app-layout";
import BooksPage from "./pages/books-page";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<BooksPage />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">Page not found</h2>
              <Link className="underline" to="/">Back to books</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
