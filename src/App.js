// UseQuery
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Components
import HomePage from "./components/Pages/HomePage";

// Router
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
