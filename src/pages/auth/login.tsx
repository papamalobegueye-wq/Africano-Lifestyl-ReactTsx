import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className='bg-yellow-700 h-screen w-full text-white text-5xl flex items-center justify-center uppercase font-bold'>
        <Link to="/auth/register"> 
        <button className="bg-green-500 hover:bg-green-700 text-center text-white font-bold py-2 px-4 rounded">
          Register
        </button>
        </Link>

        <Link to="/dash/profil"> 
        <button className="bg-green-500 hover:bg-green-700 text-center text-white font-bold py-2 px-4 rounded">
          dashboard
        </button>
        </Link>
    </div>
  )
}
