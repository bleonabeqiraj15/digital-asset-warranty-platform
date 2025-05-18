import Dashboard from "@/ui/pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-background">
        <Dashboard />
      </main>
    </QueryClientProvider>
  );
}

export default App;
