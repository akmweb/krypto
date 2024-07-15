import Analytics from "./sections/Analytics"
import Hero from "./sections/Hero"
import Featured from './sections/Featured'



const App = () => {
  return (
   <main className='w-screen h-full overflow-x-hidden bg-[#01032E] p-10'>
     <Hero/>
     <Featured/>
     <Analytics/>
 
   </main>
  )
}

export default App