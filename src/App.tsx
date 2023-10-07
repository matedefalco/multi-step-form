import { useState } from "react"
import LandingPage from "./views/LandingPage"
import FirstRiddle from "./views/FirstRiddle"

const App = () => {
	const [activePage, setActivePage] = useState<number>(0)

	const handlePageChange = (page: number) => {
		setActivePage(page)
	}

	const pages = [
		<LandingPage key="landing" onClick={() => handlePageChange(1)} />,
		<FirstRiddle key="firstRiddle" onClick={() => handlePageChange(2)} />,
	]

	return (
		<main className="w-full h-full min-h-screen bg-island bg-cover flex flex-col items-center justify-center">
			{pages[activePage]}
		</main>
	)
}

export default App
