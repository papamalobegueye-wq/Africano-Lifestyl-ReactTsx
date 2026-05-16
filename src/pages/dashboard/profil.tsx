import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilPage() {
  return (
    <div className=' flex bg-yellow-600  items-center justify-center'>
        <Link to="/dash/profil">
            <button className='font-jost font-bold text-4xl text-center'>
                PROFIL PAGE
            </button>
        </Link>
    </div>
  )
}
