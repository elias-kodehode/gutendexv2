import { Card } from "./components/ui/card";
import { useBooks } from "./hooks/use-books";

export default function App() {
  const { data, isLoading, error } = useBooks();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading books</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {data?.results.map((book) => (
        <Card className="p-2 max-w-lg" key={book.id}>
          <h2 className=" text-2xl">{book.title}</h2>

          <p className="text-gray-500 text-xs">
            {book.authors.map((author) => author.name).join(", ")}
          </p>
        </Card>
      ))}
    </div>
  );
}
