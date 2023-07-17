import { DatePicker, Modal, Select } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useState } from "react";

const RequestSend = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deleteIcon = <IconDatepicker />;
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };


    return(
        <>
           
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Danh sách yêu cầu</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>setIsModalOpen(!isModalOpen)}>Thêm yêu cầu</button>
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
                        
                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>10:00 - 10/04/2023</td>
                            <td className={styles["content-item-code"]}>Yêu cầu hỗ trợ kỹ thuật</td>
                            <td className={styles["content-item-code"]}>Tôi cần hỗ trợ sữa máy lạnh</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-erro"]}>Chưa duyệt</span>
                            </td>
                            <td className={styles["content-item-action-car"]}>
                                <span className={styles["icon-detail"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                    <img src="/Icon_eye.png" alt="eye"/>
                                </span>
                                <span className={styles["icon-delete"]}>
                                    <img src="/Icon_delete.png" alt="delete"/>
                                </span>
                            </td>
                        </tr>

                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>10:00 - 10/04/2023</td>
                            <td className={styles["content-item-code"]}>Yêu cầu hỗ trợ kỹ thuật</td>
                            <td className={styles["content-item-code"]}>Tôi cần hỗ trợ sữa máy lạnh</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-success"]}>Đã duyệt</span>
                            </td>
                            <td className={styles["content-item-action-car"]}>
                                <span className={styles["icon-detail"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                    <img src="/Icon_eye.png" alt="eye"/>
                                </span>
                                <span className={styles["icon-delete"]}>
                                    <img src="/Icon_delete.png" alt="delete"/>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Modal 
                open={isModalOpen} 
                width={1100}
                bodyStyle={{
                    height:850,
                }}
                style={{top: '0px', right:'0px', position: 'absolute'}}
                footer={null}
                closable={false}
            >
                <div className={styles["model-header"]}>
                    <div className={styles["model-header-close"]}>
                        <div className={styles["model-title"]}>
                            <div className={styles["model-title-text"]}>Thêm mới yêu cầu</div>
                        </div>
                        <div className={styles["model-close"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close"/>
                            <span>Đóng</span>
                        </div>
                    </div>
                </div>

                <div className={styles["model-container"]}>
                    <div className={styles["item-container"]}>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Loại yêu cầu <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Loại yêu cầu"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChange}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Yêu cầu hỗ trợ kỹ thuật' },
                                        ]}
                                    />
                                </div> 
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian yêu cầu <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker 
                                    format={dateFormatCreate}
                                    className={styles["date-picker-data"]} 
                                    suffixIcon={deleteIcon} 
                                    showTime
                                />
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Ghi chú</p>
                                <input className={styles["input-data-content"]} placeholder="Vui lòng nhập ghi chú nếu có..."></input> 
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-save"]}>
                                    <span className={styles["save-text"]}>Gửi yêu cầu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default RequestSend;
