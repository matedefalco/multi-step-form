import { motion } from "framer-motion"

const LandingPage = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-[70%]">
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
				className="relative"
			>
				<img src="roadmap.png" alt="Imagen" className="w-full h-full" />
				<div className="flex flex-col items-center gap-2 p-4 absolute inset-0 w-4/6 h-2/4 text-center m-auto">
					<h1 className="text-2xl font-black font-serif">
						The Journey of the Lost Treasure
					</h1>
					<p className="text-center text-sm m-auto italic font-serif">
						You have found an ancient map that leads you in search of a lost
						treasure. To reach the treasure, you must solve a series of riddles
						related to the trip.
					</p>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
				className="flex flex-col items-center"
			>
				<img src="cofreTesoro.png" alt="Chess" className="w-2/4 h-2/4" />
			</motion.div>
		</div>
	)
}

export default LandingPage
