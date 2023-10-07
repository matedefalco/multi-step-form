import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageProps } from "@/types/IPages"
import GameRiddles from "../../riddles.json"
import { useUserAnswers } from "@/context/GameContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FirstRiddle: React.FC<PageProps> = ({ onClick }) => {
	const { updateUserAnswers } = useUserAnswers()
	const riddles =
		(GameRiddles.gameRiddles[0] && GameRiddles.gameRiddles[0].firstRiddle) || []

	const [optionSelected, setOptionSelected] = useState<boolean | undefined>(
		undefined
	)
	const [questionId, setQuestionId] = useState<string>("")

	const handleOptionSelect = (
		selectedQuestionId: string,
		isCorrect: boolean
	) => {
		setOptionSelected(isCorrect)
		setQuestionId(selectedQuestionId)
	}

	const handleSubmit = () => {
		if (optionSelected !== undefined && questionId) {
			console.log("Respuesta seleccionada:", optionSelected)
			updateUserAnswers(questionId, optionSelected)
			onClick
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
					<h1 className="text-xl font-black font-serif">First riddle</h1>
					<p className="text-center text-sm m-auto italic font-serif">
						{GameRiddles.gameRiddles[0].riddle}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{riddles.map((option, index) => (
						<button
							key={index}
							onClick={() => handleOptionSelect(option.title, option.isCorrect)}
						>
							<Card className="hover:scale-110 active:border-2 active:border-green-600">
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
						optionSelected === undefined && "opacity-50"
					}`}
					onClick={handleSubmit}
				>
					Next puzzle
				</Button>
			</motion.div>
		</AnimatePresence>
	)
}

export default FirstRiddle
