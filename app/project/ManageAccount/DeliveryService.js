import { DatePicker, Modal } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useState } from "react";

const DeliveryService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
    const deleteIcon = <IconDatepicker />;
    const dateFormatEdit = 'HH:mm - DD/MM/YYYY';
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';

    return(
        <>
           
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ vận chuyển</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>setIsModalOpenCreate(!isModalOpenCreate)}>Đăng ký</button>
                </div>                       
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>
                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Thời gian vận chuyển</th>
                            <th className={styles["header-item"]}>Yêu cầu</th>
                            <th className={styles["header-item"]}>Lý do</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>
                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>13:47 12/04/2023</td>
                            <td className={styles["content-item-code"]}>Chuyển đồ lên phòng</td>
                            <td className={styles["content-item-code"]}>Mới dọn đến nên cần chuyển đồ</td>
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
                            <td className={styles["content-item-code"]}>13:47 - 12/04/2023</td>
                            <td className={styles["content-item-code"]}>Chuyển đồ lên phòng</td>
                            <td className={styles["content-item-code"]}>Mới dọn đến nên cần chuyển đồ</td>
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
                            <div className={styles["model-title-text"]}>Chi tiết dịch vụ vận chuyển</div>
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
                                <p className={styles["lable-data"]}>Thời gian vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker 
                                format={dateFormatEdit} 
                                className={styles["date-picker-data"]}
                                suffixIcon={deleteIcon} 
                                showTime/>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Nhu cầu vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Vận chuyển lên phòng</option>
                                </select>
                            </div>
                
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Lý do </p>
                                <input className={styles["input-data"]} placeholder="Nhập lý do"></input>
                            </div>
                        </div>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Danh sách hàng hóa vận chuyển</p>
                                <table>
                                    <tbody>
                                        <tr className={styles["table-header"]}>
                                            <th className={styles["header-item"]}>Tên hàng hóa</th>
                                            <th className={styles["header-item"]}>Kích thước, trọng lượng</th>
                                            <th className={styles["header-item"]}>Số lượng</th>
                                            <th className={styles["header-item"]}>Ghi chú</th>
                                            <th className={styles["header-item"]}>Tùy chọn</th>
                                        </tr>
                                        <tr className={styles["table-content"]}>
                                            <td className={styles["content-item-code"]}>Tủ lạnh</td>
                                            <td className={styles["content-item-period"]}>60kg</td>
                                            <td className={styles["content-item-month"]}>1</td>
                                            <td className={styles["content-item-year"]}>---</td>
                                            <td className={styles["content-item-action"]}>
                                                <span className={styles["icon-detail"]}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </span>
                                                <span className={styles["icon-delete"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>Tủ lạnh</td>
                                            <td className={styles["content-item-period"]}>60kg</td>
                                            <td className={styles["content-item-month"]}>1</td>
                                            <td className={styles["content-item-year"]}>---</td>
                                            <td className={styles["content-item-action"]}>
                                                <span className={styles["icon-detail"]}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </span>
                                                <span className={styles["icon-delete"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-save"]}>Chỉnh sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal 
                open={isModalOpenCreate} 
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
                            <div className={styles["model-title-text"]}>Chi tiết dịch vụ vận chuyển</div>
                        </div>
                        <div className={styles["model-close"]} onClick={()=>setIsModalOpenCreate(!isModalOpenCreate)}>
                            <img src="/icon_close.png" alt="icon close"/>
                            <span>Đóng</span>
                        </div>
                    </div>
                </div>
                <div className={styles["model-container"]}>
                    <div className={styles["item-container"]}>
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                <DatePicker 
                                format={dateFormatCreate}
                                className={styles["date-picker-data"]} 
                                suffixIcon={deleteIcon} 
                                showTime/>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Nhu cầu vận chuyển <span className={styles["compulsory"]}>*</span></p>
                                <select className={styles["select-data"]}>
                                    <option className={styles["select-item"]} value="0">Vận chuyển lên phòng</option>
                                </select>
                            </div>
                
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Lý do </p>
                                <input className={styles["input-data"]} placeholder="Nhập lý do"></input>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-info"]}>Thông tin hàng hóa</p>
                            </div>
                        </div>
                        
                        <div className={styles["container-data"]}>
                            <div className={styles["container-data"]}>
                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Tên hàng hóa <span className={styles["compulsory"]}>*</span></p>
                                    <input className={styles["input-data"]} placeholder="Tủ lạnh"></input>
                                </div>

                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Kích thước, trọng lượng <span className={styles["compulsory"]}>*</span></p>
                                    <input className={styles["input-data"]} placeholder="60kg"></input>
                                </div>

                                <div className={styles["item-data"]}>
                                    <p className={styles["lable-data"]}>Số lượng<span className={styles["compulsory"]}>*</span></p>
                                    <input className={styles["input-data"]} placeholder="1"></input>
                                </div>
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
                                <button className={styles["item-data-button"]}>Thêm vào danh sách đăng ký</button>
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
                                        <tr className={styles["table-content"]}>
                                            <td className={styles["content-item-code"]}>Tủ lạnh</td>
                                            <td className={styles["content-item-period"]}>60kg</td>
                                            <td className={styles["content-item-month"]}>1</td>
                                            <td className={styles["content-item-year"]}>---</td>
                                            <td className={styles["content-item-action"]}>
                                                <span className={styles["icon-detail"]}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </span>
                                                <span className={styles["icon-delete"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className={styles["table-content"]}>
                                        <td className={styles["content-item-code"]}>Tủ lạnh</td>
                                            <td className={styles["content-item-period"]}>60kg</td>
                                            <td className={styles["content-item-month"]}>1</td>
                                            <td className={styles["content-item-year"]}>---</td>
                                            <td className={styles["content-item-action"]}>
                                                <span className={styles["icon-detail"]}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </span>
                                                <span className={styles["icon-delete"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default DeliveryService;
