"use client";
import { Dispatch, SetStateAction, useState, useContext } from 'react';
import { createContext, ReactNode } from 'react';

type Props = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
};

const LangContext = createContext<Props>({ lang: 'Python', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<string>('Python');

    return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const { lang, ...rest } = useContext(LangContext);

  if (lang === null) {
    throw new Error(
      "Couldn't find the selected language. Is your component inside LangContext?"
    );
  }

  return { lang, ...rest };
}
