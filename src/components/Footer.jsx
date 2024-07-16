import { contactLinks, kryptoLinks, marketLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="w-screen h-full justify-around items-start text-white grid grid-cols-5 p-10 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5 bg-[#01032E]">

      <div className="flex flex-col items-start outfit gap-5">
        <a href="/" className="uppercase font-bold  ">krypto</a>
       <a href="https://aungkaungmyint.com" target='_blank' rel="noopener noreferrer"> Code by <span className="underline font-bold ">akm</span></a>
      </div>

      <div className="flex flex-col gap-5">
        <a href="/" className="uppercase outfit font-semibold">krypto</a>
        <ul className="flex flex-col justify-center items-start text-white">
        {kryptoLinks.map((item)=>(
          <li key={item.id} className="uppercase outfit">
          <a href="/">{item.title}</a>
          </li>
        ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <a href="/" className="uppercase outfit font-semibold">Market</a>
        <ul className="flex flex-col justify-center items-start text-white">
        {marketLinks.map((item)=>(
          <li key={item.id} className="uppercase outfit">
          <a href="/">{item.title}</a>
          </li>
        ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <a href="/" className="uppercase outfit font-semibold">Contact</a>
        <ul className="flex flex-col justify-center items-start text-white">
        {contactLinks.map((item)=>(
          <li key={item.id} className="uppercase outfit">
          <a href="/">{item.title}</a>
          </li>
        ))}
        </ul>
      </div>


      <div className="flex flex-col gap-5 ">
        <h2 className="font-bold outfit text-xl">Join our newsletter</h2>
       <div className="flex">
        <input type="email" className="text-white rounded-full bg-[#29245E] opacity-50 p-4 " placeholder="Email Address"/>
        <button type="submit" className="rounded-full bg-[#29245E] text-white p-4 -ml-20 z-10">Submit</button>
       </div>
      </div>

    </footer>
  )
}

export default Footer