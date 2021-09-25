import React, { useState, createContext } from 'react';

export interface ContextState {
  sessionId: string;
  username: string;
}

const initialState: ContextState = {
  sessionId: '',
  username: '',
};

type ContextProps = [
  ContextState,
  React.Dispatch<React.SetStateAction<ContextState>>
];

export const Context = createContext({} as ContextProps);

const UserProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<ContextState>(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
