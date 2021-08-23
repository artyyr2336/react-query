import { QueryClient, QueryClientProvider } from "react-query"
import { QueryComponent } from "./components"

function App() {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<QueryComponent />
		</QueryClientProvider>
	)
}

export default App
