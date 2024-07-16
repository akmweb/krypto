import MenuBar from '../assets/menu_bar.png'
import Bg from '../assets/Bg-gradient1.png'

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className='outfit text-white flex justify-between items-center z-10'>
        <a href="/" className="uppercase font-bold outfit">krypto</a>
        <div className="flex items-center gap-16 max-md:hidden pointer">
          <a href="">about</a>
          <a href="">pricing</a>
          <a href="">contact</a>
          <a href="">buy nfts</a>
        </div>
        <div className='hidden max-md:block'>
          <a href="">
            <img src={MenuBar} alt="menu" />
          </a>
        </div>
      </div>
      <img src={Bg} alt="background" className="absolute inset-0 w-full h-full object-cover pointer-events-none"/>
    </nav>
  )
}

export default Navbar