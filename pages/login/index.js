import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css"
import { useRouter } from "next/router";
import { UserContext } from "../../app/context/userContext";

function Login() {
    const[isShowEye, setIsShowEye] = useState(true);
    const { user, setUser } = useContext(UserContext)
    const router = useRouter();

    const data = [
       {
            token: "test_token",
            fullName: "Văn Phạm Trung Tuyến",
       }
    ]

    const login =()=>{
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data)
        router.push(`/home`)
    }

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
                            <p className={styles["buttom-login"]} onClick={()=>login()} >
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