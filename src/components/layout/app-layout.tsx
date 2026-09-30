import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-muted/40">
      <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-6 shadow-sm">
        <h1 className="text-lg font-semibold">Gutendex</h1>

        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>
      <main className="min-h-0 flex-1 overflow-hidden p-6">{children}</main>
    </div>
  );
}
