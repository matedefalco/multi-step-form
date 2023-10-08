import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageProps } from "@/types/IPages"
import { useUserAnswers } from "@/context/GameContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Riddle: React.FC<PageProps> = ({
	onClick,
	riddle,
	options,
	outcomes,
}) => {
	const { updateUserAnswers } = useUserAnswers()

	const [optionSelected, setOptionSelected] = useState<{
		selectedIndex: number | null
		outcome: string | null
	}>({
		selectedIndex: null,
		outcome: null,
	})

	const [questionId, setQuestionId] = useState<string>("")

	const handleOptionSelect = (selectedQuestionId: string, index: number) => {
		const selectedOption = options && options[index]
		if (selectedOption) {
			setOptionSelected({
				selectedIndex: index,
				outcome: selectedOption.outcome,
			})
		}
		setQuestionId(selectedQuestionId)
	}

	const handleSubmit = () => {
		if (optionSelected.selectedIndex !== null && questionId && outcomes) {
			const selectedOutcomeId = optionSelected.outcome
			const selectedOutcome = outcomes.find(
				(outcome) => outcome.id === selectedOutcomeId
			)
			if (selectedOutcome) {
				updateUserAnswers(questionId, selectedOutcome.result)
				onClick()
			}
		}
	}

	return (
		<AnimatePresence initial={true}>
			<motion.div
				initial={{ y: 300, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -300, opacity: 0 }}
				transition={{ type: "spring", duration: 1 }}
				className="flex flex-col items-center justify-center gap-8"
			>
				<div className="flex flex-col items-center gap-2 p-4 text-center m-auto">
					<h1 className="text-xl font-black font-serif">Riddle</h1>
					<p className="text-center text-sm m-auto italic font-serif">
						{riddle}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{options &&
						options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleOptionSelect(option.title, index)}
							>
								<Card
									className={`hover:scale-110 active:border-2 ${
										optionSelected.selectedIndex === index && "border-green-600"
									}`}
								>
									<CardHeader className="flex items-center">
										<CardTitle>{option.title}</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-col items-center w-10 h-10">
										<img
											src={option.image}
											alt={option.title}
											className="w-full h-auto"
										/>
									</CardContent>
								</Card>
							</button>
						))}
				</div>
				<Button
					className={`bg-amber-800 ${
						optionSelected.selectedIndex === null && "opacity-50"
					}`}
					onClick={() => {
						handleSubmit()
						onClick
					}}
				>
					Next puzzle
				</Button>
			</motion.div>
		</AnimatePresence>
	)
}

export default Riddle
