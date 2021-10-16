import { createContext, ReactNode, useState } from "react";

export interface UserProfileInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
}

export interface UserProfileContextInterface {
  user: UserProfileInterface;
  setUser?: (newUserObj: UserProfileInterface) => void;
}

export const UserContext = createContext<UserProfileContextInterface>({ user: {} });

function UserContextProvider({ user, children }: UserProfileContextInterface & { children: ReactNode }
): JSX.Element {
  const [userObj, setUserObj] = useState<UserProfileInterface>(user);

  const setUser = (newUserObj: UserProfileInterface) => {
    setUserObj(newUserObj);
  };

  return (
    <UserContext.Provider value={{ user: userObj, setUser }}>
      { children }
    </UserContext.Provider>
  );
}


export default UserContextProvider;
