import { SelectedPage,ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name:"Weight Training Classes",
        description: "Our classes are designed to be adaptable to all fitness levels.",
        image: image1
    },
    {
        name:"Yoga Classes",
        description: "Welcome to our Yoga classes, where you can find balance, harmony, and relaxation in a supportive and nurturing environment. Whether you are a beginner or an experienced yogi, our classes are designed to cater to all levels, ensuring a fulfilling and enriching experience for everyone.",
        image: image2
    },
    {
        name:"Ab Core Classes",
        description: "Discover the power of a strong core with our Ab Core Classes, designed to help you build and tone your abdominal muscles, improve your posture, and enhance your overall fitness. Suitable for all fitness levels, our classes offer a variety of exercises targeting the core muscles for a comprehensive workout.",
        image: image3
    },
    {
        name:"Adventure Classes",
        description: "Dive into the thrill of the great outdoors with our Adventure Classes! Perfect for adrenaline junkies and nature enthusiasts alike, our classes offer a wide range of activities designed to push your limits, enhance your skills, and immerse you in the beauty of nature. Whether you are a beginner looking for a new challenge or an experienced adventurer seeking your next thrill, we have something for everyone.",
        image: image4
    },
    {
        name:"Fitness Classes",
        description: "Discover a new level of health and wellness with our diverse range of Fitness Classes, tailored to meet the needs of every individual. Whether you're a beginner looking to get started on your fitness journey or an experienced athlete seeking to push your limits, our classes offer a supportive and motivating environment to help you achieve your goals.",
        image: image5
    },
    {
        name:"Training Classes",
        description: "Elevate your fitness and achieve your goals with our comprehensive Training Classes. Designed for all fitness levels, our classes offer specialized training to help you build strength, improve endurance, and enhance overall wellness. Our expert trainers provide personalized guidance to ensure you get the most out of every workout.",
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses"className='w-full bg-primary-100 py-40 '>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className='mx-auto w-5/6'
            initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{hidden: {opacity: 0, x: -100}, 
                    visible: {opacity: 1, x: 0},
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5 '>
                    Our classes are designed to be adaptable to all fitness levels.
                    </p>
                </div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name}-${index}}`}
                        name={item.name}
                        description={item.description}
                        image={item.image} />
                    ))}
                </ul>

            </div>

        </motion.div>

    </section>
  )
}

export default OurClasses