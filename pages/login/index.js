import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css"
import { useRouter } from "next/router";
import { getToken, loginUser } from "../../stores/authentication";
import { message } from "antd";
import InputText from '../../app/components/InputText'
import InputPassword from '../../app/components/InputPassWord'
import { UserContext } from "../../app/context/userContext";
import { loginSuccess, passwordError, userNameError } from '../../app/data/message'

function Login() {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'login';

    const [data, setData] = useState({ userName: '', password: "" });
    const { user, setUser } = useContext(UserContext)

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const login = async () => {
        if (!validateData(data)) {
            return;
        }
        const token = await getToken();
        if (token.access_token) {
            const user = await loginUser(data, token.access_token);
            if (user.Status === "OK") {
                localStorage.setItem('user', user?.Data);
                localStorage.setItem('token', token.access_token);
                setUser(user.Data);
                openMessage();
                
                setTimeout(() => {
                    router.push(`/home`);
                }, 1000);
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

    const validateData = (data) => {
        if (!data.userName) {
            messageApi.open({
                type: 'error',
                content: userNameError,
            });
            return false;
        }
        if (!data.password) {
            messageApi.open({
                type: 'error',
                content: passwordError,
            });
            return false;
        }
        return true;
    }

    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: loginSuccess,
                duration: 2,
            });
        }, 1000);
    };
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