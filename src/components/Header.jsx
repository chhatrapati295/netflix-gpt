import logo from '../assets/netflix-logo.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center text-white absolute w-full p-2 bg-gradient-to-t bg-transparent z-10 '>
      <img className='h-16' src={logo} alt="" />
      <div className="flex gap-4 mx-4">
        <button className='px-3 py-1 rounded font-medium hover:bg-[#e50914d4] bg-[#D9232E] transition-all outline-none '>Sign In</button>
      </div>
    </div>
  )
}

export default Header
