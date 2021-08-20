import React from "react";
import useInput from "./hooks/useInput";

function App() {
  const [{ id, password }, onChange, reset] = useInput({
    id: "",
    password: "",
  });
  return (
    <>
      <input
        placeholder='name'
        value={id}
        name='id'
        type='email'
        onChange={onChange}
      />
      <input
        placeholder='password'
        name='password'
        type='password'
        value={password}
        onChange={onChange}
      />
      <button type='submit' onClick={reset}>
        submit
      </button>
    </>
  );
}

export default App;
