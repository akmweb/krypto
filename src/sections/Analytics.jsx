import AnalyticsImg from '../assets/analytics.svg'
import Button from '../components/Button'

const Analytics = () => {
  return (
    <section className='w-full h-screen flex justify-between items-center max-lg:flex-col max-md:gap-4 '>

       <div className='w-full h-full'>
        <img src={AnalyticsImg} alt="hero-img" className='w-full'/>
       </div>
       
       
      <div className='flex flex-col items-start text-white w-full gap-5 '>
        <p className='uppercase '>ANALYTICS</p>
        <h1 className='uppercase outfit text-5xl font-bold w-[85%] max-md:text-4xl max-md:w-[85%]'>built-in analytics to track your nfts</h1>
        <p className='outfit text-xl w-[65%] max-md:w-[80%] max-md:text-lg'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
        <Button title="view our pricing"/>
      </div>
     
    
  </section>
  )
}

export default Analytics