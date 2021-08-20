import React from "react";
import { useCallback } from "react";
import { useState } from "react";

function useInput<T>(
  initialForm: T
): [T, (e?: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [form, setForm] = useState(initialForm);

  //change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    alert(JSON.stringify(form));
    setForm(initialForm);
  }, [form, initialForm]);

  return [form, onChange, reset];
}

export default useInput;
