import { DatePicker, Modal, Select, Upload } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";
import { useState } from "react";

const RequestSend = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const deleteIcon = <IconDatepicker />;
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';
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

    const handleChangeImg = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div className={styles["buttom-upload"]}>
            <span>
                <img src="/icon_img.png" alt="icon img"></img>
            </span>
            <span className={styles["buttom-upload-text"]}>Thêm ảnh</span>
        </div>
    );

    const handleChange = (value) => {
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
                <div className={styles["content-title"]}>Danh sách yêu cầu</div>
                <div className={styles["content-button"]}>
                    <button className={styles["button-create-green"]} onClick={()=>handleChangeCreate()}>Thêm yêu cầu</button>
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
                                <span className={styles["icon-detail"]} onClick={()=>handleChangeEdit()}>
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
                            <span>Yêu cầu hỗ trợ kỹ thuật</span>
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
                            <span>Nội dung</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Tôi cần hỗ trợ sữa máy lạnh</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>handleChangeEdit()}>
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
                            <span>Yêu cầu hỗ trợ kỹ thuật</span>
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
                            <span>Nội dung</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Tôi cần hỗ trợ sữa máy lạnh</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>handleChangeEdit()}>
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
                            <span>Yêu cầu hỗ trợ kỹ thuật</span>
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
                            <span>Nội dung</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Tôi cần hỗ trợ sữa máy lạnh</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>handleChangeEdit()}>
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
                            <span>Yêu cầu hỗ trợ kỹ thuật</span>
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
                            <span>Nội dung</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>Tôi cần hỗ trợ sữa máy lạnh</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span> Tùy chọn</span>
                        </p>
                        <p className={styles["mobile-active"]}>
                            <p className={styles["status"]} onClick={()=>handleChangeEdit()}>
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
                                        "Chỉnh sửa yêu cầu"
                                    :
                                        "Thêm mới yêu cầu"
                                    }
                                    </span>
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
                                <p className={styles["lable-data"]}>Hình ảnh <span className={styles["lable-data-note"]}>(Thêm hình ảnh yêu cầu nếu có)</span></p>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChangeImg}
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
