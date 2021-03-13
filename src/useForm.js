import { useState } from "react";
// this function will allow us to create our own state for handle Input Change, then we call just called it replacing the keys.

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};
