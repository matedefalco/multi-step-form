export interface PageProps {
	onClick: () => void
	key?: number
	riddle?: string
	options?: {
		title: string
		image: string
		outcome: string
	}[]
	outcomes?: {
		id: string
		result: string
	}[]
}
