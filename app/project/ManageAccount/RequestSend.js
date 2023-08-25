import { DatePicker, Modal, Upload, message } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useContext, useEffect, useState } from "react";
import { CreateRequest, UpdateRequest, getRequests } from "../../../stores/request";
import moment from "moment";
import { ConvertDateTime } from "@function/Funcion";
import InputText from "components/InputText";
import { UserContext } from "context/userContext";

const { RangePicker } = DatePicker;

const RequestSend = () => {
    const dateFromNow = moment(new Date(Date.now()).setMonth(new Date().getMonth() - 1)).format("YYYY-MM-DD hh:mm");
    const dateToNow = moment(Date.now()).format("YYYY-MM-DD hh:mm");
    const data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0] : {};
    const datetTimeIcon = <IconDatepicker />;
    const listfile = [
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
    ]
    const [fileList, setFileList] = useState(listfile);
    const uploadButton = (
        <div className={styles["buttom-upload"]}>
            <span>
                <img src="/icon_img.png" alt="icon img"></img>
            </span>
            <span className={styles["buttom-upload-text"]}>Thêm ảnh</span>
        </div>
    );

    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [requests, setRequest] = useState([]);
    const [requestItem, setRequestItem] = useState({});
    const [dateFrom, setDateFrom] = useState(dateFromNow);
    const [dateTo, setDateTo] = useState(dateToNow);
    const [dateRequest, setDateRequest] = useState(dateToNow);
    const { logOut } = useContext(UserContext);

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

    const handleChangeValue = (e) => {
        setRequestItem({ ...requestItem, [e.target.name]: e.target.value });
    }

    const handleChangeEdit = (value) => {
        console.log(value);
        setIsModalOpen(!isModalOpen);
        setIsEdit(true);
        
        value.NgayYC = moment(new Date(value?.NgayYC)).format("YYYY-MM-DD hh:mm");
        value.TieuDe = value.TieuDe ?? "";
        value.NoiDung = value.NoiDung ?? "";

        const dataImg = fileList.map(item => {
            return {
                ...item,
                url: value.HinhAnh
            }
        });
        setDateRequest(value.NgayYC);
        setFileList(dataImg);
        setRequestItem(value);
    };

    const handleChangeCreate = () => {
        const data = {
            TieuDe: "",
            NgayYC: dateToNow,
            NoiDung: ""
        }
        setRequestItem(data);
        setFileList(listfile);
        setIsModalOpen(!isModalOpen);
        setIsEdit(false);
    };

    const handleChangeDateTime = async (value) => {
        const fom = "";
        const to = "";

        if (value) {
            fom = value[0].format("YYYY-MM-DD hh:mm");
            to = value[1].format("YYYY-MM-DD hh:mm");
        } else {
            fom = dateFromNow;
            to = dateToNow;
        }
        setDateFrom(fom);
        setDateTo(to);

        const params = {
            CustomerID: data.CustomerID,
            DateFrom: dateFrom,
            DateTo: dateTo,
            pageNumber: 1,
            pageSize: 10,
            searchText: ""
        }
        await getRequest(params);
    }

    const getRequest = async (params) => {
        const resData = await getRequests(params);
        if (resData.Status === "OK") {
            setRequest(resData.Data);
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

    const handeleDateRequest = (e) => {
        setDateRequest(e.format("YYYY-MM-DD HH:mm"));
    }

    const saveRequest = async () => {
        if (!validate()) return;

        const dateSave = {
            ImagesInformation: [
                {
                    base64String: new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "")
                }
            ],
            RequestsInformation: {
                TowerId: data.ProjectID,
                ContractId: data.TN[0]?.MB[0]?.MaMB,
                Title: requestItem.TieuDe,
                Content: requestItem.NoiDung,
                TimeContact: moment(new Date(dateRequest)).format("MM/DD/YYYY hh:mm"),
                UserContact: data.FirstName,
                PhoneContact: data.DienThoaiKH
            }
        }

        const resData = await CreateRequest(dateSave);
        if (resData.Status === "OK") {
            messageApi.open({
                type: 'success',
                content: "Tạo yêu cầu thành công",
            });
            setIsModalOpen(!isModalOpen);
            handleChangeDateTime();
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    const updateRequest = async () => {
        if (!validate()) return;

        const dateSave = {
            Content: requestItem.NoiDung,
            RequestId: requestItem.ID,
            Img: new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, "")
        }

        const resData = await UpdateRequest(dateSave);
        if (resData.Status === "OK") {
            messageApi.open({
                type: 'success',
                content: "Chỉnh sửa yêu cầu thành công",
            });
            setIsModalOpen(!isModalOpen);
            handleChangeDateTime();
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    const validate = () => {
        if (!requestItem.TieuDe) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập tiêu đề",
            });
            return false;
        }

        if (!dateRequest) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn ngày yêu cầu",
            });
            return false;
        }

        if (!fileList[0].thumbUrl) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn hình ảnh yêu cầu",
            });
            return false;
        }

        return true;
    }

    useEffect(() => {
        async function fetchData() {
            const params = {
                CustomerID: data.CustomerID,
                DateFrom: dateFrom,
                DateTo: dateTo,
                pageNumber: 1,
                pageSize: 10,
                searchText: ""
            }
            getRequest(params);
        }
        fetchData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Danh sách yêu cầu</div>

                <div className={styles["content-button-bill"]}>
                    <button className={styles["content-button-calendar"]}>
                        <RangePicker
                            defaultValue={[moment(dateFrom), moment(dateTo)]}
                            className={styles["date-picker-data"]}
                            suffixIcon={datetTimeIcon}
                            placeholder="Chọn ngày"
                            style={{ border: '0px', backgroundColor: '#fff' }}
                            showTime={{ format: "HH:mm" }}
                            format="YYYY-MM-DD HH:mm"
                            onChange={(e) => handleChangeDateTime(e)}
                        />
                    </button>
                </div>

                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={() => handleChangeCreate()}>Thêm yêu cầu</button>
                </div>
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Thời gian yêu cầu</th>
                            <th className={styles["header-item"]}>Loại yêu cầu</th>
                            <th className={styles["header-item"]}>Nội dung</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        {
                            requests?.map((item, index) => {
                                return (
                                    <tr key={index} className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>{ConvertDateTime(item.NgayYC)}</td>
                                        <td className={styles["content-item-code"]}>{item.TieuDe}</td>
                                        <td className={styles["content-item-code"]}>{item.NoiDung}</td>
                                        <td className={styles["content-item-status"]}>
                                            <span className={item.MaTT === 1 ? styles["status-success"] : (item.MaTT === 2 ? styles["status-load"] : styles["status-erro"])}>{item.TenTT}</span>
                                        </td>
                                        <td className={styles["content-item-action-car"]}>
                                            <span className={styles["icon-detail"]} onClick={() => handleChangeEdit(item)}>
                                                <img src="/Icon_eye.png" alt="eye" />
                                            </span>
                                            {/* <span className={styles["icon-delete"]}>
                                                <img src="/Icon_delete.png" alt="delete" />
                                            </span> */}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className={styles["content-table-mobile"]}>
                {
                    requests?.map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div className={styles["table-item-mobile"]}>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>{ConvertDateTime(item.NgayYC)}</span>
                                            </p>
                                            <p className={styles["data-code"]}>
                                                <span>{item.TieuDe}</span>
                                            </p>
                                        </div>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Trạng thái</span>
                                            </p>
                                            <p className={item.MaTT === 1 ?
                                                styles["data-status-succes"]
                                                :
                                                (item.MaTT === 2 ? styles["data-status-load"] : styles["data-status-error"])}>
                                                <span>{item.TenTT}</span>
                                            </p>
                                        </div>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Nội dung</span>
                                            </p>
                                            <p className={styles["data-code"]}>
                                                <span>{item.NoiDung}</span>
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
                                                {/* <p className={styles["data-download"]}>
                                                    <img src="/Icon_delete.png" alt="delete" />
                                                </p> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles["line-mobile"]}></div>
                                </div>
                            </>
                        );
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
                                        "Chỉnh sửa yêu cầu"
                                        :
                                        "Thêm mới yêu cầu"
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
                                <p className={styles["lable-data"]}>Tiêu đề yêu cầu <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home-input"]}>
                                    <InputText
                                        value={requestItem?.TieuDe}
                                        onChange={(e) => handleChangeValue(e)}
                                        name="TieuDe"
                                        className={styles["input-title"]}
                                        placeholder="Nhập họ và tên"
                                        type="text"
                                        isDisabled={isEdit}
                                    />
                                </div>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian yêu cầu <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker
                                    defaultValue={moment(dateRequest)}
                                    value={moment(dateRequest)}
                                    className={styles["date-picker-data"]}
                                    suffixIcon={datetTimeIcon}
                                    showTime={{ format: "HH:mm" }}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder="Chọn ngày"
                                    onChange={(e) => handeleDateRequest(e)}
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Hình ảnh <span className={styles["lable-data-note"]}>(Thêm hình ảnh yêu cầu)</span><span className={styles["compulsory"]}>*</span></p>
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

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Ghi chú</p>
                                <InputText
                                    value={requestItem?.NoiDung}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="NoiDung"
                                    className={styles["input-data-content"]}
                                    placeholder="Vui lòng nhập ghi chú nếu có..."
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                {
                                    isEdit ?
                                        <button className={styles["item-save"]} onClick={() => updateRequest()}>
                                            <span className={styles["save-text"]}>Cập nhật yêu cầu</span>
                                        </button>
                                        :
                                        <button className={styles["item-save"]} onClick={() => saveRequest()}>
                                            <span className={styles["save-text"]}>Gửi yêu cầu</span>
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default RequestSend;
