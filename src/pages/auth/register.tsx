import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div
      className="bg-red-700 h-screen w-full
    text-white text-5xl uppercase font-bold"
    >
      <Link to="/auth/login">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  );
}
