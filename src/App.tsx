import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Routes from "./Routes";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Root>
          <Routes />
        </Root>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
