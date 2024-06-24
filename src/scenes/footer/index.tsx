import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
        <img alt="logo" src={Logo}/>
            <p className="my-5">
            EVOGYM is a state-of-the-art fitness center that offers a wide range of fitness classes and top-notch gym equipment. Our experienced trainers are dedicated to helping you achieve your fitness goals and provide personalized workout plans. Whether you're a beginner or an advanced athlete, EVOGYM has something for everyone. Join us today and start your fitness journey! 
            </p>
            <p>
            © 2021 EVOGYM. All rights reserved.
            </p>
        </div>
        
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">
            1234 Fitness Center, New York, NY
        </p>
        <p className="my-5">
            Phone: 123-456-7890
        </p>
        

        </div>

        </div>


    </footer>
  )
}

export default Footer