import { createContext, useContext, ReactNode, useState } from "react";

interface userType {
  colour: string;
}

interface userContextType {
  user1: userType;
  setUser1: React.Dispatch<React.SetStateAction<userType>>;
  user2: userType;
  setUser2: React.Dispatch<React.SetStateAction<userType>>;
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
}

const userContextDefaultValues: userContextType = {
  user1: { colour: "red" },
  setUser1: () => {},
  user2: { colour: "yellow" },
  setUser2: () => {},
  turn: 1,
  setTurn: () => {},
};

const UserContext = createContext<userContextType>(userContextDefaultValues);

export function useUser() {
    return useContext(UserContext);
}

type Props = {
  children: ReactNode;
};

export function UserProvider({ children }: Props) {

    const [user1, setUser1] = useState<userType>({colour: "Red"})
    const [user2, setUser2] = useState<userType>({colour: "Yellow"})
    const [turn, setTurn] = useState(1)

    const value = {
        user1,
        setUser1,
        user2,
        setUser2,
        turn,
        setTurn
    }
  return (
      <>
          <UserContext.Provider value={value}>
              {children}
          </UserContext.Provider>
      </>
  );
}