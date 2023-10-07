import { ReactNode } from "react"

export interface GameContextType {
	userAnswers: Record<string, boolean>
	updateUserAnswers: (questionId: string, answer: boolean) => void
}

export interface UserAnswersProviderProps {
	children: ReactNode
}
