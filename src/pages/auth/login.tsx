import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { toast } from 'sonner'

export default function LoginPage() {

  // First Method

  // const [email, setEmail] = useState("")
  // console.log(email)

  // const [password, setPassword] = useState("")
  // console.log(password)

  // const onLogin = (e) => {
  //   e.preventDefault()
  //   localStorage.setItem("email", email)

  //   localStorage.setItem("password", password)

  // }

  // Second Method

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  })


  const navigation = useNavigate();

  const funcLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginData.password.length < 5) {
      toast.error("Mot de passe court")
    } else {
      localStorage.setItem("email", loginData.email)

      localStorage.setItem("password", loginData.password)
      toast.success('Connexion Réussi')
      navigation("/dash/profil")

    }
  }

  // Pour voir le mot de passe pendant le saisi
  const [viewPassword, setViewPassword] = useState(false)
  return (
    <div className=' w-full '>
      <div className="py-2">
        <h2 className="flex gap-2 font-josh font-bold tracking-wide text-2xl"
        >Welcome
          <FaHandPaper size={22} className=" text-yellow-500" />
        </h2>
        <p className="opacity-40 text-sm">Please login here</p>
      </div>
      <form onSubmit={onLogin} className="py-3">
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="email">
            Entrez votre adresse email
          </label>

          <input
            type="email"
            // for first method
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}

            onChange={funcLoginChange}
            name="email"
            className="border-1 rounded-xl px-2 py-2"
            id="email"
            placeholder="email" />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="password">
            Entrez votre mot de passe
          </label>
          <div className="relative">

            <input

              // type="password"
              // for first method
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}

              // pour l'oeil
              type={viewPassword ? "text" : "password"}
              onChange={funcLoginChange}
              name="password"
              className="border-1 w-full rounded-xl px-2 py-2"
              id="password"
              placeholder="password" />
            {/* pour l'oeil */}
            <button onClick={() => setViewPassword(!viewPassword)} type="button" className="absolute right-5 translate-y-3">
              {viewPassword ? <BsEye /> : <FiEyeOff />
              }
            </button>

          </div>
        </div>
        <div className="w-full block md:flex md:justify-between md:px-2">
          <div className="space-x-2 py-2 ">
            <input type="checkbox" className="cursor-pointer" id="checkbox" />
            <label className="text-sm" htmlFor="checkbox">Remember Me</label>
          </div>
          <div className="flex flex-col px-2">
            <Link to="/auth/forgetPassword">
              <p className="cursor-pointer">Forget Password ?</p>

            </Link>
            <Link to="/auth/register" className="md:flex md:justify-end">
              <button className="md:px-2 cursor-pointer">
                Sign up
              </button>
            </Link>
          </div>
        </div>


        <button type="submit"
          className="border bg-blue-500 rounded-xl w-full mt-5 py-1 cursor-pointer "
        >Se connecter </button>
      </form>
    </div>








  )
}



// */}

{/* <div className="bg-blue-700 flex items-center justify-center">
        <Link to="/auth/register"> 
        <button className=" hover:bg-green-700 text-center text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        </Link>

      </div>





        {/* <Link to="/dash/profil"> 
        <button className="bg-green-500 hover:bg-green-700 text-center text-white font-bold py-2 px-4 rounded">
          dashboard
        </button>
        </Link> */}

