import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function ForgetPassword() {

  const [resetPassword, setResetPassword] = useState("");
  console.log(resetPassword)

  const onReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem("resetPassword", resetPassword)
  }
  return (
    <div className='w-full'>
      <div className="py-2 ">
        <h2 className="flex gap-2 font-josh font-bold tracking-wide text-2xl ">
          Forget Password
        </h2>
        <p className="opacity-40 text-sm mt-2">Enter your regisfered email address. We will send you a code to reset your password</p>
      </div>

      <form onSubmit={onReset}>
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="email">
            Email Address
          </label>

          <input
            type="email"

            value={resetPassword}
            onChange={(e) => setResetPassword(e.target.value)}


            name="resetPassword"
            className="border-1 rounded-xl px-2 py-2"
            id="email"
            placeholder="ex: Bamba@gmail.com" />
        </div>
        <Link to="/auth/login">
          <button type="submit"
            className="py-4 bg-black text-white font-bold fint-josh w-full rounded-xl mt-5">Send OTP</button>
        </Link>
      </form>
    </div>
  )
}
