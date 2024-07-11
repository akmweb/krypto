import Navbar from '../components/Navbar'
import HeroImg from '../assets/HeroImage.png'

const Hero = () => {
  return (
    <main className='h-screen w-screen p-10 flex flex-col justify-between'>
      <Navbar/>
      <section className='flex justify-center items-center w-full h-full'>

        <div className='flex flex-col items-start text-white w-[50%] gap-5'>
          <h1 className='uppercase outfit text-6xl font-bold w-[75%]'>discover and collect rare NFTs</h1>
          <p className='outfit text-xl w-[65%]'>The most secure marketplace for buying and selling unique crypto assets.</p>
        </div>

        <div>
          <img src={HeroImg} alt="hero-img" width={500}/>
        </div>
        
      </section>
    </main>
  )
}

export default Hero