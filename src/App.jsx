import Analytics from "./sections/Analytics"
import Hero from "./sections/Hero"
import Featured from './sections/Featured'
import Get from "./sections/Get"
import Testimonials from "./sections/Testimonials"



const App = () => {
  return (
   <main className='w-full h-full flex flex-col justify-center items-center bg-[#01032E] p-10'>
     <Hero/>
     <Featured/>
     <Analytics/>
     <Get/>
     <Testimonials/>
   </main>
  )
}

export default App