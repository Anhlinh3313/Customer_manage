import { useState } from "react";
import styles from "../../styles/Login.module.css"

function Login() {
    const[isShowEye, setIsShowEye] = useState(true);
    return (
        <>
            <div className={styles["login"]}>
                <div className={styles["form-left"]}></div>
                <div className={styles["form-login"]}> 
                    <div className={styles["logo"]}>
                        <img src="./logo_login.png" alt="Banner" />
                    </div>
                    <div className={styles["form"]}>
                        <p>Đăng nhập</p>
                        <p>Nhập thông tin bên dưới để tiếp tục</p>
                        <div className={styles["form-input"]}>
                            <p className={styles["input"]}>
                                <input className={styles["input-username"]} placeholder="Nhập tài khoản"></input>
                            </p>
                            <p className={styles["input"]}>
                                <input className={styles["input-username"]} placeholder="Mật khẩu"></input>
                               { isShowEye ?
                                    <img  src="./icon_eye_on.png" alt="Banner"  onClick={()=> setIsShowEye(!isShowEye)}/>
                                :
                                    <img  src="./icon_eye_off.png" alt="Banner" onClick={()=> setIsShowEye(!isShowEye)}/>
                                }                                                                
                            </p>
                            <p className={styles["changepassword"]}>
                                <span>Quên mật khẩu?</span>
                            </p>
                            <p className={styles["buttom-login"]}>
                                <button>Đăng nhập</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles["form-right"]}></div>
            </div>
        </>
    );
}

export default Login;