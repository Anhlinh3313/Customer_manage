import styles from "../../../styles/ManageAccount.module.css";

const Profile = () => {
    return(
        <>
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Thông tin của tôi</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create"]}>Chỉnh sửa</button>
                </div>                       
            </div>
            <div className={styles["content-container"]}>
                <div className={styles["container-left"]}>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Họ và tên</p>
                        <p className={styles["container-content"]}>Văn Phạm Trung Tuyến</p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Giới tính</p>
                        <p className={styles["container-content"]}>Nam</p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số điện thoại</p>
                        <p className={styles["container-content"]}>03339908xx</p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Email</p>
                        <p className={styles["container-content"]}>Vpttuyen@gmail.com</p>
                    </div>
                </div>
                <div className={styles["container-right"]}>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Địa chỉ</p>
                        <p className={styles["container-content"]}>Nha Trang, Khánh Hòa</p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Tên chung cư</p>
                        <p className={styles["container-content"]}>VCN</p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số phòng</p>
                        <p className={styles["container-content"]}>A-01-01</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
