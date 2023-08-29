import { DatePicker, Modal, Select, Upload, message } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useContext, useEffect, useState } from "react";
import {
    createDeliveryServices,
    deleteDeliveryServices,
    deleteDeliveryServicesItem,
    getListDeliveryServices,
    updateDeliveryServices
} from "../../../stores/delivery";
import moment from "moment";
import InputText from "components/InputText";
import { UserContext } from "context/userContext";
import { ConvertDateTime } from "@function/Funcion";

const { Option } = Select;

const DeliveryService = () => {
    const dateNow = moment(Date.now()).format("YYYY-MM-DD hh:mm");
    const deleteIcon = <IconDatepicker />;
    const data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0] : {};
    const [messageApi, contextHolder] = message.useMessage();
    const { logOut } = useContext(UserContext);
    const typeShipment = [
        {
            label: "Vào",
            value: true
        },
        {
            label: "Ra",
            value: false
        }
    ]
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

    const [isEdit, setIsEdit] = useState(false);
    const [deliveryServiceItem, setDeliveryServiceItem] = useState({});
    const [listDeliveryServicesDetail, setListDeliveryServicesDetail] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deliverys, setDelivery] = useState([]);
    const [deliveryType, setDeliveryType] = useState(typeShipment);
    const [dateDeliveryService, setDateDeliveryService] = useState(dateNow);
    const [isEditDeliveryServiceItem, seIsEditDeliveryServiceItem] = useState(false);
    const [fileList, setFileList] = useState(fileImg);
    const [reason, setReason] = useState("");
    const [isDelivery, setIsDelivery] = useState(false);
    const [servicerRegisterDeliveryID, setServicerRegisterDeliveryID] = useState(0);

    const handeleDeliveryService = (e) => {
        setDateDeliveryService(e.format("YYYY-MM-DD HH:mm"));
    }

    const handleChangeDeliveryType = (value) => {
        setIsDelivery(value);
    };

    const handleChangeValue = (e) => {
        setDeliveryServiceItem({ ...deliveryServiceItem, [e.target.name]: e.target.value });
    }

    const handleChangeCreate = () => {
        setIsModalOpen(!isModalOpen)
        setIsEdit(false);
        refreshData();
        setListDeliveryServicesDetail([]);
        seIsEditDeliveryServiceItem(false);
    }

    const handleAddDataService = () => {
        if (!validateDeliveryServiceItem()) return;

        if (isEditDeliveryServiceItem) {
            deliveryServiceItem.Date_of_delivery = dateDeliveryService ?? dateNow;
            if (listDeliveryServicesDetail.length > 0) {
                listDeliveryServicesDetail.map((item) => {
                    if (item.DetailID === deliveryServiceItem.DetailID) {
                        return (
                            item.DetailID = deliveryServiceItem.DetailID,
                            item.Item_delivered = deliveryServiceItem.Item_delivered,
                            item.Quantity = parseInt(deliveryServiceItem.Quantity),
                            item.Remarks = deliveryServiceItem.Remarks,
                            item.Size_Height = deliveryServiceItem.Size_Height
                        )
                    }
                })
            }
        } else {
            if (isEdit) {
                deliveryServiceItem.Servicer_RegisterDelivery_ID = servicerRegisterDeliveryID;
            }
            deliveryServiceItem.Quantity = parseInt(deliveryServiceItem.Quantity);
            deliveryServiceItem.DetailID = Math.floor(Math.random() * 100000);
            deliveryServiceItem.Date_of_delivery = dateDeliveryService;
            listDeliveryServicesDetail.push(deliveryServiceItem);
        }

        setListDeliveryServicesDetail(listDeliveryServicesDetail);
        seIsEditDeliveryServiceItem(false);
        refreshData();
    }

    const handeleUpdateDeliveryServiceItem = (event) => {
        const data = {};
        listDeliveryServicesDetail.forEach((item) => {
            if (item.DetailID === event) (
                data.DetailID = event,
                data.Item_delivered = item.Item_delivered,
                data.Quantity = parseInt(item.Quantity),
                data.Remarks = item.Remarks,
                data.Size_Height = item.Size_Height,
                data.Delivery_IsIn = item.Delivery_IsIn,
                data.Date_of_delivery = moment(new Date(item.Date_of_delivery)).format("YYYY-MM-DD HH:mm")
            )
        });
        setDeliveryServiceItem(data);
        seIsEditDeliveryServiceItem(true);
    }

    const handeleDeleteDeliveryService = async (event) => {
        const paramDelete = {
            ID: event,
            pageNumber: 1,
            pageSize: 20,
            searchText: ""
        }
        const resData = await deleteDeliveryServices(paramDelete);
        if (resData.Status === "OK") {
            messageApi.open({
                type: 'success',
                content: "Xoá dịch vụ làm thêm giờ thành công",
            });

            reloadData();
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    const handeleDeleteDeliveryServiceItem = async (event) => {
        if (isEdit) {
            const paramDelete = {
                ID: event,
                pageNumber: 1,
                pageSize: 20,
                searchText: ""
            }
            const resData = await deleteDeliveryServicesItem(paramDelete);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Xoá đăng kí vận chuyển thành công",
                });
                reloadData();
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        }
        const listDeliveryServices = [];
        listDeliveryServicesDetail.forEach(item => {
            if (item.DetailID !== event) {
                listDeliveryServices.push(item);
            }
        });
        setListDeliveryServicesDetail(listDeliveryServices);
    }

    const handleChangeEdit = (value) => {
        setIsModalOpen(!isModalOpen);
        setIsEdit(true);
        setServicerRegisterDeliveryID(value?.ID);
        const dataEdit = value.spd?.map(item => {
            return {
                DetailID: item.DetailID,
                ID: value.ID,
                Servicer_RegisterDelivery_ID: value.ID,
                Item_delivered: item.Item_delivered,
                Quantity: parseInt(item.Quantity),
                Remarks: item.Remarks,
                Size_Height: item.Size_Height,
            }
        })
        setListDeliveryServicesDetail(dataEdit);
        refreshData();
    };

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

    const saveCarService = async () => {
        if (listDeliveryServicesDetail.length < 1) {
            return messageApi.open({
                type: 'error',
                content: "Vui tạo danh sách đăng kí",
            });
        }

        if (isEdit) {
            const resData = await updateDeliveryServices(listDeliveryServicesDetail);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Cập nhật dịch vụ vẫn chuyển thành công",
                });
                setIsModalOpen(!isModalOpen);
                reloadData();
                setListDeliveryServicesDetail([]);
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        } else {
            const dateSave = {
                Delivery_IsIn: isDelivery,
                FileType: fileList[0].thumbUrl.toString().substring(fileList[0].thumbUrl.toString().indexOf('/') + 1, fileList[0].thumbUrl.toString().indexOf(';base64')),
                File: new String(fileList[0].thumbUrl).toString().replace(/^data:image\/[a-z]+;base64,/, ""),
                Reason: reason,
                ProjectID: data.ProjectID,
                CustomerID: data.CustomerID,
                Date_of_delivery: dateDeliveryService,
                Service_Register_Delivery_Detail_AddModel: listDeliveryServicesDetail
            }
            const resData = await createDeliveryServices(dateSave);
            if (resData.Status === "OK") {
                messageApi.open({
                    type: 'success',
                    content: "Đăng kí dịch vụ vận chuyển thành công",
                });
                setIsModalOpen(!isModalOpen);
                reloadData();
                setListDeliveryServicesDetail([]);
            } else {
                messageApi.open({
                    type: 'error',
                    content: resData.Description ? resData.Description : resData?.response?.data?.Message,
                });
            }
        }
    }

    const refreshData = () => {
        let data = {}
        data.DetailID = null;
        data.Item_delivered = "";
        data.Quantity = 0;
        data.Remarks = "";
        data.Size_Height = "";
        data.Date_of_delivery = dateNow;
        setDeliveryServiceItem(data);
        setDateDeliveryService(dateNow);
    }

    const validateDeliveryServiceItem = () => {
        if (isDelivery == null && isDelivery == undefined) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn nhu cầu vận chuyển",
            });
            return false;
        }

        if (!deliveryServiceItem.Item_delivered) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập tên hàng hoá",
            });
            return false;
        }

        if (!deliveryServiceItem.Size_Height) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập trọng lượng kích thước",
            });
            return false;
        }

        if (!deliveryServiceItem.Quantity) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập số lượng",
            });
            return false;
        }

        if (deliveryServiceItem.Quantity < 0) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập số lượng lớn hơn 0",
            });
            return false;
        }

        if (!deliveryServiceItem.Remarks) {
            messageApi.open({
                type: 'error',
                content: "Vui lòng nhập ghi chú",
            });
            return false;
        }
        return true;
    }

    const getDeliveryServices = async (params) => {
        const resData = await getListDeliveryServices(params);
        if (resData.Status === "OK") {
            setDelivery(resData.Data);
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

    const reloadData = () => {
        const params = {
            pageNumber: 1,
            pageSize: 10,
            CustomerID: data.CustomerID,
            ProjectID: data.ProjectID,
            searchText: ""
        }
        getDeliveryServices(params);
        setReason("");
        setIsDelivery(false);
        setFileList(fileImg);
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ vận chuyển</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={() => handleChangeCreate()}>Đăng ký</button>
                </div>
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Thời gian vận chuyển</th>
                            <th className={styles["header-item"]}>Yêu cầu</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        {deliverys?.map((item, index) => {
                            return (
                                <tr key={index} className={styles["table-content"]}>
                                    <td className={styles["content-item-code"]}>{ConvertDateTime(item.Date_of_delivery)}</td>
                                    <td className={styles["content-item-code"]}>{item.Delivery_IsIn ? "Vào" : "Ra"}</td>
                                    <td className={styles["content-item-status"]}>
                                        <span className={item.Servicer_RegisterDeliveryStatus === 0 ? styles["status-erro"] : (item.Servicer_RegisterDeliveryStatus === 1 ? styles["status-success"] : styles["status-load"])}>{item.NameServicer_RegisterDeliveryStatus}</span>
                                    </td>
                                    <td className={styles["content-item-action-car"]}>
                                        <span className={styles["icon-detail"]} onClick={() => handleChangeEdit(item)}>
                                            <img src="/Icon_eye.png" alt="eye" />
                                        </span>
                                        <span className={styles["icon-delete"]}>
                                            <img src="/Icon_delete.png" alt="delete" onClick={() => handeleDeleteDeliveryService(item.ID)} />
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className={styles["content-table-mobile"]}>
                {
                    deliverys?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles["table-item-mobile"]}>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Thời gian vận chuyển</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{ConvertDateTime(item.Date_of_delivery)}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Trạng thái</span>
                                        </div>
                                        <div className={item.Servicer_RegisterDeliveryStatus === 0 ? styles["data-status-error"] : (item.Servicer_RegisterDeliveryStatus === 1 ? styles["data-status-succes"] : styles["data-status-load"])}>
                                            <span>{item.NameServicer_RegisterDeliveryStatus}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span>Yêu cầu</span>
                                        </div>
                                        <div className={styles["data-code"]}>
                                            <span>{item.Delivery_IsIn_Name}</span>
                                        </div>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <div className={styles["status"]}>
                                            <span> Tùy chọn</span>
                                        </div>
                                        <div className={styles["mobile-active"]}>
                                            <div className={styles["status"]} onClick={() => setIsModalOpen(!isModalOpen)}>
                                                <img src="/Icon_eye.png" alt="eye" />
                                            </div>
                                            <div className={styles["data-download"]}>
                                                <img src="/Icon_delete.png" alt="delete" />
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
                            <div className={styles["model-title-text-bill"]}>
                                <span onClick={() => setIsModalOpen(!isModalOpen)} >
                                    <img src="/icon_back.png" alt="" />
                                </span>
                                {
                                    isEdit ?
                                        <span>Chi tiết dịch vụ vận chuyển</span>
                                        :
                                        <span>Đăng ký dịch vụ vận chuyển</span>
                                }
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
                        {
                            isEdit ?
                                ""
                                :
                                <div>
                                    <div className={styles["container-data"]}>
                                        <div className={styles["item-data"]}>
                                            <p className={styles["lable-data"]}>Thời gian vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                            <DatePicker
                                                defaultValue={moment(dateNow)}
                                                value={moment(dateDeliveryService)}
                                                format="YYYY-MM-DD HH:mm"
                                                className={styles["date-picker-data"]}
                                                suffixIcon={deleteIcon}
                                                showTime
                                                onChange={(e) => handeleDeliveryService(e)}
                                            />
                                        </div>

                                        <div className={styles["item-data"]}>
                                            <p className={styles["lable-data"]}>Nhu cầu vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                            <div className={styles["form-select-home"]}>
                                                <Select
                                                    placeholder="Chọn nhu cầu vận chuyển"
                                                    style={{ width: '100%', textAlign: 'left' }}
                                                    bordered={false}
                                                    value={isDelivery}
                                                    onChange={handleChangeDeliveryType}
                                                >
                                                    {deliveryType.length > 0 &&
                                                        deliveryType.map((item) => {
                                                            return (
                                                                <Option key={item?.value} value={item?.value}>
                                                                    {item?.label}
                                                                </Option>
                                                            );
                                                        })
                                                    }
                                                </Select>
                                            </div>
                                        </div>

                                        <div className={styles["item-data"]}>
                                            <p className={styles["lable-data"]}>Lý do </p>
                                            <InputText
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                                name="Reason"
                                                className={styles["input-data-content"]}
                                                placeholder="Nhập lý do..."
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles["container-data"]}>
                                        <div className={styles["container-data"]}>
                                            <div className={styles["item-data-full"]}>
                                                <div className={styles["lable-data"]}>Hình đăng ký
                                                    <span className={styles["compulsory"]}>*</span>
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
                                </div>
                        }
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-info"]}>Thông tin hàng hóa</p>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["container-data"]}>
                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Tên hàng hóa <span className={styles["compulsory"]}>*</span></p>
                                    <InputText
                                        value={deliveryServiceItem?.Item_delivered}
                                        onChange={(e) => handleChangeValue(e)}
                                        name="Item_delivered"
                                        className={styles["input-data-content"]}
                                        placeholder="Nhập tên hàng hoá..."
                                        type="text"
                                    />
                                </div>

                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Kích thước, trọng lượng <span className={styles["compulsory"]}>*</span></p>
                                    <InputText
                                        value={deliveryServiceItem?.Size_Height}
                                        onChange={(e) => handleChangeValue(e)}
                                        name="Size_Height"
                                        className={styles["input-data-content"]}
                                        placeholder="Nhập kích thước trọng lượng..."
                                        type="text"
                                    />
                                </div>

                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Số lượng<span className={styles["compulsory"]}>*</span></p>
                                    <InputText
                                        value={deliveryServiceItem?.Quantity}
                                        onChange={(e) => handleChangeValue(e)}
                                        name="Quantity"
                                        className={styles["input-data-content"]}
                                        placeholder="Nhập số lượng..."
                                        type="number"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Ghi chú</p>
                                <InputText
                                    value={deliveryServiceItem?.Remarks}
                                    onChange={(e) => handleChangeValue(e)}
                                    name="Remarks"
                                    className={styles["input-data-content"]}
                                    placeholder="Vui lòng nhập ghi chú nếu có..."
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-data-button"]} type="button" onClick={handleAddDataService}>
                                    Thêm vào danh sách đăng ký
                                </button>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Danh sách hàng hóa đăng ký</p>
                                <table>
                                    <tbody>
                                        <tr className={styles["table-header"]}>
                                            <th className={styles["header-item"]}>Tên hàng hóa</th>
                                            <th className={styles["header-item"]}>Kích thước, trọng lượng</th>
                                            <th className={styles["header-item"]}>Số lượng</th>
                                            <th className={styles["header-item"]}>Ghi chú</th>
                                            <th className={styles["header-item"]}>Tùy chọn</th>
                                        </tr>
                                        {
                                            listDeliveryServicesDetail?.map((item, index) => {
                                                return (
                                                    <tr key={index} className={styles["table-content"]}>
                                                        <td className={styles["content-item-code"]}>{item?.Item_delivered}</td>
                                                        <td className={styles["content-item-period"]}>{item?.Size_Height}</td>
                                                        <td className={styles["content-item-month"]}>{item?.Quantity}</td>
                                                        <td className={styles["content-item-year"]}>{item?.Remarks}</td>
                                                        <td className={styles["content-item-action-car"]}>
                                                            <span className={styles["icon-detail"]} onClick={() => handeleUpdateDeliveryServiceItem(item?.DetailID)}>
                                                                <img src="/icon_tb_edit.png" alt="eye" />
                                                            </span>
                                                            <span className={styles["icon-delete"]}>
                                                                <img src="/icon_tb_delete.png" alt="delete" onClick={() => handeleDeleteDeliveryServiceItem(item?.DetailID)} />
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
                                        listDeliveryServicesDetail?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={styles["table-item-mobile"]}>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["date-name"]}>
                                                                <span>{item?.Item_delivered}</span>
                                                            </div>
                                                        </div>

                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>kích thước, trọng lượng</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item?.Size_Height}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Số lượng</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item?.Quantity}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>ghi chú</span>
                                                            </div>
                                                            <div className={styles["data-code"]}>
                                                                <span>{item?.Remarks}</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles["row-item-data"]}>
                                                            <div className={styles["status"]}>
                                                                <span>Tùy chọn</span>
                                                            </div>
                                                            <div className={styles["mobile-active"]}>
                                                                <div className={styles["status"]} onClick={() => handeleUpdateDeliveryServiceItem(item?.DetailID)}>
                                                                    <img src="/icon_tb_edit.png" alt="eye" />
                                                                </div>
                                                                <div className={styles["data-download"]}>
                                                                    <img src="/icon_tb_delete.png" alt="delete" onClick={() => handeleDeleteDeliveryServiceItem(item?.DetailID)} />
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

export default DeliveryService;