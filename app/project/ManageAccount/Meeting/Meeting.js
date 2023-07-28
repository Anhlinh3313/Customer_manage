import { DatePicker, Modal } from "antd";
import styles from "../../../../styles/ManageAccount.module.css";
import IconDatepicker from "../Icon/IconDatepicker";
import { useState } from "react";

const Meeting = ({onchangeHistory}) => {
    const deleteIcon = <IconDatepicker />;
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';
    const { RangePicker } = DatePicker;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <div>
                <div className={styles["content-header"]}>
                    <div className={styles["content-title"]}>Danh sách phòng họp</div>
                    <div className={styles["content-button"]}>
                        <button className={styles["button-history"]} onClick={()=>onchangeHistory(false)}>Lịch sử thuê phòng</button>
                    </div>  
                </div>
            
                <div className={styles["content-meeting"]}>
                    <div className={styles["list-room"]}>
                        <div className={styles["room"]}>
                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_1.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>

                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_2.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_3.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles["room"]}>
                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_5.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>

                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_5.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles["room-item"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <img src="/img_room_6.png" alt=""/>
                                <div className={styles["room-container"]}> 
                                    <div className={styles["room-price"]}>
                                        <div className={styles["title-price"]}>Giá tiền</div>
                                        <div className={styles["price"]}>180.000đ/h</div>
                                    </div>
                                    <div className={styles["room-content"]}>
                                        Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người...
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <span>Đăng kí thuê phòng</span>
                            </div>
                        </div>
                        <div className={styles["model-close"]} onClick={()=>setIsModalOpen(!isModalOpen)}>
                            <img src="/icon_close.png" alt="icon close"/>
                            <span>Đóng</span>
                        </div>
                    </div>
                </div>

                <div className={styles["model-container-mobile"]}>
                    <div className={styles["history-container"]}>
                        <div className={styles["room-img"]}>
                            <img src="/img_slide_room.png" alt=""/>
                            <div className={styles["room-img-item"]}>
                                <span>
                                    <img src="/img_slide_item_room_1.png" alt=""/>
                                </span>
                                <span>
                                    <img src="/img_slide_item_room_2.png" alt=""/>
                                </span>
                                <span>
                                    <img src="/img_slide_item_room_3.png" alt=""/>
                                </span>
                            </div>
                            <div className={styles["room-content"]}>
                                <p>Mô tả:</p>
                                <p>Phòng thoáng mát rộng rãi, điều hòa máy lạnh đầy đủ sức chứa 20 người</p>
                            </div>
                        </div>
                        <div className={styles["room-data"]}>
                            <div className={styles["room-data-item"]}>
                                <p>
                                    Số phòng
                                    <span className={styles["room-number"]}>245623</span>
                                </p>
                                <p>
                                    Giá tiền
                                    <span className={styles["room-data-price"]}>150.000đ/h</span>
                                </p>
                            </div>
                            <div className={styles["room-data-item"]}>
                                <div className={styles["room-data-date"]}>
                                    <p className={styles["container-title"]}>Các khung giờ đã đặt</p>
                                    <p>
                                        <DatePicker 
                                            format={dateFormatCreate}
                                            className={styles["date-picker-data"]} 
                                            suffixIcon={deleteIcon} 
                                            showTime
                                        />
                                    </p>
                                </div>
                            </div>

                            <div className={styles["room-data-item"]}>
                                <div className={styles["room-data-time"]}>
                                    <div className={styles["room-data-time-item"]}>
                                        <p>08:00 - 09:00</p>
                                        <p>15:00 - 16:45</p>
                                        <p>17:00 - 18:30</p>
                                    </div>
                                    <div className={styles["room-data-time-item"]}>
                                        <p>19:00 - 20:30</p>
                                        <p>21:00 - 22:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["room-data-item"]}>
                                <div className={styles["room-data-datatime"]}>
                                    <p className={styles["container-title"]}>Các khung giờ đã đặt</p>
                                    <RangePicker
                                        className={styles["date-picker-data-full"]} 
                                        suffixIcon={deleteIcon} 
                                        format={dateFormatCreate} 
                                        showTime
                                    />
                                </div>
                            </div>

                            <div className={styles["room-data-item"]}>
                                <p className={styles["lable-data"]}>Số người tham gia <span className={styles["compulsory"]}>*</span></p>
                                <input className={styles["input-data-full"]} placeholder="15"></input> 
                            </div>

                            <div className={styles["room-data-item"]}>
                                <p className={styles["lable-data"]}>Ghi chú <span className={styles["compulsory"]}>*</span></p>
                                <input className={styles["input-data-full"]} placeholder="Nhập nội dung ghi chú đặt phòng..."></input> 
                            </div>

                            <div className={styles["room-data-item"]}>
                                <div className={styles["item-data-full-button"]}>
                                    <button className={styles["item-save-full"]}>Gửi yêu cầu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Meeting;
