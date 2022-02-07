import { useState } from "react";

export default function MoviesInput({ submitName }) {
  const [name, setName] = useState("");

  const changeInput = (event) => {
    const { value } = event.target;
    setName(value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitName(name);
    if (name.trim() === "") {
      alert("Введите название");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeInput}
          type="text"
          value={name}
          placeholder=" Введи что-нибудь"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
