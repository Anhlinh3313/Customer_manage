import { Calendar, DatePicker, Modal, Select, Upload } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import dayjs from 'dayjs';
import { useState } from "react";

const CarService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

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


    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    };

    const handleChangeEdit = (value) => {
        setIsModalOpen(!isModalOpen);
        setIsEdit(true);
    };

    const handleChangeCreate = (value) => {
        setIsModalOpen(!isModalOpen);
        setIsEdit(false);
    };
    return(
        <>
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Dịch vụ xe</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>handleChangeCreate()}>Đăng ký</button>
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
                                <span className={styles["icon-detail"]} onClick={()=>handleChangeEdit()}>
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
                                <span className={styles["icon-detail"]} onClick={()=>handleChangeEdit()}>
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
                            <span>13:47 - 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Đăng ký làm thẻ mới</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Số lượng</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>2</span>
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
                            <span>13:47 - 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Đăng ký làm thẻ mới</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Số lượng</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>2</span>
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
                            <span>13:47 - 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Đăng ký làm thẻ mới</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Số lượng</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>2</span>
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
                            <span>13:47 - 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Đăng ký làm thẻ mới</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Số lượng</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>2</span>
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
                            <span>13:47 - 12/04/2023</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Đăng ký làm thẻ mới</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Số lượng</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>2</span>
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
                                <span>
                                    {isEdit?
                                        "Chỉnh sửa dịch vụ:"
                                        :
                                        "Đăng ký dịch vụ:"
                                    }
                                    </span>
                            </div>
                            <div className={styles["select"]}>
                                <div className={styles["form-select-car"]}>
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
                        </div>
                        <div className={styles["model-close"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close"/>
                            <span className={styles["model-close-text"]}>Đóng</span>
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
                                <div className={styles["content-table-mobile"]}>
                                    <div className={styles["table-item-mobile"]}>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["date-name"]}>
                                                <span>Xe máy .  Blade . 79V1- 44443</span>
                                            </p>
                                        </div>
                            
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Ngày hiệu lực</span>
                                            </p>
                                            <p className={styles["data-code"]}>
                                                <span>10:00 - 12/04/2023</span>
                                            </p>
                                        </div>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Tên chủ xe</span>
                                            </p>
                                            <p className={styles["data-code"]}>
                                                <span>79V1- 44443</span>
                                            </p>
                                        </div>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Tên tài xế</span>
                                            </p>
                                            <p className={styles["data-code"]}>
                                                <span>79V1- 44443</span>
                                            </p>
                                        </div>
                                        <div className={styles["row-item-data"]}>
                                            <p className={styles["status"]}>
                                                <span>Tùy chọn</span>
                                            </p>
                                            <p className={styles["mobile-active"]}>
                                                <p className={styles["status"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                                    <img src="/icon_tb_edit.png" alt="eye"/>
                                                </p>
                                                <p className={styles["data-download"]}>
                                                    <img src="/icon_tb_delete.png" alt="delete"/>
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles["line-mobile"]}></div>
                                </div> 
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
