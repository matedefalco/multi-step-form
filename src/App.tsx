import { useState } from "react"
import LandingPage from "./views/LandingPage"
import Riddle from "./views/Riddle"
import Outcome from "./views/Outcome"
import Riddles from "../riddles.json"

const App = () => {
	const [activePage, setActivePage] = useState<number>(0)

	const handlePageChange = (page: number) => {
		setActivePage(page)
	}

	const currentPageData = Riddles.gameRiddles[activePage - 1]

	let currentPage = null

	if (activePage === 0) {
		currentPage = <LandingPage onClick={() => handlePageChange(1)} />
	} else if (activePage >= 1 && activePage < 5 && currentPageData.options) {
		currentPage = (
			<Riddle
				riddle={currentPageData.riddle}
				options={currentPageData.options}
				onClick={() => handlePageChange(activePage + 1)}
			/>
		)
	} else {
		currentPage = <Outcome />
	}

	return (
		<main className="w-full h-full min-h-screen bg-island bg-cover flex flex-col items-center justify-center">
			{currentPage}
		</main>
	)
}

export default App
