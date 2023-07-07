import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { API_URL } from "@function/wsCode";
import { useRouter } from 'next/router';

const MenuPC = () => {
  const [menuScroll, setMenuScroll] = useState(false);
  const [menuButtom, setMenuButtom] = useState([]);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

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
              <button className={stylesCss["button-check-in"]}>Đăng ký check in</button>
            </div>
            <div className={stylesCss["div-login"]}>
              <button className={stylesCss["bottom-login"]}>Đăng nhập</button>
            </div>
          </div>
          <div className={stylesCss["menu-toggle"]}>
            <svg
              onClick={toggleMenu}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            <div className={showMenu ? stylesCss["menu-toggle-show"] : stylesCss["menu-toggle-hide"]}>
              <span>
                {menuButtom?.map((val, key) => {
                  return val.element;
                })}
              </span>
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
