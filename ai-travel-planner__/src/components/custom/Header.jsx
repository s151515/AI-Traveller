'use client'

import { useEffect, useState } from 'react'
import { Button } from "../ui/button"

const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo.svg' alt="Logo" />
      <div>
        {user ?
          <div>
             <Button variant="outline" className="rounded-full">My trips</Button>
          </div> 
          :
          <Button>Sign In</Button>
        }
      </div>
    </div>
  )
}

export default Header