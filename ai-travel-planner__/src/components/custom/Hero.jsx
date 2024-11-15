import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'><span className='text-[#f56551]'>Want to travel within budget?</span><br></br>Try Ghoomo AI</h1>
      <p className='text-xl text-gray-600 text-center'>Try your personalized AI travel planner, Just enter your destiantion,budget and rest leave it on us!</p>
      <Link to={'/create-trip'}>
      <Button>Get started It&apos;s Free</Button>
      </Link>
      
    </div>
  )  
}

export default Hero