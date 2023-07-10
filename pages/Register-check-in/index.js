import { useState } from "react";
import styles from "../../styles/RegisterCheckIn.module.css"

function RegisterCheckIn() {
    const[isShowEye, setIsShowEye] = useState(true);
    return (
        <>
        <div className={styles["login"]}>
            <div className={styles["form-left"]}></div>
            <div className={styles["form-login"]}> 
                <div className={styles["form"]}>
                    <p>Đăng ký check in</p>
                    <p>Xin mời bạn nhập thông tin checkin</p>
                    <div className={styles["form-input"]}>
                        <p className={styles["contact-input"]}>
                            <div className={styles["form-select"]}>
                                <span>Chọn yêu cầu liên hệ</span>
                                <span>            
                                    <img className={styles["icon-branch"]} src="./icon_select.png" alt="mail" />
                                </span>
                            </div>  
                        </p>
                        <p className={styles["title-input"]}>
                            <span>Thông tin chủ hộ</span>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-username"]} placeholder="Họ và tên..."></input>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-username"]} placeholder="Số điện thoại..."></input>
                        </p>
                        <p className={styles["title-input"]}>
                            <span>Thông tin khách đến liên hệ</span>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-username"]} placeholder="Họ và tên..."></input>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-username"]} placeholder="Số điện thoại..."></input>
                        </p>
                        <p className={styles["input-form"]}>
                            <div>
                                <input className={styles["input-username"]} placeholder="Số điện thoại..."></input>
                            </div>
                            <div className={styles["form-select"]}>
                                <span>Mối quan hệ với chủ hộ</span>
                                <span>            
                                    <img className={styles["icon-branch"]} src="./icon_select.png" alt="mail" />
                                </span>
                            </div>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-username"]} placeholder="Giấy tờ tùy thân (Căn cước, Visa, GOLX, CMT)"></input>
                        </p>
                        <p className={styles["input"]}>
                            <input className={styles["input-description"]} placeholder="Nhập thông tin mô tả nếu có..."></input>
                        </p>
                        <p className={styles["buttom-login"]}>
                            <button>Gửi đăng ký</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["form-right"]}></div>
        </div>
    </>
    );
}

export default RegisterCheckIn;