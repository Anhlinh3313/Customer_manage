import { Calendar, DatePicker, Modal, Select, Upload } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import dayjs from 'dayjs';
import { useState } from "react";

const CarService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteIcon = <IconDatepicker />;
    const dateFormat = 'HH:mm - DD/MM/YYYY';

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div className={styles["buttom-upload"]}>
            <span>
                <img src="/icon_img.png" alt="icon img"></img>
            </span>
            <span className={styles["buttom-upload-text"]}>Thêm ảnh</span>
        </div>
    );

    const handleChangeCarType = (value) => {
        console.log(`selected ${value}`);
      };

    return(
        <>
           
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ xe</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]}>Đăng ký</button>
                </div>                       
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>

                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Ngày đăng ký</th>
                            <th className={styles["header-item"]}>Hình thức đăng ký</th>
                            <th className={styles["header-item"]}>Số lượng xe</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>

                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>13:47 - 12/04/2023</td>
                            <td className={styles["content-item-period-car"]}>Đăng ký làm thẻ mới</td>
                            <td className={styles["content-item-month"]}>8</td>
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
                            <td className={styles["content-item-code"]}>13:47 - 12/04/2023</td>
                            <td className={styles["content-item-period-car"]}>Đăng ký làm thẻ mới</td>
                            <td className={styles["content-item-month-car"]}>8</td>
                            <td className={styles["content-item-status-car"]}>
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
                            <div className={styles["model-title-text"]}>Đăng ký dịch vụ: </div>
                            <div className={styles["select"]}>
                                <div className={styles["select-model"]}>
                                    <select className={styles["standard-select"]}>
                                        <option className={styles["select-item"]} value="0">Đăng ký thẻ xe</option>
                                        <option className={styles["select-item"]} value="1">Đăng ký gửi qua đêm</option>
                                        <option className={styles["select-item"]} value="2">Đăng ký làm lại thẻ xe</option>
                                    </select>
                                </div>
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
                                <p className={styles["lable-data"]}>Loại xe</p>
                                <div className={styles["form-select-home"]}>
                                    <Select
                                        defaultValue="Loại xe"
                                        style={{ width: '100%', textAlign: 'left'}}
                                        onChange={handleChangeCarType}
                                        bordered={false}
                                        options={[
                                            { value: 'jack', label: 'Đăng ký thẻ xe' },
                                            { value: 'lucy', label: 'Đăng ký gửi qua đêm' },
                                            { value: 'Yiminghe', label: 'Đăng ký làm lại thẻ xe' },
                                        ]}
                                    />
                                </div>
                               
                            </div>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Tên chủ xe</p>
                                <input className={styles["input-data"]} placeholder="Nhập tên chủ xe..."></input>
                            </div>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Tên tài xế</p>
                                <input className={styles["input-data"]} placeholder="Nhập tên tài xế..."></input>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Biển xố xe</p>
                                <input className={styles["input-data"]} placeholder="Nhập biển số xe..."></input>
                            </div>
                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Hiệu xe</p>
                                <input className={styles["input-data"]} placeholder="Nhập hiệu xe"></input>
                            </div>

                            <div className={styles["item-data"]}>
                                <p className={styles["lable-data"]}>Thời gian bắt đầu hiệu lực</p>
                                <DatePicker defaultValue={dayjs('10:16 01/01/2023', dateFormat)} format={dateFormat} className={styles["date-picker-data"]} suffixIcon={deleteIcon} showTime/>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Hình đăng ký xe <span className={styles["lable-data-note"]}>(Lưu ý: Hình phải rõ màu xe)</span></p>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                    />
                                </Modal>
                            </div>
                        </div>
                        
                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Hình căn cước/ CMND <span className={styles["lable-data-note"]}>(Lưu ý: Hình ảnh phải rõ nét không cắt xén)</span></p>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                    />
                                </Modal>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full-button"]}>
                                <button className={styles["item-data-button"]}>Thêm vào danh sách</button>
                            </div>
                        </div>

                        <div className={styles["container-data"]}>
                            <div className={styles["item-data-full"]}>
                                <p className={styles["lable-data"]}>Danh sách xe đăng ký</p>
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
                                        <tr className={styles["table-content"]}>
                                            <td className={styles["content-item-code"]}>Xe máy</td>
                                            <td className={styles["content-item-period"]}>Blade</td>
                                            <td className={styles["content-item-month"]}>79V1- 44443</td>
                                            <td className={styles["content-item-year"]}>Trung Tuyến</td>
                                            <td className={styles["content-item-debt"]}>Trung Tuyến</td>
                                            <td className={styles["content-item-debt"]}>10:00 - 12/04/2023</td>
                                            <td className={styles["content-item-action-car"]}>
                                                <span className={styles["icon-detail"]}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </span>
                                                <span className={styles["icon-delete"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className={styles["table-content"]}>
                                            <td className={styles["content-item-code"]}>Xe máy</td>
                                            <td className={styles["content-item-period"]}>Blade</td>
                                            <td className={styles["content-item-month"]}>79V1- 44443</td>
                                            <td className={styles["content-item-year"]}>Trung Tuyến</td>
                                            <td className={styles["content-item-debt"]}>Trung Tuyến</td>
                                            <td className={styles["content-item-debt"]}>10:00 - 12/04/2023</td>
                                            <td className={styles["content-item-action-car"]}>
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

export default CarService;
