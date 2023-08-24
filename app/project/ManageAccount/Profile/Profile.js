import { Checkbox, Select, message } from "antd";
import styles from "../../../../styles/ManageAccount.module.css";
import { useContext, useEffect, useState } from "react";
import InputText from "components/InputText";
import { getBuildingByPhone } from "../../../../stores/building";
import { UpdateUser } from "../../../../stores/authentication";
import { UserContext } from "context/userContext";

const { Option } = Select;

const Profile = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [user, setUser] = useState({});
    const [buildings, setBuildings] = useState([]);
    const { logOut } = useContext(UserContext);

    const handleChangeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

        const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
        if (e.target.name === "FirstName") {
            const dataUpdate = dataLocalStorage.map(item => {
                return {
                    ...item,
                    FirstName: e.target.value
                }
            })
            localStorage.setItem("user", JSON.stringify(dataUpdate));
        }

        if (e.target.name === "EmailKH") {
            const dataUpdate = dataLocalStorage.map(item => {
                return {
                    ...item,
                    EmailKH: e.target.value
                }
            })
            localStorage.setItem("user", JSON.stringify(dataUpdate));
        }
        if (e.target.name === "DCTT") {
            const dataUpdate = dataLocalStorage.map(item => {
                return {
                    ...item,
                    DCTT: e.target.value
                }
            })
            localStorage.setItem("user", JSON.stringify(dataUpdate));
        }
        if (e.target.name === "DCLL") {
            const dataUpdate = dataLocalStorage.map(item => {
                return {
                    ...item,
                    DCLL: e.target.value
                }
            })
            localStorage.setItem("user", JSON.stringify(dataUpdate));
        }
    }

    const handleChangeValueCheckMan = () => {
        setUser({ ...user, GioiTinh: true });
        const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
        const dataUpdate = dataLocalStorage.map(item => {
            return {
                ...item,
                GioiTinh: true
            }
        })
        localStorage.setItem("user", JSON.stringify(dataUpdate));
    }

    const handleChangeValueCheckFemale = () => {
        setUser({ ...user, GioiTinh: false });
        const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
        const dataUpdate = dataLocalStorage.map(item => {
            return {
                ...item,
                GioiTinh: false
            }
        })
        localStorage.setItem("user", JSON.stringify(dataUpdate));
    }

    const onChangeBuilding = (event) => {
        const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
        const dataUpdate = dataLocalStorage.map(item => {
            return {
                ...item,
                ProjectID: event
            }
        })
        localStorage.setItem("user", JSON.stringify(dataUpdate));
        setUser(dataUpdate[0]);
    }

    const getBuilding = async (params) => {
        const resData = await getBuildingByPhone(params);
        if (resData.Status === "OK") {
            setBuildings(resData.Data);
        } else {
            if (resData?.response?.status === 401) {
                return logOut();
            }
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    const saveProfile = async () => {
        if (!validateData(user)) return;

        const body = {
            customerId: user.CustomerID,
            customerCode: user.CustomerCode,
            customerSubCode: user.MaPhu ? user.MaPhu : "",
            customerName: user.FirstName,
            sex: user.GioiTinh,
            birthday: user.NgaySinh ? user.NgaySinh : "",
            address: user.DCTT ? user.DCTT : user.DCLL,
            email: user.EmailKH,
            phone: user.DienThoaiKH,
            isPersonal: user.IsCaNhan
        }

        const resData = await UpdateUser(body);
        if (resData.Status === "OK") {
            setBuildings(resData.Data);
            messageApi.open({
                type: 'success',
                content: "Cập nhật thành công",
            });
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description,
            });
        }
    }

    const validateData = (data) => {
        const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        console.log(re.test(data.EmailKH))
        if (!re.test(data.EmailKH)) {
            messageApi.open({
                type: 'error',
                content: "Email không đúng định dạng",
            });
            return false;
        }
        return true;
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0] : [];
        setUser(data);

        async function fetchData() {
            if (data.DienThoaiKH) {
                const params = {
                    Phone: data.DienThoaiKH
                }
                await getBuilding(params);
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
                    <button onClick={() => saveProfile()} className={styles["button-create-green"]}>
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
                            type="text"
                        />
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Giới tính</p>
                        <div className={styles["padding-form"]}>
                            <p className={styles["container-content"]}>
                                <span>
                                    <Checkbox
                                        checked={user.GioiTinh}
                                        onChange={() => handleChangeValueCheckMan()}
                                        className={styles["gender"]}
                                    >
                                        Nam
                                    </Checkbox>
                                </span>
                                <span>
                                    <Checkbox
                                        checked={!user.GioiTinh}
                                        onChange={() => handleChangeValueCheckFemale()}
                                        className={styles["gender"]}
                                    >
                                        Nữ
                                    </Checkbox>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số điện thoại <span className={styles["compulsory"]}>*</span></p>
                        <InputText
                            value={user.DienThoaiKH}
                            onChange={(e) => handleChangeValue(e)}
                            name="DienThoaiKH"
                            className={styles["input-username"]}
                            placeholder="Nhập số điện thoại"
                            type="text"
                            isDisabled={true}
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
                            type="text"
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
                            type="text"
                        />
                    </div>

                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Chung cư</p>
                        <div className={styles["padding-form"]}>
                            <div className={styles["form-select"]}>
                                <Select
                                    placeholder="Tòa nhà"
                                    style={{ width: '100%', textAlign: 'left' }}
                                    onChange={(e) => onChangeBuilding(e)}
                                    bordered={false}
                                    value={user?.ProjectID}
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
                        </div>
                    </div>
                    <div className={styles["container-item"]}>
                        <p className={styles["container-title"]}>Số phòng</p>
                        <div className={styles["padding-form"]}>
                            <InputText
                                isDisabled={true}
                                value={user?.TN ? user?.TN[0]?.MB[0]?.MaSoMB : ""}
                                name={user.DCTT ? "DCTT" : "DCLL"}
                                className={styles["input-username"]}
                                placeholder="Nhập địa chỉ"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
