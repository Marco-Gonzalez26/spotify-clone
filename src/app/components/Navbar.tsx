import Link from 'next/link'
import { Home } from './icons/Home'
import { Planet } from './icons/Planet'
const Navbar = () => {
  return (
    <nav className='flex flex-col max-w-sm gap-2 min-h-screen flex-shrink-0 flex-1'>
      <ul className='bg-base-highlight rounded'>
        <li className='px-3 py-2 font-bold opacity-75 hover:opacity-100 transition-opacity'>
          <Link
            href='/'
            className='w-full flex-grow flex justify-start items-center'>
            <Home />
            <span className='ml-3'>Home</span>
          </Link>
        </li>
        <li className='px-3 py-2 font-bold opacity-75 hover:opacity-100 transition-opacity'>
          <Link
            href='/search'
            className='w-full flex-grow flex justify-start items-center'>
            <Planet />

            <span className='ml-3'>Search</span>
          </Link>
        </li>
      </ul>
      <ul className='bg-base-highlight rounded'>
        <li className='px-3 py-2 font-bold opacity-75 hover:opacity-100 transition-opacity'>
          Lists that the user add
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
