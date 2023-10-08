export interface PageProps {
	onClick: () => void
	key?: number
	riddle?: string
	options?: {
		title: string
		image: string
		isCorrect: boolean
	}[]
}
