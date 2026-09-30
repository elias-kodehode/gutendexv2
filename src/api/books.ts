import { api } from "@/lib/api";

export interface Book {
  id: number;
  title: string;
  authors: {
    name: string;
  }[];
}
interface GutendexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
export async function getBooks() {
  const response = await api.get<GutendexResponse>("/books");

  return response.data;
}
