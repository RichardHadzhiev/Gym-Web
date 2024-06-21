import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/shared/ActionButton'

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

                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    <img
                    className='mx-auto'
                    alt='benefits-page-graphic'
                    src={BenefitsPageGraphic} />

                    <div>
                        <div className="relative ">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -100 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.3 ,duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                            <p className="my-5 ">
                                Discover the joy of fitness with our thriving
                                community. Our members are transforming their
                                lives, achieving their goals, and finding
                                happiness in every step of their fitness
                                journey. Be part of a movement that's making a
                                difference—one workout at a time. Join us today
                                and see why millions are choosing to get fit
                                with us!
                            </p>
                            <p className="mb-5">
                                Be part of a fitness revolution that’s changing
                                lives around the world. With millions of happy
                                members, we provide the tools, support, and
                                inspiration you need to get fit and stay fit.
                                From personalized workouts to a vibrant
                                community, everything you need is here. Join us
                                and find out why millions are smiling and
                                sweating with us!
                            </p>
                        </motion.div>
                        <div className="relative mt-16 ">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
