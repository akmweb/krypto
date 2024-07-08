import MenuBar from '../assets/menu_bar.png'
import Bg from '../assets/Bg-gradient1.png'

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full h-full">
      <div className='outfit text-white flex justify-between items-center'>
        <a href="/" className="uppercase font-bold">krypto</a>
        <div className="flex items-center gap-20 max-md:hidden">
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
      <img src={Bg} alt="background" className='-mt-28 -ml-10'/>
    </nav>
  )
}

export default Navbar