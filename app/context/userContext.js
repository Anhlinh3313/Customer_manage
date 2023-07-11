import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [dataUser, setUser] = useState(null);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        localStorage.removeItem("user");
        setUser(null);
        return null;
      }
    };
    
    const AuthVerify = () => {
        if(localStorage.getItem("user")){
          const dataUser = JSON.parse(localStorage.getItem("user"));
          if (dataUser) {
            // const decodedJwt = parseJwt(dataUser.token);
            // if(decodedJwt){
            //   if (decodedJwt.exp * 1000 < Date.now()) {
            //     setUser(null);
            //     localStorage.removeItem("userThethao789");
            //   }else {
            //     setUser(dataUser);
            //   }
            // }
            setUser(dataUser);
          }
        }
    };
    AuthVerify()
  },[])

  const logOut = () => {
    setUser(null);
    setIsShowMenu(false);
    localStorage.removeItem("user");
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