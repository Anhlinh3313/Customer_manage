import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [dataUser, setUser] = useState(null);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const router = useRouter();
  
  useEffect(() => {
    const AuthVerify = () => {
        if(localStorage.getItem("user")){
          const data = localStorage.getItem("user");
          const token = localStorage.getItem("token");
          if (token && data) {
            setUser(JSON.parse(data));
          } else {
            setUser(null);
            setIsShowMenu(false);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            router.push("/login")
          }
          setUser(JSON.parse(data));
        }
    };
    AuthVerify()
  },[])

  const logOut = () => {
    setUser(null);
    setIsShowMenu(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login")
  }

  const onchangeShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  }

  return (
    // <UserContext.Provider value={{user: dataUser?.user, setUser, logOut}}>
    <UserContext.Provider value={{user: dataUser, setUser, logOut, isShowMenu: isShowMenu, onchangeShowMenu}}>
      {children}
    </UserContext.Provider>
  );
}