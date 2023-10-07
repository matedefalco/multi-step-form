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
	const [userAnswers, setUserAnswers] = useState<Record<string, boolean>>({})

	const updateUserAnswers = (questionId: string, answer: boolean) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: answer,
		}))
	}
	console.log("Suka ~ file: GameContext.tsx:24 ~ userAnswers:", userAnswers)

	return (
		<GameContext.Provider value={{ userAnswers, updateUserAnswers }}>
			{children}
		</GameContext.Provider>
	)
}
