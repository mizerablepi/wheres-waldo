function UserModal({ score, name }) {
  return (
    <div
      className={`fixed w-screen h-screen flex flex-col justify-center items-center z-20 top-0 bg-black/50 ${
        score > 0 ? "block" : "hidden"
      }`}
    >
      <div className="font-bold text-white">
        Your Score is{" "}
        {Math.floor((score / 60000) % 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor((score / 1000) % 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.round((score % 1000) / 10)
          .toString()
          .padStart(2, "0")}
      </div>
      <form
        action={"http://localhost:3000/submit/" + name}
        className="flex flex-col mt-4"
        method="post"
      >
        <input
          type="text"
          required
          minLength={1}
          maxLength={20}
          placeholder="Username"
          name="username"
          className="p-2 border-red-600 border"
        />
        <button
          type="submit"
          className="text-white font-bold bg-blue-600 mt-2 self-center px-4 py-2 rounded"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default UserModal;
