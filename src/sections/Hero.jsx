import Navbar from '../components/Navbar'
import HeroImg from '../assets/HeroImage.svg'
import Button from '../components/Button'
import bgImg from '../assets/Bg-gradient2.png'
import Featured from '../sections/Featured.jsx'

const Hero = () => {
  return (
    <main className='h-screen w-screen p-10 flex flex-col justify-between gap-7'>
      <Navbar/>
      <section className='flex justify-center items-center w-full h-full max-lg:flex-col max-md:gap-4'>
        <div className='flex flex-col items-start text-white w-full gap-7 max-md:w-full'>
         
          <h1 className='uppercase outfit text-7xl font-bold w-[85%] max-md:text-4xl max-md:w-[85%]'>discover and collect rare NFTs</h1>
          <p className='outfit text-xl w-[65%] max-md:w-[80%] max-md:text-lg'>The most secure marketplace for buying and selling unique crypto assets.</p>
          <div className='flex  items-center gap-5'>
            <Button title="Buy nfts"/>
            <Button title="sell nfts"/>
          </div>

        </div>
        <div className='flex justify-center items-center w-full'>
          <img src={HeroImg} alt="hero-img" className='w-[80%] max-md:w-[70%] '/>
          <img src={bgImg} alt="bgImage" className='absolute inset-0  h-full object-cover pointer-events-none w-full'/>
        </div>
        
      </section>
      <Featured />
    </main>
  )
}

export default Hero