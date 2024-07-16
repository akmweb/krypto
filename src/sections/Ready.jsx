import Footer from "../components/Footer"


const Ready = () => {
  return (
   <section className="w-screen h-full flex flex-col justify-center items-center p-5">
     <div className='w-full h-full flex justify-center items-center p-10'>
        <div className='w-full h-96 bg-gradient-to-r from-[#66819D] to-[#27235C] 
        rounded-xl flex flex-col justify-center items-center gap-5 p-5'>
            <p className='uppercase outfit text-white'>are you ready?</p>
            <h1 className='uppercase outfit text-5xl text-white font-bold max-lg:text-3xl'>be a <span className='text-black'>part</span> of the next big thing</h1>
            <button className="bg-black border border-white rounded-full p-3 flex items-center w-auto justify-center h-auto hover:bg-transparent duration-300">
                <a href="/" className="text-white outfit uppercase font-medium text-sm">Get started</a>
            </button>
        </div>
      </div>
      <Footer/>
   </section>
  )
}

export default Ready