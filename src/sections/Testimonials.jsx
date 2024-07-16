import { cards } from "../constants"

const Testimonials = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center text-white gap-3">
        <p className="uppercase outfit">testimonials</p>
        <h1 className="uppercase outfit text-3xl font-bold">read what others <span className="flex justify-center">have to say</span></h1>
      </div>
      <ul className="flex justify-around items-center w-full gap-10 p-10 max-lg:flex-col">
        {cards.map((item)=>(
          <li key={item.id} className="w-full h-full flex flex-col justify-center items-center bg-[#121141] text-white
          rounded-lg p-5 gap-5">
            <img src={item.href} alt={item.alt} />
            <h2 className="uppercase outfit text-xl font-semibold">{item.name}</h2>
            <p className="outfit w-full">{item.paragraph}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Testimonials