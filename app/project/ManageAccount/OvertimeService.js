import { DatePicker, Modal } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useState } from "react";

const OvertimeService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
    const deleteIcon = <IconDatepicker />;
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';

    return(
        <>
           
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ làm thêm giờ</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>setIsModalOpenCreate(!isModalOpenCreate)}>Đăng ký</button>
                </div>                       
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Địa điểm</th>
                            <th className={styles["header-item"]}>Dịch vụ làm thêm</th>
                            <th className={styles["header-item"]}>Thời gian làm việc</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>Khối nhà A - Tầng 10 - Măt bằng C</td>
                            <td className={styles["content-item-code"]}>Điều hoà nhiệt độ ngoài giờ</td>
                            <td className={styles["content-item-code"]}>13:47 12/04/2023 - 13:47 12/04/2023</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-erro"]}>Chưa duyệt</span>
                            </td>
                            <td className={styles["content-item-action"]}>
                                <span className={styles["icon-detail"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                    <img src="/Icon_eye.png" alt="eye"/>
                                </span>
                                <span className={styles["icon-delete"]}>
                                    <img src="/Icon_delete.png" alt="delete"/>
                                </span>
                            </td>
                        </tr>
                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>Khối nhà N - Tầng 9 - Măt bằng G</td>
                            <td className={styles["content-item-code"]}>Điều hoà nhiệt độ ngoài giờ</td>
                            <td className={styles["content-item-code"]}>13:47 12/04/2023 - 13:47 12/04/2023</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-success"]}>Đã duyệt</span>
                            </td>
                            <td className={styles["content-item-action"]}>
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
                            <div className={styles["model-title-text"]}>Đăng ký dịch vụ làm thêm giờ</div>
                        </div>
                        <div className={styles["model-close"]} onClick={()=>setIsModalOpenCreate(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close"/>
                            <span>Đóng</span>
                        </div>
                    </div>
                </div>
                <div className={styles["model-container"]}>
                    <div className={styles["item-container"]}>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Khối nhà <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Chọn khối nhà</option>
                                </select>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Tầng <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Chọn tầng</option>
                                </select>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Mặt bằng <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Chọn mặt bằng</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Dịch vụ làm thêm giờ <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Chọn dịch vụ</option>
                                </select>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian bắt đầu <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker 
                                    format={dateFormatCreate}
                                    className={styles["date-picker-data"]} 
                                    suffixIcon={deleteIcon} 
                                    showTime
                                />
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian kết thúc <span className={styles["compulsory"]}>*</span></p>
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
                                <button className={styles["item-save"]}>Lưu thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default OvertimeService;
