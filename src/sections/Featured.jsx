import { imagelinks } from "../constants"

const Featured = () => {
  return (
    <main className="w-full h-full flex flex-col gap-5">
      <h1 className="outfit text-xl text-white">Featured</h1>
      <ul className="rounded-md w-full h-20 bg-[#342D67] opacity-[33%] flex justify-around items-center gap-5 p-5">
         {imagelinks.map((item)=>(
            <li key={item.id} >
                <img src={item.href} alt={item.alt} />
            </li>
           ))}
       
      </ul>
    </main>
  )
}

export default Featured