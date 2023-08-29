import { DatePicker, Modal, Select, Upload, message } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "context/userContext";
import moment from "moment";
import InputText from "components/InputText";
import {
    createOverTime,
    deleteOverTime,
    getListHourType,
    getlistBlock,
    getlistFoor,
    getlistOverTime,
    getlistPremises,
    udpateOverTime
} from "../../../stores/overTime";
import { ConvertDateTime } from "@function/Funcion";

const { Option } = Select;

const OvertimeService = () => {
    const dateNow = moment(Date.now()).format("YYYY-MM-DD hh:mm");
    const deleteIcon = <IconDatepicker />;
    const data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0] : {};
    const [messageApi, contextHolder] = message.useMessage();
    const { logOut } = useContext(UserContext);
    const fileImg = [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
    const uploadButton = (
        <div className={styles["buttom-upload"]}>
            <span>
                <img src="/icon_img.png" alt="icon img"></img>
            </span>
            <span className={styles["buttom-upload-text"]}>Thêm ảnh</span>
        </div>
    );

    const [overTimeServiceItem, setOverTimeServiceItem] = useState({});
    const [listOverTimeServicesDetail, setListOverTimeServicesDetail] = useState([]);
    const [fileList, setFileList] = useState(fileImg);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [dateFrom, setDateFrom] = useState(dateNow);
    const [dateTo, setDateTo] = useState(dateNow);
    const [hourTypes, setHourType] = useState([]);
    const [premises, setPremises] = useState([]);
    const [floors, setFloor] = useState([]);
    const [blocks, setBlock] = useState([]);

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

    const handleChangeImg = ({ fileList: newFileList }) => {
        if (newFileList.length > 1) {
            const imgUpload = [newFileList[1]];
            setFileList(imgUpload);
        } else {
            setFileList(newFileList);
        }
    };

    const handeleDateFrom = (e) => {
        overTimeServiceItem.Time_from = e.format("YYYY-MM-DD HH:mm");
        setDateFrom(e.format("YYYY-MM-DD HH:mm"));
    }

    const handeleDateTo = (e) => {
        overTimeServiceItem.Time_to = e.format("YYYY-MM-DD HH:mm");
        setDateTo(e.format("YYYY-MM-DD HH:mm"));
    }

    const handleChangeValue = (e) => {
        setOverTimeServiceItem({ ...overTimeServiceItem, [e.target.name]: e.target.value });
    }

    const handleChangeHourType = (value) => {
        setOverTimeServiceItem({ ...overTimeServiceItem, Type_Register_After_Working_Hour: value });
    };

    const handleChangePremises = (value) => {
        setOverTimeServiceItem({ ...overTimeServiceItem, Unit: value });
    };

    const handleChangeFloor = (value) => {
        setOverTimeServiceItem({ ...overTimeServiceItem, Floor: value });
    };

    const handleChangeBlock = (value) => {
        setOverTimeServiceItem({ ...overTimeServiceItem, Block: value });
        getFloor(value);
        overTimeServiceItem.Floor = null;
    };

    const handleChangeEdit = (value) => {
        overTimeServiceItem.Block = value.MaKN;
        overTimeServiceItem.Floor = value.Floor;
        overTimeServiceItem.Unit = value.Unit;
        overTimeServiceItem.Type_Register_After_Working_Hour = value.Type_Register_After_Working_Hour;
        overTimeServiceItem.ProjectID = value.ProjectID;
        overTimeServiceItem.ID = value.ID;
        overTimeServiceItem.StatusID = value.StatusID;
        overTimeServiceItem.CustomerID = value.CustomerID;
        overTimeServiceItem.Time_from = value.Time_from;
        overTimeServiceItem.Time_to = value.Time_to;
        overTimeServiceItem.Request_In_Detail = value.Request_In_Detail;
        overTimeServiceItem.File = value.File;

        const img = fileImg.map(item => {
            return {
                ...item,
                url: value.Url
            };

        });
        setFileList(img);

        setOverTimeServiceItem(overTimeServiceItem);
        setIsModalOpen(!isModalOpen);
        setIsEdit(true);
    };

    const handleChangeDelete = async (event) => {
        const paramDelete = {
            ID: event
        }
        const resData = await deleteOverTime(paramDelete);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Xoá dịch vụ làm thêm giờ thành công",
                });
                refreshData();
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
    }

    const handleChangeCreate = () => {
        refreshData();
        setIsModalOpen(!isModalOpen);
        setIsEdit(false);
    };

    const saveCarService = async () => {
        if (!validateData()) return;

        if (isEdit) {
            if (fileList[0].thumbUrl) {
                overTimeServiceItem.File = new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "");
                overTimeServiceItem.FileType = fileList[0].thumbUrl.toString().substring(fileList[0].thumbUrl.toString().indexOf('/') + 1, fileList[0].thumbUrl.toString().indexOf(';base64'));
            }

            const resData = await udpateOverTime(overTimeServiceItem);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Cập nhật dịch vụ làm thêm giờ thành công",
                });
                setIsModalOpen(!isModalOpen);
                refreshData();
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        } else {
            if (fileList[0].thumbUrl) {
                overTimeServiceItem.File = new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "");
                overTimeServiceItem.FileType = fileList[0].thumbUrl.toString().substring(fileList[0].thumbUrl.toString().indexOf('/') + 1, fileList[0].thumbUrl.toString().indexOf(';base64'));
            }
            overTimeServiceItem.ProjectID = data.ProjectID;
            overTimeServiceItem.DateRequest = moment(new Date()).format("YYYY-MM-DD hh:mm");
            overTimeServiceItem.Time_from = dateFrom;
            overTimeServiceItem.Time_to = dateTo;
            overTimeServiceItem.CustomerID = data.CustomerID;

            const resData = await createOverTime(overTimeServiceItem);

            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Đăng kí dịch vụ làm thêm giờ thành công",
                });
                setIsModalOpen(!isModalOpen);
                refreshData();
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        }
    }

    const validateData = () => {
        if (!overTimeServiceItem.Block) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn khối nhà",
            });
            return false;
        }

        if (!overTimeServiceItem.Floor) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn tầng",
            });
            return false;
        }

        if (!overTimeServiceItem.Unit) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn mặt bằng",
            });
            return false;
        }

        if (!overTimeServiceItem.Type_Register_After_Working_Hour) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn dịch vụ làm thêm giờ",
            });
            return false;
        }

        if (!overTimeServiceItem.Type_Register_After_Working_Hour) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn dịch vụ làm thêm giờ",
            });
            return false;
        }

        if (!overTimeServiceItem.Request_In_Detail) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập ghi chú",
            });
            return false;
        }

        return true;
    }

    const getHourType = async () => {
        const resData = await getListHourType();
        if (resData.Status === "OK") {
            setHourType(resData.Data);
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

    const getPremises = async () => {
        const params = {
            CustomerPhone: "0902090050",
            pageNumber: 1,
            pageSize: 20,
            searchText: ""
        }
        const resData = await getlistPremises(params);
        if (resData.Status === "OK") {
            setPremises(resData.Data);
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

    const getFloor = async (event) => {
        const params = {
            BlockID: event,
            pageNumber: 1,
            pageSize: 20,
            searchText: ""
        }
        const resData = await getlistFoor(params);
        if (resData.Status === "OK") {
            setFloor(resData.Data);
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

    const getBlock = async () => {
        const params = {
            BuildingId: data.ProjectID,
            pageNumber: 1,
            pageSize: 20,
            searchText: ""
        }
        const resData = await getlistBlock(params);
        if (resData.Status === "OK") {
            setBlock(resData.Data);
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

    const getOverTime = async () => {
        const params = {
            CustomerID: data.CustomerID,
            ProjectID: data.ProjectID,
            pageNumber: 1,
            pageSize: 20,
            searchText: ""
        }
        const resData = await getlistOverTime(params);
        if (resData.Status === "OK") {
            setListOverTimeServicesDetail(resData.Data);
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

    const refreshData = () => {
        let data = {}
        data.Block = null;
        data.CustomerID = null;
        data.DateRequest = dateNow;
        data.FileType = "";
        data.Floor = null;
        data.ProjectID = null;
        data.Time_from = dateNow;
        data.Time_to = dateNow;
        data.Type_Register_After_Working_Hour = null;
        data.Unit = null;
        data.Request_In_Detail = "";
        setOverTimeServiceItem(data)
        getOverTime();
        setFileList(fileImg);
        setDateTo(dateNow);
        setDateFrom(dateNow);
    }

    const reloadData = () => {
        getHourType();
        getPremises();
        getBlock();
        getOverTime();
        setFileList(fileImg);
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ làm thêm giờ</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={() => handleChangeCreate()}>Đăng ký</button>
                </div>
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Ngày yêu cầu</th>
                            <th className={styles["header-item"]}>Từ ngày</th>
                            <th className={styles["header-item"]}>Đến ngày</th>
                            <th className={styles["header-item"]}>Tầng</th>
                            <th className={styles["header-item"]}>Phòng</th>
                            <th className={styles["header-item"]}>Loại</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        {
                            listOverTimeServicesDetail?.map((item, index) => {
                                return (
                                    <tr key={index} className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>{ConvertDateTime(item.DateRequest)}</td>
                                        <td className={styles["content-item-code"]}>{ConvertDateTime(item.Time_from)}</td>
                                        <td className={styles["content-item-code"]}>{ConvertDateTime(item.Time_to)}</td>
                                        <td className={styles["content-item-code"]}>{item.FloorName}</td>
                                        <td className={styles["content-item-code"]}>{item.UnitName}</td>
                                        <td className={styles["content-item-code"]}>{item.Type_Name}</td>
                                        <td className={styles["content-item-status"]}>
                                            <span className={item.Type_Name === 1 ? styles["status-success"] : (item.Type_Name === 0 ? styles["status-load"] : styles["status-erro"])}>{item.StatusName}</span>
                                        </td>
                                        <td className={styles["content-item-action-car"]}>
                                            <span className={styles["icon-detail"]} onClick={() => handleChangeEdit(item)}>
                                                <img src="/Icon_eye.png" alt="eye" />
                                            </span>
                                            <span className={styles["icon-delete"]} onClick={() => handleChangeDelete(item.ID)}>
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
                    listOverTimeServicesDetail?.map((item, index) => {
                        <div key={index}>
                            <div className={styles["table-item-mobile"]}>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Ngày yêu cầu</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{ConvertDateTime(item.DateRequest)}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Từ ngày</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{ConvertDateTime(item.Time_from)}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Đến ngày</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{ConvertDateTime(item.Time_to)}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Tầng</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{item.FloorName}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Phòng</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{item.UnitName}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Loại</span>
                                    </p>
                                    <p className={styles["data-code"]}>
                                        <span>{item.Type_Name}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span>Trạng thái</span>
                                    </p>
                                    <p className={item.Type_Name === 1 ? styles["status-success"] : (item.Type_Name === 0 ? styles["status-load"] : styles["status-erro"])}>
                                        <span>{item.StatusName}</span>
                                    </p>
                                </div>
                                <div className={styles["row-item-data"]}>
                                    <p className={styles["status"]}>
                                        <span> Tùy chọn</span>
                                    </p>
                                    <p className={styles["mobile-active"]}>
                                        <p className={styles["status"]} onClick={() => handleChangeEdit(item)}>
                                            <img src="/Icon_eye.png" alt="eye" />
                                        </p>
                                        <p className={styles["data-download"]}>
                                            <img src="/Icon_delete.png" alt="delete" />
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className={styles["line-mobile"]}></div>
                        </div>
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
                            <div className={styles["model-title-text-bill"]}>
                                <span onClick={() => setIsModalOpen(!isModalOpen)} >
                                    <img src="/icon_back.png" alt="" />
                                </span>
                                <span>
                                    {
                                        isEdit ?
                                            "Chi tiết dịch vụ làm thêm giờ"
                                            :
                                            "Đăng ký dịch vụ làm thêm giờ"
                                    }
                                </span>
                            </div>
                        </div>
                        <div className={styles["model-close"]} onClick={() => setIsModalOpen(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close" />
                            <span className={styles["model-close-text"]}>Đóng</span>
                        </div>
                    </div>
                </div>

                <div className={styles["model-container"]}>
                    <div className={styles["item-container"]}>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Khối nhà <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        placeholder="Chọn khối nhà"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        bordered={false}
                                        value={overTimeServiceItem.Block}
                                        onChange={handleChangeBlock}
                                    >
                                        {blocks.length > 0 &&
                                            blocks.map((item) => {
                                                return (
                                                    <Option key={item?.Code} value={item?.Code}>
                                                        {item?.NameBlockHouse}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Tầng <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        placeholder="Chọn tầng"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        bordered={false}
                                        value={overTimeServiceItem.Floor}
                                        onChange={handleChangeFloor}
                                    >
                                        {floors.length > 0 &&
                                            floors.map((item) => {
                                                return (
                                                    <Option key={item?.Code} value={item?.Code}>
                                                        {item?.NameFloor}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Mặt bằng <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        placeholder="Chọn mặt bằng"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        bordered={false}
                                        value={overTimeServiceItem.Unit}
                                        onChange={handleChangePremises}
                                    >
                                        {premises.length > 0 &&
                                            premises.map((item) => {
                                                return (
                                                    <Option key={item?.Code} value={item?.Code}>
                                                        {item?.NumberCodeUnit}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Dịch vụ làm thêm giờ <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        placeholder="Chọn dịch vụ"
                                        style={{ width: '100%', textAlign: 'left' }}
                                        bordered={false}
                                        value={overTimeServiceItem.Type_Register_After_Working_Hour}
                                        onChange={handleChangeHourType}
                                    >
                                        {hourTypes.length > 0 &&
                                            hourTypes.map((item) => {
                                                return (
                                                    <Option key={item?.ID} value={item?.ID}>
                                                        {item?.Type_Name}
                                                    </Option>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian bắt đầu <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker
                                    defaultValue={moment(dateFrom)}
                                    value={moment(overTimeServiceItem.Time_from)}
                                    format="YYYY-MM-DD HH:mm"
                                    className={styles["date-picker-data"]}
                                    suffixIcon={deleteIcon}
                                    showTime
                                    onChange={(e) => handeleDateFrom(e)}
                                />
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian kết thúc <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker
                                    defaultValue={moment(dateTo)}
                                    value={moment(overTimeServiceItem.Time_to)}
                                    format="YYYY-MM-DD HH:mm"
                                    className={styles["date-picker-data"]}
                                    suffixIcon={deleteIcon}
                                    showTime
                                    onChange={(e) => handeleDateTo(e)}
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["container-data"]}>
                                <div className={styles["item-data-full"]}>
                                    <div className={styles["lable-data"]}>Hình đăng ký
                                        <span className={styles["lable-data-note"]}>
                                            (Lưu ý: Hình phải rõ)
                                        </span>
                                    </div>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChangeImg}
                                    >
                                        {fileList.length < 2 ? uploadButton : null}
                                    </Upload>
                                </div>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Ghi chú <span className={styles["compulsory"]}>*</span></p>
                                <InputText
                                    value={overTimeServiceItem.Request_In_Detail}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="Request_In_Detail"
                                    className={styles["input-data-content"]}
                                    placeholder="Vui lòng nhập ghi chú nếu có..."
                                    type="text"
                                />
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

export default OvertimeService;
