import { DatePicker, Modal, Select, Upload, message } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useContext, useEffect, useState } from "react";
import { getSelectedTypeRegisterPaking } from "../../../stores/typeRegisterPaking"
import { getSelectedTypeCar } from "../../../stores/typeCar"
import { createCarServices, deleteCarServices, deleteCarServicesItem, getCarServices, updateCarServices } from "../../../stores/serviceRegistry"
import { UserContext } from "context/userContext";
import moment from "moment";
import InputText from "components/InputText";

const { Option } = Select;

const CarService = () => {
    const datetTimeIcon = <IconDatepicker />;
    const dateNow = moment(Date.now()).format("YYYY-MM-DD hh:mm");
    const data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0] : {};
    const fileImg = [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
    const [messageApi, contextHolder] = message.useMessage();
    const { logOut } = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [seviceTypes, setSeviceTypes] = useState([]);
    const [cars, setCar] = useState([]);
    const [carServices, setCarService] = useState([]);
    const [listCarServicesDetail, setListCarServicesDetail] = useState([]);
    const [carServiceItem, setCarServiceItem] = useState({});
    const [dateCarService, setDateCarService] = useState(dateNow);
    const [isCitizen, setIsCitizen] = useState(false);
    const [isVehicle, setIsVehicle] = useState(false);
    const [fileList, setFileList] = useState(fileImg);
    const [fileCardList, setFileCardList] = useState(fileImg);
    const [isEditCarServiceItem, seIsEditCarServiceItem] = useState(false);
    const [imgLogEdits, setImgLogEdits] = useState([]);

    const uploadButton = (
        <div className={styles["buttom-upload"]}>
            <span>
                <img src="/icon_img.png" alt="icon img"></img>
            </span>
            <span className={styles["buttom-upload-text"]}>Thêm ảnh</span>
        </div>
    );

    const handleChangeServiceType = (value) => {
        setCarServiceItem(
            {
                ...carServiceItem,
                TypeRegister: value,
                TypeRegisterPakingName: seviceTypes?.find(x => x.ID === value)?.RegisterPakingName
            }
        );
    };

    const handleChangeCarType = (value) => {
        setCarServiceItem(
            {
                ...carServiceItem,
                TypeCar: value,
                TypeCarName: cars?.find(x => x.TypeCarCode === value)?.TypeCarName
            }
        );
    };

    const handleChangeValue = (e) => {
        setCarServiceItem({ ...carServiceItem, [e.target.name]: e.target.value });
    }

    const handleChangeEdit = (value) => {
        setIsModalOpen(!isModalOpen);
        setIsEdit(true);
        const dataEdit = value.spd?.map(item => {
            return {
                ActiveDate: moment(new Date(item.ActiveDate)).format("YYYY-MM-DD hh:mm"),
                BrandCar: item.CarBrand,
                ChangeInfoCart: item.ChangeInfoCart,
                DriverName: item.DriverCarName,
                LicensePlate: item.LicensePlate,
                NameCar: item.OwnerCar,
                Service_RegisterPaking_ID: item.Service_RegisterPaking_ID,
                TypeCar: item.TypeCar,
                TypeRegister: item.TypeRegister,
                citizen_identification: item.citizen_identification,
                vehicle_registration: item.vehicle_registration,
                TypeCarName: item.TypeNameCar,
                TypeRegister: item.TypeRegisterPaking,
                DetailID: item.DetailID,
                ID: item.DetailID,
                isCitizen: false,
                isVehicle: false
            }
        })
        setListCarServicesDetail(dataEdit);
        refreshData()
    };

    const handleChangeCreate = () => {
        setIsModalOpen(!isModalOpen);
        setIsEdit(false);
        refreshData();
        setListCarServicesDetail([]);
        seIsEditCarServiceItem(false);
    };

    const loadTypeRegisterPaking = async () => {
        const resData = await getSelectedTypeRegisterPaking();
        if (resData.Status === "OK") {
            setSeviceTypes(resData.Data)
        } else {
            if (resData?.response?.status === 401) {
                return logOut();
            }
            messageApi.open({
                type: 'error',
                content: resData.Description,
            });
        }
    }

    const loadTypeCar = async (params) => {
        const resData = await getSelectedTypeCar(params);
        if (resData.Status === "OK") {
            setCar(resData.Data)
        } else {
            if (resData?.response?.status === 401) {
                return logOut();
            }
            messageApi.open({
                type: 'error',
                content: resData.Description,
            });
        }
    }

    const getListCarService = async (params) => {
        const resData = await getCarServices(params);
        if (resData.Status === "OK") {
            setCarService(resData.Data);
        } else {
            if (resData?.response?.status === 401) {
                return logOut();
            }
            messageApi.open({
                type: 'error',
                content: resData.Description,
            });
        }
    }

    const handeleDateCarService = (e) => {
        setDateCarService(e.format("YYYY-MM-DD HH:mm"));
    }

    const handlePreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const handleChangeImgCavet = ({ fileList: newFileList }) => {
        console.log(newFileList);
        if (newFileList.length > 1) {
            const imgUpload = [newFileList[1]];
            setFileList(imgUpload);
        } else {
            setFileList(newFileList);
        }
        setIsCitizen(true);
    };

    const handleChangeImgIdentityCard = ({ fileList: newFileCardList }) => {
        console.log(newFileCardList);

        if (newFileCardList.length > 1) {
            const imgUploadCard = [newFileCardList[1]];
            setFileCardList(imgUploadCard);
        } else {
            setFileCardList(newFileCardList);
        }
        setIsVehicle(true);
    };

    const handleAddData = () => {
        if (!validateCarServiceItem()) return;
        
        if (isEditCarServiceItem) {
            carServiceItem.ActiveDate = carServiceItem.ActiveDate ?? dateCarService;
            carServiceItem.fromDate = carServiceItem.fromDate ?? dateNow;
            if (listCarServicesDetail.length > 0) {
                listCarServicesDetail.map((item) => {
                    if (item.DetailID === carServiceItem.DetailID) {
                        return (
                            item.citizen_identification = fileList[0].thumbUrl ? new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "") : carServiceItem.citizen_identification,
                            item.vehicle_registration = fileCardList[0].thumbUrl ? new String(fileCardList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "") : carServiceItem.vehicle_registration,
                            item.BrandCar = carServiceItem.BrandCar,
                            item.ActiveDate = carServiceItem.ActiveDate ?? dateCarService,
                            item.fromDate = carServiceItem.fromDate ?? dateNow,
                            item.TypeCarName = carServiceItem.TypeCarName,
                            item.TypeRegister = carServiceItem.TypeRegister,
                            item.TypeCar = carServiceItem.TypeCar,
                            item.NameCar = carServiceItem.NameCar,
                            item.DriverName = carServiceItem.DriverName,
                            item.LicensePlate = carServiceItem.LicensePlate,
                            item.ID = carServiceItem.DetailID,
                            item.isCitizen = isCitizen,
                            item.isVehicle = isVehicle
                        )
                    }
                })
            }
        } else {
            carServiceItem.citizen_identification = new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "");
            carServiceItem.vehicle_registration = new String(fileCardList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "");
            carServiceItem.isCitizen = isCitizen;
            carServiceItem.isVehicle = isVehicle;
            carServiceItem.BrandCar = carServiceItem.BrandCar ?? "";
            carServiceItem.ActiveDate = dateCarService;
            carServiceItem.fromDate = dateNow;
            carServiceItem.DetailID = Math.floor(Math.random() * 100000);
            listCarServicesDetail.push(carServiceItem);
        }

        if (fileList[0].thumbUrl) {
            if (imgLogEdits.find(x => x.detailID === carServiceItem.DetailID && x.isIdentification === true)) {
                imgLogEdits.map(item => {
                    if (item.detailID === carServiceItem.DetailID && item.isIdentification === true) {
                        return (
                            item.name = fileList[0].name,
                            item.thumbUrl = fileList[0].thumbUrl,
                            item.uid = fileList[0].uid
                        )
                    }
                })
            } else {
                imgLogEdits.push(
                    {
                        isIdentification: true,
                        detailID: carServiceItem.DetailID,
                        name: fileList[0].name,
                        thumbUrl: fileList[0].thumbUrl,
                        uid: fileList[0].uid,
                    },
                )
            }
        }

        if (fileCardList[0].thumbUrl) {
            if (imgLogEdits.find(x => x.detailID === carServiceItem.DetailID && x.isRegistration === true)) {
                imgLogEdits.map(item => {
                    if (item.detailID === carServiceItem.DetailID && item.isRegistration === true) {
                        return (
                            item.name = fileCardList[0].name,
                            item.thumbUrl = fileCardList[0].thumbUrl,
                            item.uid = fileCardList[0].uid
                        )
                    }
                })
            } else {
                imgLogEdits.push(
                    {
                        isRegistration: true,
                        detailID: carServiceItem.DetailID,
                        name: fileCardList[0].name,
                        thumbUrl: fileCardList[0].thumbUrl,
                        uid: fileCardList[0].uid,
                    }
                )
            }
        }
        setListCarServicesDetail(listCarServicesDetail);
        seIsEditCarServiceItem(false);
        refreshData();
    }

    const handeleDeleteCarService = async (event) => {
        const paramDelete = {
            Service_RegisterPakingID: event
        }
        const resData = await deleteCarServices(paramDelete);
        if (resData.Status === "OK") {
            messageApi.open({
                type: 'success',
                content: "Xoá dịch vụ xe thành công",
            });

            reloadData();
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    const handeleDeleteCarServiceItem = async (event) => {
        if (isEdit) {
            const paramDelete = {
                Service_RegisterPaking_Detail_ID: event
            }
            const resData = await deleteCarServicesItem(paramDelete);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Xoá đăng kí xe thành công",
                });

                const listCarServices = [];
                listCarServicesDetail.forEach(item => {
                    if (item.DetailID !== event) {
                        listCarServices.push(item);
                    }
                });
                setListCarServicesDetail(listCarServices);
                reloadData();
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        } else {
            const listCarServices = [];
            listCarServicesDetail.forEach(item => {
                if (item.DetailID !== event) {
                    listCarServices.push(item);
                }
            });
            setListCarServicesDetail(listCarServices);
        }
    }

    const handeleUpdateCarServiceItem = (event) => {
        const data = {};
        listCarServicesDetail.forEach((item) => {
            if (item.DetailID === event) (
                data.DetailID = event,
                data.TypeCarName = item.TypeCarName,
                data.TypeRegister = item.TypeRegister,
                data.TypeCar = item.TypeCar,
                data.NameCar = item.NameCar,
                data.DriverName = item.DriverName,
                data.LicensePlate = item.LicensePlate,
                data.BrandCar = item.BrandCar,
                data.ActiveDate = moment(new Date(item.ActiveDate)).format("YYYY-MM-DD HH:mm"),
                data.citizen_identification = item.citizen_identification,
                data.vehicle_registration = item.vehicle_registration
            )
        });

        const imgCavet = isEdit
            ? fileImg.map(item => {
                return {
                    ...item,
                    url: data.citizen_identification
                };

            })
            : [imgLogEdits.find(x => x.detailID === event && x.isIdentification === true)];
        setFileList(imgCavet);

        const imgRegistration = isEdit
            ? fileImg.map(item => {
                return {
                    ...item,
                    url: data.vehicle_registration
                };

            })
            : [imgLogEdits.find(x => x.detailID === event && x.isRegistration === true)];
        setFileCardList(imgRegistration);

        setCarServiceItem(data);
        seIsEditCarServiceItem(true);
    }

    const refreshData = () => {
        let data = {}
        data.TypeRegister = null;
        data.TypeCar = null;
        data.NameCar = "";
        data.DriverName = "";
        data.LicensePlate = "";
        data.BrandCar = "";
        data.ActiveDate = dateNow;
        data.citizen_identification = null;
        data.vehicle_registration = null;
        setIsCitizen(false);
        setIsVehicle(false);
        setFileList(fileImg);
        setFileCardList(fileImg);
        setDateCarService(dateNow);
        setCarServiceItem(data);
    }

    const saveCarService = async () => {
        if (listCarServicesDetail.length < 1) {
            return messageApi.open({
                type: 'error',
                content: "Vui tạo danh sách đăng kí",
            });
        }

        if (isEdit) {
            const resData = await updateCarServices(listCarServicesDetail);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Cập nhật dịch vụ xe thành công",
                });
                setIsModalOpen(!isModalOpen);
                reloadData();
                setListCarServicesDetail([]);
                setImgLogEdits([]);
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        } else {
            const dateSave = {
                ProjectID: data.ProjectID,
                CustomerID: data.CustomerID,
                ContactName: data.FirstName,
                ContactPhone: data.DienThoaiKH,
                ListItemDetail: listCarServicesDetail
            }
            const resData = await createCarServices(dateSave);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Đăng kí dịch vụ xe thành công",
                });
                setIsModalOpen(!isModalOpen);
                reloadData();
                setListCarServicesDetail([]);
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        }
    }

    const validateCarServiceItem = () => {
        if (!carServiceItem.TypeRegister) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn hình thức đăng kí",
            });
            return false;
        }

        if (!carServiceItem.TypeCar) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn loại xe",
            });
            return false;
        }

        if (!carServiceItem.NameCar) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập tên chủ xe",
            });
            return false;
        }

        if (!carServiceItem.DriverName) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập tên tài xé",
            });
            return false;
        }

        if (!carServiceItem.LicensePlate) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập biển số",
            });
            return false;
        }

        if (!fileList[0].thumbUrl && !isEdit) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn hình căn cước công dân",
            });

            return false;
        }

        if (!fileCardList[0].thumbUrl && !isEdit) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn hình căn cước công dân",
            });

            return false;
        }
        return true;
    }

    const reloadData = () => {
        const params = {
            CustomerID: data.CustomerID,
            ProjectID: data.ProjectID,
            pageNumber: 1,
            pageSize: 10,
            searchText: ""
        }

        const paramCars = {
            ProjectID: data.ProjectID,
            pageNumber: 1,
            pageSize: 100,
            searchText: ""
        }
        loadTypeRegisterPaking();
        loadTypeCar(paramCars);
        getListCarService(params);
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ xe</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={() => handleChangeCreate()}>Đăng ký</button>
                </div>
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Số hiệu</th>
                            <th className={styles["header-item"]}>Ngày đăng ký</th>
                            <th className={styles["header-item"]}>Người liên hệ</th>
                            <th className={styles["header-item"]}>Điện thoại liên hệ</th>
                            <th className={styles["header-item"]}>Hình thức đăng ký</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        {
                            carServices?.map((item, index) => {
                                return (
                                    <tr key={index} className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>{item.Num}</td>
                                        <td className={styles["content-item-code"]}>{moment(new Date(item.CreateWhen)).format("DD-MM-YYYY mm:HH")}</td>
                                        <td className={styles["content-item-period-car"]}>{item?.NameContact}</td>
                                        <td className={styles["content-item-month"]}>{item?.PhoneContact}</td>
                                        <td className={styles["content-item-status"]}>
                                            <span className={item.TypeRegisterPaking ? styles["status-success"] : (item?.TypeRegisterPaking ? styles["status-load"] : styles["status-erro"])}>{item?.spd ? item?.spd[0].TypeRegisterPakingName : ""}</span>
                                        </td>
                                        <td className={styles["content-item-action-car"]}>
                                            <span className={styles["icon-detail"]} onClick={() => handleChangeEdit(item)}>
                                                <img src="/Icon_eye.png" alt="eye" />
                                            </span>
                                            <span className={styles["icon-delete"]} onClick={() => handeleDeleteCarService(item.ID)}>
                                                <img src="/Icon_delete.png" alt="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className={styles["content-table-mobile"]}>
                {
                    carServices?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles["table-item-mobile"]}>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Số hiệu</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{item.Num}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Ngày đăng ký</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{moment(new Date(item.CreateWhen)).format("DD-MM-YYYY mm:HH")}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Trạng thái</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span className={item.TypeRegisterPaking ? styles["status-success"] : (item?.TypeRegisterPaking ? styles["status-load"] : styles["status-erro"])}>
                                                {item?.spd ? item?.spd[0].TypeRegisterPakingName : ""}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Người liên hệ</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{item?.NameContact}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Số điện thoại ngừoi liên hệ</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{item?.PhoneContact}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span> Tùy chọn</span>
                                        </div>
                                        <div className={styles["mobile-active"]}>
                                            <div className={styles["status"]} onClick={() => handleChangeEdit(item)}>
                                                <img src="/Icon_eye.png" alt="eye" />
                                            </div>
                                            <div className={styles["data-download"]}>
                                                <img src="/Icon_delete.png" alt="delete" onClick={() => handeleDeleteCarService(item.ID)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["line-mobile"]}></div>
                            </div>
                        )
                    })
                }
            </div>

            <Modal
                open={isModalOpen}
                width={1100}
                footer={null}
                closable={false}
            >
                <div className={styles["model-header"]}>
                    <div className={styles["model-header-close"]}>
                        <div className={styles["model-title"]}>
                            <div className={styles["model-title-text"]}>
                                <span onClick={() => setIsModalOpen(!isModalOpen)} >
                                    <img src="/icon_back.png" alt="" />
                                </span>
                                <span>
                                    {isEdit ?
                                        "Chỉnh sửa dịch vụ:"
                                        :
                                        "Đăng ký dịch vụ:"
                                    }
                                </span>
                            </div>

                            <div className={styles["select"]}>
                                <div className={styles["form-select-car-service"]}>
                                    <Select
                                        placeholder="Hình thức đăng kí"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        onChange={handleChangeServiceType}
                                        bordered={false}
                                        value={carServiceItem.TypeRegister}
                                    >
                                        {seviceTypes.length > 0 &&
                                            seviceTypes.map((item) => {
                                                return (
                                                    <Option key={item?.ID} value={item?.ID}>
                                                        {item?.RegisterPakingName}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className={styles["model-close"]} onClick={() => setIsModalOpen(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close" />
                            <span className={styles["model-close-text"]}>Đóng</span>
                        </div>
                    </div>
                </div>

                <div className={styles["model-container-car-service"]}>
                    <div className={styles["item-container"]}>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Loại xe <span className={styles["compulsory"]}>*</span></div>
                                <div className={styles["form-select-car-service-full"]}>
                                    <Select
                                        placeholder="Chọn loại xe"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        onChange={handleChangeCarType}
                                        bordered={false}
                                        value={carServiceItem.TypeCar}
                                    >
                                        {cars.length > 0 &&
                                            cars.map((item) => {
                                                return (
                                                    <Option key={item?.TypeCarCode} value={item?.TypeCarCode}>
                                                        {item?.TypeCarName}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Tên chủ xe <span className={styles["compulsory"]}>*</span></div>
                                <InputText
                                    value={carServiceItem?.NameCar}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="NameCar"
                                    className={styles["input-data-content"]}
                                    placeholder="Nhập tên chủ xe..."
                                    type="text"
                                />
                            </div>

                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Tên tài xế <span className={styles["compulsory"]}>*</span></div>
                                <InputText
                                    value={carServiceItem?.DriverName}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="DriverName"
                                    className={styles["input-data-content"]}
                                    placeholder="Nhập tên tài xế..."
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Biển số xe <span className={styles["compulsory"]}>*</span></div>
                                <InputText
                                    value={carServiceItem?.LicensePlate}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="LicensePlate"
                                    className={styles["input-data-content"]}
                                    placeholder="Nhập biển số xe..."
                                    type="text"
                                />
                            </div>

                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Hiệu xe</div>
                                <InputText
                                    value={carServiceItem?.BrandCar}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="BrandCar"
                                    className={styles["input-data-content"]}
                                    placeholder="Nhập hiệu xe"
                                    type="text"
                                />
                            </div>

                            <div className={styles["item-data"]}>
                                <div className={styles["lable-data"]}>Thời gian bắt đầu hiệu lực <span className={styles["compulsory"]}>*</span></div>
                                <DatePicker
                                    defaultValue={moment(dateCarService)}
                                    value={moment(dateCarService)}
                                    className={styles["date-picker-car-service"]}
                                    suffixIcon={datetTimeIcon}
                                    showTime={{ format: "HH:mm" }}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder="Chọn thời gian hiệu lực"
                                    onChange={(e) => handeleDateCarService(e)}
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <div className={styles["lable-data"]}>Hình đăng ký xe
                                    <span className={styles["compulsory"]}>*</span>
                                    <span className={styles["lable-data-note"]}>
                                        (Lưu ý: Hình phải rõ màu xe)
                                    </span>
                                </div>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChangeImgCavet}
                                >
                                    {fileList.length < 2 ? uploadButton : null}
                                </Upload>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <div className={styles["lable-data"]}>Hình căn cước/ CMND
                                    <span className={styles["compulsory"]}>*</span>
                                    <span className={styles["lable-data-note"]}>
                                        (Lưu ý: Hình ảnh phải rõ nét không cắt xén)
                                    </span>
                                </div>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileCardList}
                                    onPreview={handlePreview}
                                    onChange={handleChangeImgIdentityCard}
                                >
                                    {fileCardList.length < 2 ? uploadButton : null}
                                </Upload>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-data-button"]} type="button" onClick={handleAddData}>
                                    Thêm vào danh sách
                                </button>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <div className={styles["lable-data"]}>Danh sách xe đăng ký</div>
                                <table>
                                    <tbody>
                                        <tr className={styles["table-header"]}>
                                            <th className={styles["header-item"]}>Loại xe</th>
                                            <th className={styles["header-item"]}>Hiệu xe</th>
                                            <th className={styles["header-item"]}>Biển số xe</th>
                                            <th className={styles["header-item"]}>Tên chủ xe</th>
                                            <th className={styles["header-item"]}>Tên tài xế</th>
                                            <th className={styles["header-item"]}>Ngày hiệu lực</th>
                                            <th className={styles["header-item"]}>Tùy chọn</th>
                                        </tr>
                                        {
                                            listCarServicesDetail?.map((item, index) => {
                                                return (
                                                    <tr key={index} className={styles["table-content"]}>
                                                        <td className={styles["content-item-code"]}>{item?.TypeCarName}</td>
                                                        <td className={styles["content-item-period"]}>{item?.BrandCar}</td>
                                                        <td className={styles["content-item-month"]}>{item?.LicensePlate}</td>
                                                        <td className={styles["content-item-year"]}>{item?.NameCar}</td>
                                                        <td className={styles["content-item-debt"]}>{item?.DriverName}</td>
                                                        <td className={styles["content-item-debt"]}>{item?.ActiveDate}</td>
                                                        <td className={styles["content-item-action-car"]}>
                                                            <span className={styles["icon-detail"]}>
                                                                <img src="/icon_tb_edit.png" alt="eye" onClick={() => handeleUpdateCarServiceItem(item?.DetailID)}/>
                                                            </span>
                                                            <span className={styles["icon-delete"]} onClick={() => handeleDeleteCarServiceItem(item?.DetailID)}>
                                                                <img src="/icon_tb_delete.png" alt="delete" />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div className={styles["content-table-mobile"]}>
                                    {
                                        listCarServicesDetail?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={styles["table-item-mobile"]}>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["date-name"]}>
                                                                <span>{item.TypeCarName} .  {item.BrandCar} . {item.LicensePlate}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Ngày hiệu lực</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item.ActiveDate}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Tên chủ xe</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item.NameCar}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Tên tài xế</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item.DriverName}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Tùy chọn</span>
                                                            </div>
                                                            <div className={styles["mobile-active"]}>
                                                                <div className={styles["status"]} onClick={() => handeleUpdateCarServiceItem(item?.DetailID)}>
                                                                    <img src="/icon_tb_edit.png" alt="eye" />
                                                                </div>
                                                                <div className={styles["data-download"]}>
                                                                    <img src="/icon_tb_delete.png" alt="delete" onClick={() => handeleDeleteCarServiceItem(item?.DetailID)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles["line-mobile"]}></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-save"]}>
                                    <span className={styles["save-text"]} onClick={() => saveCarService()}>Lưu thông tin</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CarService;
