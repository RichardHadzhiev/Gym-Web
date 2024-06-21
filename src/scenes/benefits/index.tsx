import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'Our gym is equipped with the latest fitness equipment and technology to help you achieve your fitness goals.',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            'We offer a wide range of classes to suit all fitness levels and interests, including yoga, pilates, and more.',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainers',
        description:
            'Our team of expert trainers are here to help you achieve your fitness goals and provide personalized support.',
    },
]
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="md: my-5 md:w-3/5"
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We offer world-class fitness equipment, expert trainers,
                        and a variety of classes designed to help you achieve
                        your ultimate fitness goals with ease. Our commitment to
                        true care ensures that every member receives
                        personalized attention and support on their wellness
                        journey.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className="md:flex items-center justify-between gap-8 mt-5"
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Benefits
