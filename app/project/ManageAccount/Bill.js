import { Button, DatePicker, Modal, message } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { getReceivables } from "../../../stores/receivables";
import { useEffect, useState } from "react";
import moment from "moment";
import { ConvertMoney } from "@function/Funcion";

const { RangePicker } = DatePicker;
const Bill = () => {
    const data = JSON.parse(localStorage.getItem("user"))? JSON.parse(localStorage.getItem("user"))[0]: {};
    const [messageApi, contextHolder] = message.useMessage();
    const [bill, setBill] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [listFile, setListFile] = useState([]);
    const [billDetails, setBillDetail] = useState([]);
    const [dateFrom, setDateFrom] = useState(moment(new Date(Date.now()).setMonth(new Date().getMonth() - 1)).format("YYYY-MM-DD hh:mm"));
    const [dateTo, setDateTo] = useState(moment(Date.now()).format("YYYY-MM-DD hh:mm"));

    const deleteIcon = <IconDatepicker />;

    const handleChangeDateTime = async (value) => {
        const fom = value[0].format("YYYY-MM-DD hh:mm");
        const to = value[1].format("YYYY-MM-DD hh:mm");
        setDateFrom(fom);
        setDateTo(to);

        const params = {
            CustomerID: data.CustomerID,
            DateFrom: fom,
            DateTo: to,
            ProjectID: data.ProjectID,
        }
        await getBills(params);
    }

    const handleShowDownLoad = (event) => {
        setListFile(event);
        setIsModalOpen(!isModalOpen);
    }

    const handleShowBillDetail = (event) => {
        setBillDetail(event);
        setIsModalOpenDetail(!isModalOpen);
    }

    const getBills = async (params) => {
        const resData = await getReceivables(params);
        console.log(resData.Status)
        if (resData.Status === "OK") {
            setBill(resData.Data);
        } else {
            messageApi.open({
                type: 'error',
                content: resData.Description ? resData.Description : resData?.response?.data?.Message,
            });
        }
    }

    useEffect(() => {
        async function fetchData() {
            const params = {
                CustomerID: data.CustomerID,
                DateFrom: dateFrom,
                DateTo: dateTo,
                ProjectID: data.ProjectID,
            }
            getBills(params);
        }
        fetchData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className={styles["content-header"]}>
                <div className={styles["content-title-bill"]}>Hóa đơn</div>
                <div className={styles["content-button-bill"]}>
                    <button className={styles["content-button-calendar"]}>
                        <RangePicker
                            defaultValue={[moment(dateFrom), moment(dateTo)]}
                            className={styles["date-picker-data"]}
                            suffixIcon={deleteIcon}
                            placeholder="Chọn ngày"
                            style={{ border: '0px', backgroundColor: '#fff' }}
                            showTime={{ format: "HH:mm" }}
                            format="YYYY-MM-DD HH:mm"
                            onChange={(e) => handleChangeDateTime(e)}
                        />
                    </button>
                </div>
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Mã hóa đơn</th>
                            <th className={styles["header-item"]}>Kỳ</th>
                            <th className={styles["header-item"]}>Tháng</th>
                            <th className={styles["header-item"]}>Năm</th>
                            <th className={styles["header-item"]}>Nợ</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        {
                            bill?.map((item, index) => {
                                return (
                                    <tr key={index} className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>{item.apartment_id}</td>
                                        <td className={styles["content-item-period"]}>{item.Period}</td>
                                        <td className={styles["content-item-month"]}>Tháng {item.Month}</td>
                                        <td className={styles["content-item-year"]}>{item.Year}</td>
                                        <td className={styles["content-item-debt"]}>{ConvertMoney(item.Debts)}</td>
                                        <td className={styles["content-item-status"]}>
                                            <span className={styles["status-erro"]}>{item.Status}</span>
                                            {/* <span className={styles["status-success"]}>Hoàn thành</span> */}
                                        </td>
                                        <td className={styles["content-item-action-car"]}>
                                            <span className={styles["download"]} onClick={() => handleShowDownLoad(item.fileurl)}>Tải xuống</span>
                                            <span className={styles["detail"]} onClick={() => handleShowBillDetail(item.ct)}>Chi tiết</span>
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
                    bill?.map((item, index) => {
                        return (
                            <>
                                <div key={index} className={styles["table-item-mobile"]}>
                                    <div className={styles["row-item-data"]}>
                                        <p className={styles["date-time"]}>
                                            <span>{item.Period}</span>
                                        </p>
                                        <p className={styles["data-code"]}>
                                            <span>{item.apartment_id}</span>
                                        </p>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <p className={styles["status"]}>
                                            <span>Trạng thái</span>
                                        </p>
                                        <p className={styles["data-status"]}>
                                            <span>{item.Status}</span>
                                        </p>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <p className={styles["status"]}>
                                            <span>Nợ</span>
                                        </p>
                                        <p className={styles["data-code"]}>
                                            <span>{ConvertMoney(item.Debts)}</span>
                                        </p>
                                    </div>
                                    <div className={styles["row-item-data"]}>
                                        <p className={styles["status"]}>
                                            <span>Tùy chọn</span>
                                        </p>
                                        <p className={styles["data-download"]}>
                                            <span onClick={() => handleShowDownLoad(item.fileurl)}>Tải xuống</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles["line-mobile"]}></div>
                            </>
                        )
                    })
                }

            </div>
            {/* list bill download */}
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
                                <span>File thanh toán phí</span>
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
                            listFile?.map((item, index) => {
                                return (
                                    <a key={index} href={item.FileUrl}>
                                        <Button className={styles["download-bill"]}>{item.DebitNumber}</Button>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </Modal>
            {/* bill detail */}
            <Modal
                open={isModalOpenDetail}
                width={1100}
                footer={null}
                closable={false}
            >
                <div className={styles["model-header"]}>
                    <div className={styles["model-header-close"]}>
                        <div className={styles["model-title"]}>
                            <div className={styles["model-title-text-bill"]}>
                                <span onClick={() => setIsModalOpenDetail(!isModalOpenDetail)} >
                                    <img src="/icon_back.png" alt="" />
                                </span>
                                <span>Bill detail</span>
                            </div>
                        </div>
                        <div className={styles["model-close"]} onClick={() => setIsModalOpenDetail(!isModalOpenDetail)}>
                            <img src="/icon_close.png" alt="icon close" />
                            <span className={styles["model-close-text"]}>Đóng</span>
                        </div>
                    </div>
                </div>
                <div className={styles["model-container"]}>
                    <div className={styles["item-container"]}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr className={styles["table-header"]}>
                                    <th className={styles["header-item-bill"]}>Kỳ</th>
                                    <th className={styles["header-item-bill"]}>Mô tả</th>
                                    <th className={styles["header-item-bill"]}>Nợ</th>
                                </tr>

                                {
                                    billDetails?.map((item, index) => {
                                        return (
                                            <tr key={index} className={styles["table-content"]}>
                                                <td className={styles["content-item-code"]}>{item.group_service_name}</td>
                                                <td className={styles["content-item-period"]}>{item.description}</td>
                                                <td className={styles["content-item-month"]}>{ConvertMoney(item.fee)}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Bill;
