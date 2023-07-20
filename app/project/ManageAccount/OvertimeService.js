import { DatePicker, Modal, Select } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useState } from "react";

const OvertimeService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deleteIcon = <IconDatepicker />;
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    return(
        <>
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ làm thêm giờ</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>setIsModalOpen(!isModalOpen)}>Đăng ký</button>
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
                            <td className={styles["content-item-code"]}>Khối nhà N - Tầng 9 - Măt bằng G</td>
                            <td className={styles["content-item-code"]}>Điều hoà nhiệt độ ngoài giờ</td>
                            <td className={styles["content-item-code"]}>13:47 12/04/2023 - 13:47 12/04/2023</td>
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

            <div className={styles["content-table-mobile"]}>
                <div className={styles["table-item-mobile"]}>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>13:47 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Chuyển đồ lên phòng</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa duyệt</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Lý do</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Mới dọn đến nên cần chuyển đồ</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/Icon_eye.png" alt="eye"/>
                            </p>
                            <p className={styles["data-download"]}>
                                <img src="/Icon_delete.png" alt="delete"/>
                            </p>
                        </p>
                   </div>
                </div>
                         
               <div className={styles["line-mobile"]}></div>
               <div className={styles["table-item-mobile"]}>
                    <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa duyệt</span>
                        </p>
                   </div>
                    <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Địa điểm</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Khối nhà A - Tầng 10 - Măt bằng C</span>
                        </p>
                   </div>
             
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Thời gian</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>13:47 12/04/2023 - 13:47 12/04/2023</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/Icon_eye.png" alt="eye"/>
                            </p>
                            <p className={styles["data-download"]}>
                                <img src="/Icon_delete.png" alt="delete"/>
                            </p>
                        </p>
                   </div>
               </div>
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
                                <span onClick={()=>setIsModalOpen(!isModalOpen)} >
                                    <img src="/icon_back.png" alt=""/>
                                </span>
                                <span> Đăng ký dịch vụ làm thêm giờ</span>
                            </div>
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
                                <p className={styles["lable-data"]}>Khối nhà <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Chọn khối nhà"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChange}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Khối nhà A' },
                                            { value: 'lucy', label: 'Khối nhà B' },
                                        ]}
                                    />
                                </div> 
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Tầng <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Chọn tầng"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChange}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Tầng A' },
                                            { value: 'lucy', label: 'Tầng B' },
                                        ]}
                                    />
                                </div> 
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Mặt bằng <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Chọn mặt bằng"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChange}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Mặt bằng A' },
                                            { value: 'lucy', label: 'Mặt bằng B' },
                                        ]}
                                    />
                                </div> 
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Dịch vụ làm thêm giờ <span className={styles["compulsory"]}>*</span></p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Chọn dịch vụ"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChange}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Dịch vụ A' },
                                            { value: 'lucy', label: 'Dịch vụ B' },
                                        ]}
                                    />
                                </div> 
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
                                <button className={styles["item-save"]}>
                                    <span className={styles["save-text"]}>Lưu thông tin</span>
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
