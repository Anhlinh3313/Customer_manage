import { Checkbox } from "antd";
import styles from "../../../../styles/ManageAccount.module.css";

const Profile = () => {
    return(
        <>
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Thông tin của tôi</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]}>
                        <span>Lưu</span>
                    </button>
                </div>                       
            </div>

            <div className={styles["content-container"]}>
                
                <div className={styles["container-left"]}>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Họ và tên <span className={styles["compulsory"]}>*</span></p>
                        <input className={styles["input-data"]} placeholder="Văn Phạm Trung Tuyến"></input>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Giới tính</p>
                        <p className={styles["container-content"]}>
                            <span>
                                <Checkbox className={styles["gender"]}>Nam</Checkbox>
                            </span>
                            <span>
                                <Checkbox className={styles["gender"]}>Nữ</Checkbox>
                            </span>
                        </p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số điện thoại <span className={styles["compulsory"]}>*</span></p>
                        <input className={styles["input-data"]} placeholder="03339908xx"></input>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Email</p>
                        <input className={styles["input-data"]} placeholder="Vpttuyen@gmail.com"></input>
                    </div>
                </div>

                <div className={styles["container-right"]}>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Địa chỉ <span className={styles["compulsory"]}>*</span></p>
                        <input className={styles["input-data"]} placeholder="Nha Trang, Khánh Hòa"></input>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Tên chung cư</p>
                        <input disabled="true" className={styles["input-data"]} placeholder="VCN"></input>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số phòng</p>
                        <input disabled="true" className={styles["input-data"]} placeholder="A-01-01"></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
