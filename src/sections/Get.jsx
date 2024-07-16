import GetImage from '../assets/GetImage.svg'
import Button from '../components/Button'

const Get = () => {
  return (
    <div>
      <section className='flex justify-center items-center w-full h-full max-lg:flex-col max-md:gap-4'>
        <div className='flex flex-col items-start text-white w-full gap-7 max-md:w-full'>
          <p className='uppercase '>Get Our App</p>
          <h1 className='uppercase outfit text-5xl font-bold w-full max-md:text-4xl max-md:w-[85%]'>browse nfts from your smartphone</h1>
          <p className='outfit text-xl w-[85%] max-md:w-[80%] max-md:text-lg'>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</p>
          <Button title="Download on ios"/>

        </div>

        <div className='flex justify-center items-center w-full'>
          <img src={GetImage} alt="hero-img" className='w-[80%] max-md:w-[70%] '/>
        </div>
        
      </section>
    </div>
  )
}

export default Get