import React from "react";
import Styles from "../../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles["footer"]}>
      <div className={Styles["footer-line"]}></div>
      <div className={Styles["footer-menu"]}>
        <img className={Styles["footer-logo"]} src="/logo.png" alt="logo" />
        <div className={Styles["menu"]}>
          <span className={Styles["menu-item"]}>Trang chủ</span>
          <span className={Styles["menu-item"]}>Tin tức tòa nhà</span>
          <span className={Styles["menu-item"]}>Sơ đồ mặt bằng</span>
          <span className={Styles["menu-item"]}>Đăng ký check in</span>
          <span className={Styles["menu-item"]}>Liên hệ</span>
        </div>
      </div>
      <div className={Styles["footer-branch"]}>
        <div className={Styles["footer-branch-item"]}>
          <p className={Styles["provice"]}>Hà Nội</p>
          <p className={Styles["form-branch-item"]}>
              <span className={Styles["form-branch-item-img"]}>
                  <img className={Styles["icon-branch"]} src="/icon_address_footer.png" alt="address" />
              </span>
              <span className={Styles["icon-text"]}>Tầng 1, Tháp The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Tp. Hà Nội.</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_phone_footer.png" alt="phone" />
                  </span>
              <span className={Styles["icon-text"]}>+84 24 3785 5588</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_mail_footer.png" alt="mail" />
              </span>
              <span className={Styles["icon-text"]}>info@bitexco.com.vn</span>
          </p>
        </div>
        <div className={Styles["footer-branch-item"]}>
          <p className={Styles["provice"]}>Hồ Chí Minh</p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_address_footer.png" alt="address" />
              </span>
              <span className={Styles["icon-text"]}>Tầng 48, Tòa nhà Bitexco Financial Tower, số 2 Hải Triều, phường Bến Nghé, quận 1, TP.Hồ Chí Minh.</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_phone_footer.png" alt="phone" />
                  </span>
              <span className={Styles["icon-text"]}>+84 24 3785 5588</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_mail_footer.png" alt="mail" />
              </span>
              <span className={Styles["icon-text"]}>info@bitexco.com.vn</span>
          </p>
        </div>
        <div className={Styles["footer-branch-item"]}>
          <p className={Styles["provice"]}>Thái Bình</p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_address_footer.png" alt="address" />
              </span>
              <span className={Styles["icon-text"]}>Số 102A, phố Quang Trung, phường Trần Hưng Đạo, thành phố Thái Bình, Tỉnh Thái Bình</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_phone_footer.png" alt="phone" />
                  </span>
              <span className={Styles["icon-text"]}>+84 24 3785 5588</span>
          </p>
          <p className={Styles["form-branch-item"]}>
              <span>
                  <img className={Styles["icon-branch"]} src="/icon_mail_footer.png" alt="mail" />
              </span>
              <span className={Styles["icon-text"]}>info@bitexco.com.vn</span>
          </p>
        </div>
      </div>
      <div className={Styles["footer-icon"]}>
        <div className={Styles["footer-icon-left"]}>
        </div>
        <div className={Styles["footer-list-icon"]}>
          <span>
            <img className={Styles["icon-footer"]} src="/icon_footer_fb.png" alt="address" />
          </span>
          <span>
            <img className={Styles["icon-footer"]} src="/icon_footer_tw.png" alt="address" />
          </span>
          <span>
            <img className={Styles["icon-footer"]} src="/icon_footer_in.png" alt="address" />
          </span>
          <span>
            <img className={Styles["icon-footer"]} src="/icon_footer_it.png" alt="address" />
          </span>
        </div>
        <div className={Styles["footer-icon-right"]}>
        </div>
      </div>
    </div>
  );
};

export default Footer;
