'use client';
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [activeFormKey, setActiveFormKey] = useState(null);

  return (
    <FormContext.Provider value={{ activeFormKey, setActiveFormKey }} />
  );
}

export function useForm() {
  return useContext(FormContext);
}