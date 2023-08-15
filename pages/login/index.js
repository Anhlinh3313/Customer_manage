import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css"
import { useRouter } from "next/router";
import { getToken, loginUser } from "../../stores/authentication";
import { message } from "antd";
import InputText from '../../app/components/InputText'
import InputPassword from '../../app/components/InputPassWord'
import { UserContext } from "../../app/context/userContext";
import { CiLock } from 'react-icons/ci'

function Login() {
    const router = useRouter();
    const [data, setData] = useState({ userName: '', password: "" });
    const [messageApi, contextHolder] = message.useMessage();
    const { user, setUser } = useContext(UserContext)

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const login = async () => {
        const token = await getToken();
        if (token.access_token) {
            const user = await loginUser(data, token.access_token);
            if (user.Status === "OK") {
                localStorage.setItem('user', user?.Data);
                localStorage.setItem('token', token.access_token);
                setUser(user.Data)
                router.push(`/home`)
            } else {
                messageApi.open({
                    type: 'error',
                    content: user.Description,
                });
            }
        }
        else {
            messageApi.open({
                type: 'error',
                content: 'token not found',
            });
        }
    }

    return (
        <>
            {contextHolder}
            <div className={styles["login"]}>
                <div className={styles["form-left"]}></div>
                <div className={styles["form-login"]}>
                    <div className={styles["logo"]}>
                        <img src="./logo_login.png" alt="Banner" />
                    </div>
                    <div className={styles["form"]}>
                        <div className={styles["title-logo"]}>Đăng nhập</div>
                        <div>Nhập thông tin bên dưới để tiếp tục</div>
                        <div className={styles["form-input"]}>
                            <div className={styles["input"]}>
                                <InputText onChange={onChange} name="userName" className={styles["input-username"]} placeholder="Nhập tài khoản" />
                            </div>
                            <div className={styles["input-password"]}>
                                <InputPassword onChange={onChange} name="password" className={styles["input-username"]} placeholder="Mật khẩu" />
                            </div>
                            <div className={styles["changepassword"]}>
                                <span>Quên mật khẩu?</span>
                            </div>
                            <div className={styles["buttom-login"]} onClick={() => login()}>
                                <button type="submit">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["form-right"]}></div>
            </div>
        </>
    );
}

export default Login;