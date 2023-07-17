import { useState } from "react";
import styles from "../../styles/RegisterCheckIn.module.css"
import { Select } from "antd";

function RegisterCheckIn() {
    const[isShowEye, setIsShowEye] = useState(true);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    return (
        <>
        <div className={styles["login"]}>
            <div className={styles["form-left"]}></div>
            <div className={styles["form-login"]}> 
                <div className={styles["form"]}>
                    <p>Đăng ký check in</p>
                    <p>Xin mời bạn nhập thông tin checkin</p>
                    <div className={styles["form-input"]}>
                        <div className={styles["contact-input"]}>
                            <div className={styles["form-select"]}>
                                <Select
                                    defaultValue="Chọn mặt bằng"
                                    style={{ width: '100%', textAlign: 'left', color: '#fff'}}
                                    onChange={handleChange}
                                    bordered={false}
                                    options={[
                                        { value: 'jack', label: 'Building1' },
                                        { value: 'lucy', label: 'Building2' },
                                        { value: 'Yiminghe', label: 'Building3' },
                                    ]}
                                />
                            </div>  
                        </div>
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
                        <div className={styles["input-form"]}>
                            <div>
                                <input className={styles["input-username"]} placeholder="Số điện thoại..."></input>
                            </div>
                            <div className={styles["form-select"]}>
                                <Select
                                    defaultValue="Mối quan hệ với chủ hộ"
                                    style={{ width: '100%', textAlign: 'left', color: '#fff'}}
                                    onChange={handleChange}
                                    bordered={false}
                                    options={[
                                        { value: 'jack', label: 'Cha' },
                                        { value: 'lucy', label: 'Mẹ' },
                                        { value: 'Yiminghe', label: 'Anh/Chị' },
                                    ]}
                                />
                            </div>
                        </div>
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