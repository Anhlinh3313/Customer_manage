import styles from "../../../../styles/ManageAccount.module.css";

const Meeting = ({onchangeHistory}) => {
    return(
        <>
            <div>
                <div className={styles["content-header"]}>
                    <div className={styles["content-title"]}>Danh sách phòng họp</div>
                    <div className={styles["content-button"]}>
                        <button className={styles["button-history"]} onClick={()=>onchangeHistory(false)}>Lịch sử thuê phòng</button>
                    </div>  
                </div>
            
                <div className={styles["content-table"]}>
                    <div className={styles["list-room"]}>
                        <div className={styles["room"]}>
                            <div className={styles["room-item"]}>
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

                            <div className={styles["room-item"]}>
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
                            
                            <div className={styles["room-item"]}>
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
                            <div className={styles["room-item"]}>
                                <img src="/img_room_4.png" alt=""/>
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

                            <div className={styles["room-item"]}>
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
                            
                            <div className={styles["room-item"]}>
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
        </>
    );
};

export default Meeting;
