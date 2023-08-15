import { Checkbox, Select, message } from "antd";
import styles from "../../../../styles/ManageAccount.module.css";
import { useEffect, useState } from "react";
import InputText from "components/InputText";
import { getBuildingByPhone } from "../../../../stores/building";
const { Option } = Select;

const Profile = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [user, setUser] = useState({});
    const [buildings, setBuildings] = useState([]);

    const handleChangeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleChangeValueCheckMan = () => {
        setUser({ ...user, GioiTinh: true });
    }

    const handleChangeValueCheckFemale = () => {
        setUser({ ...user, GioiTinh: false });
    }

    const onChangeBuilding = () => {
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"))[0];
        setUser(data);

        async function fetchData() {
            if (data.DienThoaiKH) {
                const params = {
                    Phone: data.DienThoaiKH
                }
                const resData = await getBuildingByPhone(params);
                if(resData.Status === "OK"){
                    setBuildings(resData.Data);
                } else {
                    messageApi.open({
                        type: 'error',
                        content: resData.Description,
                    });
                }
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {contextHolder}
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
                        <InputText
                            value={user.FirstName}
                            onChange={(e) => handleChangeValue(e)}
                            name="FirstName"
                            className={styles["input-username"]}
                            placeholder="Nhập họ và tên"
                        />
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Giới tính</p>
                        <p className={styles["container-content"]}>
                            <span>
                                <Checkbox checked={user.GioiTinh} onChange={() => handleChangeValueCheckMan()} className={styles["gender"]}>Nam</Checkbox>
                            </span>
                            <span>
                                <Checkbox checked={!user.GioiTinh} onChange={() => handleChangeValueCheckFemale()} className={styles["gender"]}>Nữ</Checkbox>
                            </span>
                        </p>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số điện thoại <span className={styles["compulsory"]}>*</span></p>
                        <InputText
                            value={user.DienThoaiKH}
                            onChange={(e) => handleChangeValue(e)}
                            name="DienThoaiKH"
                            className={styles["input-username"]}
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Email</p>
                        <InputText
                            value={user.EmailKH}
                            onChange={(e) => handleChangeValue(e)}
                            name="EmailKH"
                            className={styles["input-username"]}
                            placeholder="Nhập email"
                        />
                    </div>
                </div>

                <div className={styles["container-right"]}>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Địa chỉ <span className={styles["compulsory"]}>*</span></p>
                        <InputText
                            value={user.DCTT ? user.DCTT : user.DCLL}
                            onChange={(e) => handleChangeValue(e)}
                            name={user.DCTT ? "DCTT" : "DCLL"}
                            className={styles["input-username"]}
                            placeholder="Nhập địa chỉ"
                        />
                    </div>

                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Tên chung cư</p>
                        <Select
                            placeholder="Tòa nhà!"
                            allowClear
                            showSearch
                            name="role"
                            onChange={onChangeBuilding}
                        >
                            {buildings.length > 0 &&
                            buildings.map((item) => {
                                return (
                                <Option key={item?.MaTN} value={item?.MaTN}>
                                    {item?.TenTN}
                                </Option>
                                );
                            })}
                        </Select>
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
