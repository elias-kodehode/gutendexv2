import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Menu } from "lucide-react";
interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-muted/40">
      <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-6 shadow-sm">
        <h1 className="text-lg font-semibold">Gutendex</h1>
        <Dropdown />
      </header>
      <main className="min-h-0 flex-1 overflow-hidden p-6">{children}</main>
    </div>
  );
}

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Menu />}></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Category</DropdownMenuLabel>
          {categories.map((category) => (
            <DropdownMenuItem>{category}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
