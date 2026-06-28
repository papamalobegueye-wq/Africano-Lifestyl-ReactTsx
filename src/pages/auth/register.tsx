import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const navigation = useNavigate();

  const funcRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (registerData.password.length < 5) {
      alert("Mot de passe court")
    } else {
      localStorage.setItem("Firstname", registerData.firstname)

      localStorage.setItem("lastname", registerData.lastname)

      localStorage.setItem("email", registerData.email)

      localStorage.setItem("password", registerData.password)

      navigation("/dash/profil")
    }
  }
  return (
    <div className="w-full">
      <div className="py-2">
        <h2 className="flex gap-2 font-josh font-bold tracking-wide text-2xl">
          Create New Account
        </h2>
        <p className="opacity-40 text-sm">Please enter details</p>
      </div>

      <form onSubmit={onRegister} className="py-3">
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="pseudo">
            Entrez votre prénom
          </label>

          <input
            type="pseudo"
            onChange={funcRegisterChange}
            name="firstname"
            className="border-1 rounded-xl px-2 py-2"
            id="pseudo"
            placeholder="ex: Bamba" />
        </div>

        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="pseudo">
            Entrez votre nom
          </label>

          <input
            type="pseudo"
            onChange={funcRegisterChange}
            name="lastname"
            className="border-1 rounded-xl px-2 py-2"
            id="pseudo"
            placeholder="ex: Mbaye" />
        </div>

        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="email">
            Entrez votre adresse email
          </label>

          <input
            type="email"
            onChange={funcRegisterChange}
            name="email"
            className="border-1 rounded-xl px-2 py-2"
            id="email"
            placeholder="ex: Bamba@gmail.com" />
        </div>

        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="password">
            Entrez votre mot de passe
          </label>

          <input
            type="password"
            onChange={funcRegisterChange}
            name="password"
            className="border-1 rounded-xl px-2 py-2"
            id="password"
            placeholder="Mot de passe" />
        </div>
        <div className="space-x-2 py-2 ">
            <input type="checkbox" className="cursor-pointer" id="checkbox" />
            <label className="text-sm" htmlFor="checkbox">I agree the <span className="font-bold font-josh ">Termes & Conditions</span></label>
          </div>
        <button type="submit"
        className="border bg-black text-white rounded-xl w-full mt-5 py-2 cursor-pointer ">
          Sign up
        </button>
      </form>

    </div>
  );
}


















