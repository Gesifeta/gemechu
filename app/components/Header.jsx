'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import '@/app/styles/header.css'
import { icons } from '@/public'

const Header = () => {
  return (
    <header>
        <div className='logo'><span className='email'>adamgemechu@gmail.com</span><span className="cv"><Link href='cv.pdf' download>CV</Link> </span></div>
        <nav className='header-nav'>
            <ul>
                {[{name:'linkedin',link:'https://www.linkedin.com/in/gemechugesifeta/',icon:icons.linkedin},{name:'github',link:'https://github.com/Gesifeta',icon:icons.github},{name:'credly',link:'https://www.credly.com/users/gemechu-adam',icon:icons.credily}].map((nav,index)=>(
                    <li key={`${nav.name}-${index}`}>
                     <Link href={nav.link}><Image src={nav.icon} alt ={nav} width={30}/> {nav.name}</Link>   </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header