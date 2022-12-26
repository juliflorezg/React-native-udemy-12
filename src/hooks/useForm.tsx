import {useState} from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const onChange = <V extends Object>(field: keyof T, value: V) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    ...form,
    form,
    onChange,
  };
};
