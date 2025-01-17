import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  const about = ()=>{
    window.scrollBy(0, 120 * window.innerHeight /100)  
  }
  const projects = ()=>{
    window.scrollBy(0, 230 * window.innerHeight /100)   
  }
  const projectsMobile = ()=>{
    window.scrollBy(0, 360 * window.innerHeight /100)  
  }
  const contact = ()=>{
    window.scrollBy(0, 360 * window.innerHeight /100)
  }
  const contactMobile = ()=>{
    window.scrollBy(0, 450 * window.innerHeight /100)
  }
  const htb = ()=>{
    window.open('https://writeups.zer0cheros.fi')
  }
  const [visible, setVisible] = useState(false)
  const toggleNavbar = () =>{
    setVisible(true)
    if(visible){
      setVisible(false)
    }
  }
  return (
    <nav className='absolute z-[100] w-full align-center h-24 bg-transparent '>
        <div className='flex h-full justify-between align-center shadow-sm md:px-32 px-12'>
        <Image className='animate-texts mb-2 mt-2 rounded-full shadow-2xl' src={"/logo.webp"} alt="zer0cheros.fi logo" width={80} height={80} />
        <button onClick={toggleNavbar} className=" md:hidden text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  {visible ? <div className="absolute z-20 animate-navbar right-0 top-24 rounded w-64 h-96 bg-white shadow-xl">
  <ul className='cursor-pointer h-full gap-8 pt-10' >
            <Link href={'#about'} scroll={false} ><li onClick={about} className='text-gray-500 hover:text-green-700 text-4xl my-3'>About</li></Link>
            <Link href={'#contact'} scroll={false}><li onClick={contactMobile} className='text-gray-500 hover:text-green-700 text-4xl my-3'>Contact</li></Link>
            <Link href={'#projects'} scroll={false}><li onClick={projectsMobile} className='text-gray-500 hover:text-green-700 text-4xl my-3'>Projects</li></Link>
            <Link href={'https://writeups.zer0cheros.fi'} scroll={false}><li  className='text-green-700 hover:text-gray-500 text-4xl my-3'>HTB</li></Link>
        </ul>
  </div>:null}
  
  </button>
        <ul className='cursor-pointer hidden md:flex animate-texts h-full items-center gap-8 p-2'>
            <li onClick={about} style={{textShadow:'2px 1px 4px black'}} className='text-gray-100 hover:text-green-600 text-2xl'><Link href={'#about'} scroll={false}>About</Link></li>
            <li onClick={contact} style={{textShadow:'2px 1px 4px black'}} className='text-gray-100 hover:text-green-600 text-2xl'><Link href={'#contact'} scroll={false}>Contact</Link></li>
            <li onClick={projects} style={{textShadow:'2px 1px 4px black'}} className='text-gray-100 hover:text-green-600 text-2xl'><Link href={'#projects'} scroll={false}>Projects</Link></li>
            <li onClick={htb} style={{textShadow:'2px 1px 4px black'}} className='text-green-600 hover:text-gray-100 text-2xl'><Link href={'#projects'} scroll={false}>HTB</Link></li>
        </ul>
        </div>
    </nav>
  )
}

export default Header