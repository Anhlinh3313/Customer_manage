import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { API_URL } from "@function/wsCode";
import { useRouter } from 'next/router';
import { UserContext } from "context/userContext";

const MenuPC = () => {
  const [menuScroll, setMenuScroll] = useState(false);
  const [menuButtom, setMenuButtom] = useState([]);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { logOut, user, isShowMenu, onchangeShowMenu } = useContext(UserContext)

  const data = [
    {
      menuSlug: "home",
      menuName: "Trang chủ"
    },
    {
      menuSlug: "new-building",
      menuName: "Tin tức tòa nhà"
    },
    {
      menuSlug: "archirectural-drawing",
      menuName: "Sơ đồ mặt bằng"
    },
  ]

  const onchangeRoute=(event)=>{
    router.push(event)
    onchangeShowMenu()
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let { elementBottom } = SizeOfElement(document.body);
      if (elementBottom > 110) {
        setMenuScroll(true);
      } else {
        setMenuScroll(false);
      }
    });
  }, [typeof window !== "undefined" && window]);

  useEffect(() => {
    const isActive = (path) => {
      return router.pathname.includes(path);
    };

    const menuList = data?.map((item, i) => {
      const active = isActive(item.menuSlug) ? stylesCss["menu_bottom_item_active"] : "";
      return {
        element: (
          <a onClick={() => router.push(`/${item.menuSlug}`)}>
            <div className={`${stylesCss["menu_bottom_item"]} ${active}`}>{item.menuName}</div>
          </a >
        ),
        event: () => { },
        status: true,
        path: `${item.menuSlug}`,
      }
    });
    setMenuButtom(menuList);
  }, [router.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={stylesCss["menu-container"]}>
        <div className={stylesCss["navMenu-container"]}>
          <a onClick={() => router.push("/")}>
            <img className={stylesCss.logo} src="/logo.png" alt="logo" />
          </a>

          <div className={stylesCss["menu-warpper"]}>
            {menuButtom?.map((val, key) => {
              return <Fragment key={key}>{val.element}</Fragment>;
            })}
          </div>
          <div className={stylesCss["button"]}>
            <div className={stylesCss["div-check-in"]}>
              <button className={stylesCss["button-check-in"]} onClick={() => router.push(`/Register-check-in`)}>Đăng ký check in</button>
            </div>
            {
              user == null ?
                <div className={stylesCss["div-login"]}>
                  <button className={stylesCss["bottom-login"]} onClick={() => router.push(`/login`)}>Đăng nhập</button>
                </div>
              :
                <div className={stylesCss["avatar"]}>
                  <div>
                    <img src="/avatar.png" alt="" onClick={onchangeShowMenu}/>
                  </div>
                  {
                    isShowMenu ?
                      <div className={stylesCss["list-menu"]}>
                        <ul>
                          <li>
                            <span>
                              <img src="/avatar.png" alt=""/>
                            </span>
                            <span className={stylesCss["list-menu-text-name"]}>{user[0]?.fullName}</span>
                          </li>
                          <li onClick={() => onchangeRoute("/manage-account")}>
                            <span>
                              <img className={stylesCss["icon-menu"]} src="/Icon_info_account.png" alt=""/>
                            </span>
                            <span className={stylesCss["list-menu-text"]}>Thông tin của tôi</span>
                          </li>
                          <li>
                            <span>
                              <img className={stylesCss["icon-menu"]} src="/icon_management_info.png" alt=""/>
                            </span>
                            <span className={stylesCss["list-menu-text"]}>Quản lý thông tin</span>
                          </li>
                          <li>
                            <span>
                              <img className={stylesCss["icon-menu"]} src="/icon_change_password.png" alt=""/>
                            </span>
                            <span className={stylesCss["list-menu-text"]}>Đổi mật khẩu</span>
                          </li>
                          <li onClick={logOut}>
                            <span>
                              <img className={stylesCss["icon-menu"]} src="/icon_logount.png" alt=""/>
                            </span>
                            <span className={stylesCss["list-menu-text"]}>Đăng xuất</span>
                          </li>
                        </ul>
                      </div>
                    : 
                    <></>
                  }
                </div>
            }
          </div>
          <div className={stylesCss["menu-toggle"]}>
            <svg 
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="25" 
              viewBox="0 0 24 25" 
              fill="none"
            >
              <path d="M22 6.46553C22 5.9159 21.5544 5.47034 21.0048 5.47034L12.9952 5.47034C12.4456 5.47034 12 5.9159 12 6.46553C12 7.01516 12.4456 7.46072 12.9952 7.46072L21.0048 7.46072C21.5544 7.46072 22 7.01516 22 6.46553Z" fill="#121212"/>
              <path d="M22 12.4701C22 11.9205 21.5544 11.4749 21.0048 11.4749L2.99519 11.4749C2.44556 11.4749 2 11.9205 2 12.4701C2 13.0197 2.44556 13.4653 2.99519 13.4653L21.0048 13.4653C21.5544 13.4653 22 13.0197 22 12.4701Z" fill="#121212"/>
              <path d="M21.0048 17.48C21.5544 17.48 22 17.9255 22 18.4751C22 19.0248 21.5544 19.4703 21.0048 19.4703L8.99519 19.4703C8.44556 19.4703 8 19.0248 8 18.4751C8 17.9255 8.44556 17.48 8.99519 17.48L21.0048 17.48Z" fill="#121212"/>
            </svg>
            <div className={showMenu ? stylesCss["menu-toggle-show"] : stylesCss["menu-toggle-hide"]}>
              <div className={stylesCss["menu-container-mobile"]}>
                <div className={stylesCss["mobile-header"]}>
                    <div className={stylesCss["mobile-header-title"]}>
                      <span>Menu</span>
                    </div>
                    <div  onClick={toggleMenu} className={stylesCss["mobile-header-close"]}>
                      <img src="/icon_close_mobile.png" alt=""/>
                    </div>
                </div>
                <div className={stylesCss["line-mobile"]}></div>
                {
                  user != null ?
                    <div className={stylesCss["list-menu-mobile"]}>
                      <ul>
                        <li>
                          <span>
                            <img className={stylesCss["list-menu-avatar"]} src="/avatar.png" alt=""/>
                          </span>
                          <span className={stylesCss["list-menu-text-name"]}>Văn Phạm Trung Tuyến</span>
                        </li>
                        <li onClick={() => onchangeRoute("/manage-account")}>
                          <span>
                            <img className={stylesCss["icon-menu"]} src="/Icon_info_account.png" alt=""/>
                          </span>
                          <span className={stylesCss["list-menu-text"]}>Thông tin của tôi</span>
                        </li>
                        <li>
                          <span>
                            <img className={stylesCss["icon-menu"]} src="/icon_management_info.png" alt=""/>
                          </span>
                          <span className={stylesCss["list-menu-text"]}>Quản lý thông tin</span>
                        </li>
                        <li>
                          <span>
                            <img className={stylesCss["icon-menu"]} src="/icon_change_password.png" alt=""/>
                          </span>
                          <span className={stylesCss["list-menu-text"]}>Đổi mật khẩu</span>
                        </li>
                        <li onClick={logOut}>
                          <span>
                            <img className={stylesCss["icon-menu"]} src="/icon_logount.png" alt=""/>
                          </span>
                          <span className={stylesCss["list-menu-text"]}>Đăng xuất</span>
                        </li>
                      </ul>
                    </div>
                  :
                    <div className={stylesCss["button-mobile"]}>
                      <div className={stylesCss["div-check-in"]}>
                        <button className={stylesCss["bottom-login-mobile"]} onClick={() => router.push(`/login`)}>Đăng nhập</button>
                      </div>
                    </div>
                }
                <div className={stylesCss["button-mobile"]}>
                  <div className={stylesCss["div-check-in"]}>
                    <button className={stylesCss["button-check-in"]} onClick={() => router.push(`/Register-check-in`)}>Đăng ký check in</button>
                  </div>
                </div>
                <div className={stylesCss["line-mobile"]}></div>
                <div className={stylesCss["list-menu-mobile-item"]}>
                  <p>
                    {menuButtom?.map((val, key) => {
                      return val.element;
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav >
      {menuScroll && (
        <div
          onClick={() => {
            scrollView.top();
          }}
        >
          <IconTop />
        </div>
      )
      }
    </>
  );
};

export default MenuPC;
