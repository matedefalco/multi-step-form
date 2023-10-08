import { ReactNode } from "react"

export interface GameContextType {
	userAnswers: Record<string, string>
	updateUserAnswers: (questionId: string, outcome: string) => void
	currentOutcome: string | null
}

export interface UserAnswersProviderProps {
	children: ReactNode
}
