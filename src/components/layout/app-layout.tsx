import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-muted/40">
      <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-6 shadow-sm">
        <h1 className="text-lg font-semibold"><Link to="/">Gutendex</Link></h1>
        <div className="flex w-lg items-center gap-2">
        <Input className="w-full" placeholder="Search..." />
        <Button>Search</Button>

        </div>
        <Dropdown />
      </header>
      <main className="min-h-0 flex-1 overflow-hidden p-6"><Outlet /></main>
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
] as const;

function Dropdown() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger render={<Menu />}/>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Category</DropdownMenuLabel>
          {categories.map((category) => (
            <DropdownMenuItem key={category} onSelect={() => {}}>{category}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
