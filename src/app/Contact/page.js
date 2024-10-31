import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <h1>Contact</h1>
     <button className='bg-blue-500'><Link href={"About"}>About</Link></button> <br/>           
    <button><Link href={"Contact/Person"}>Contact</Link></button> <br/>
    <button className='hover:bg-blue-600'><Link href={"Login"}>Login</Link></button> <br/>
    </>
  )
}

export default page