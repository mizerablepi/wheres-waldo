import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="font-bold text-2xl">Login to your account: </h2>
      <form
        action="http://localhost:3000/api/login" //"https://wheres-waldo-backend-kemp.onrender.com/api/login"
        method="post"
        className="flex flex-col w-[30rem] mt-8"
      >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="border-2 mb-4 border-red-600 focus-visible:outline-none focus-visible:border-red-800"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border-2 mb-4 border-red-600 focus-visible:outline-none focus-visible:border-red-800"
        />
        <button
          type="submit"
          className="bg-blue-600 self-start py-1 px-3 rounded-md text-white font-bold my-2"
        >
          Login
        </button>
        <span className="self-start">
          No account?{" "}
          <Link to={"/signup"} className="underline text-sky-600">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
