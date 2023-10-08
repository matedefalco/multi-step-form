import { createContext, useContext, useState } from "react"
import { GameContextType, UserAnswersProviderProps } from "@/types/IContext"

const GameContext = createContext<GameContextType | undefined>(undefined)

export function useUserAnswers() {
	const context = useContext(GameContext)
	if (context === undefined) {
		throw new Error("useUserAnswers must be used within a UserAnswersProvider")
	}
	return context
}

export function UserAnswersProvider({ children }: UserAnswersProviderProps) {
	const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
	const [currentOutcome, setCurrentOutcome] = useState<string | null>(null)

	const updateUserAnswers = (questionId: string, outcome: string) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: outcome,
		}))
		setCurrentOutcome(outcome)
	}

	return (
		<GameContext.Provider
			value={{ userAnswers, updateUserAnswers, currentOutcome }}
		>
			{children}
		</GameContext.Provider>
	)
}
