import { IUser } from './../types/index';
import { createContext, FC, PropsWithChildren, useState } from 'react';

export const AuthContext = createContext<{
  token: string;
  user: IUser | null;
  logInOut: (token: string, user: IUser | null) => void;
}>({
  token: '',
  user: null,
  logInOut: (token: string, user: IUser | null) => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        logInOut: (token: string, user: IUser | null) => {
          setToken(token);
          setUser(user);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
