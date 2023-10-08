import React from "react"
import { useUserAnswers } from "@/context/GameContext"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageProps } from "@/types/IPages"

const Outcome: React.FC<PageProps> = ({ onClick }) => {
	const { userAnswers, updateUserAnswers } = useUserAnswers()
	const handlePlayAgain = () => {
		updateUserAnswers("", "")
		onClick()
	}

	return (
		<div className="flex flex-col items-center gap-8">
			<Card className="p-8">
				<ul>
					{Object.entries(userAnswers).map(([questionId, outcome]) => (
						<li key={questionId} className="text-center m-auto italic">
							{outcome}
						</li>
					))}
				</ul>
			</Card>
			<Button onClick={handlePlayAgain}>Play again</Button>
		</div>
	)
}

export default Outcome
