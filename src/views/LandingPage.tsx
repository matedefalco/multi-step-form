import { Button } from "@/components/ui/button"
import { PageProps } from "@/types/IPages"
import { motion, AnimatePresence } from "framer-motion"

const LandingPage: React.FC<PageProps> = ({ onClick }) => {
	return (
		<AnimatePresence initial={true}>
			<motion.div
				initial={{ y: 300, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -300, opacity: 0 }}
				transition={{ type: "spring", duration: 1 }}
				className="flex flex-col items-center justify-center gap-2 w-[70%]"
			>
				<div className="relative">
					<img src="roadmap.png" alt="Imagen" className="w-full h-full" />
					<div className="flex flex-col items-center gap-2 p-4 absolute inset-0 w-4/6 h-2/4 text-center m-auto">
						<h1 className="text-2xl font-black font-serif">
							The Journey of the Lost Treasure
						</h1>
						<p className="text-center text-sm m-auto italic font-serif">
							You have found an ancient map that leads you in search of a lost
							treasure. To reach the treasure, you must solve a series of
							riddles related to the trip.
						</p>
					</div>
				</div>
				<Button className="bg-amber-800" onClick={onClick}>
					Start Journey
				</Button>
				<div className="flex flex-col items-center">
					<img src="cofreTesoro.png" alt="Chess" className="w-2/4 h-2/4" />
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default LandingPage
