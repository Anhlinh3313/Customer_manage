import styles from "../../styles/Home.module.css"

function Home() {
    return (
        <>
            <div className={styles["banner"]}>
                <img src="./banner.png" alt="Banner" />
            </div>
            <div className={styles["banner_sider"]}>
                <div className={styles["banner_sider_connent"]}>
                    <h2>Đăng ký check in mặt bằng</h2>
                    <h4>Đăng ký check-in mặt bằng là quá trình cho phép khách hàng đăng ký sự hiện diện của họ tại một địa điểm cụ thể. Điều này có thể được thực hiện thông qua các trang web hoặc ứng dụng di động, và thông tin đăng ký của khách hàng được lưu trữ trong một cơ sở dữ liệu để có thể sử dụng sau này.</h4>
                    <div className={styles["register-banner_sider"]}>
                        <butom>
                            <span className={styles["register-text"]}>Đăng ký check in</span>
                        </butom>
                    </div>
                </div>
                <div className={styles["banner_sider_img"]}>
                    <img src="./img-register-content.png" alt="Banner" />
                </div>
            </div>
           <div className={styles["archirectural-drawing"]}>
                <div className={styles["title-archirectural-drawing"]}>
                    <div className={styles["header"]}>
                        <p>Sơ đồ mặt bằng</p>
                    </div>
                    <div className={styles["view-total"]}>
                        <span>Xem tất cả</span>
                        <img src="./icon_next.png" alt="Banner" ></img>
                    </div>
                </div>
                <div className={styles["table"]}>
                    <table id="rooms">
                        <tbody>
                            <tr className={styles["table-header"]}>
                                <th className={styles["header-item"]}>Tầng 01</th>
                                <th className={styles["header-item"]}>Tầng 02</th>
                                <th className={styles["header-item"]}>Tầng 03</th>
                                <th className={styles["header-item"]}>Tầng 04</th>
                                <th className={styles["header-item"]}>Tầng 05</th>
                                <th className={styles["header-item"]}>Tầng 06</th>
                                <th className={styles["header-item"]}>Tầng 07</th>
                                <th className={styles["header-item"]}>Tầng 08</th>
                                <th className={styles["header-item"]}>Tầng 09</th>
                                <th className={styles["header-item"]}>Tầng 10</th>
                                <th className={styles["header-item"]}>Tầng 11</th>
                                <th className={styles["header-item"]}>Tầng 12</th>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01 
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>      
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["item-green"]}>A-01-01
                                    <div className={styles["popup-detail"]}>
                                        <div className={styles["title-status"]}>
                                            <p className={styles["status"]}>Đã bàn giao thành công!</p>
                                        </div>
                                        <div className={styles["header-content"]}>
                                            <div>
                                                <span className={styles["header"]}>Mã số:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Số nhà:</span>
                                                <span className={styles["content"]}>A-10-08</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Tổng:</span>
                                                <span className={styles["content"]}>Tầng 10</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Diện tích:</span>
                                                <span className={styles["content"]}>238 m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Đơn giá:</span>
                                                <span className={styles["content"]}>/m2</span>
                                            </div>
                                            <div>
                                                <span className={styles["header"]}>Giá bán/ Cho thuê:</span>
                                                <span className={styles["content"]}>...</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-none"]}>A-01-01 </td>
                                <td className={styles["item-none"]}>A-01-01 </td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-none"]}>A-01-01 </td>
                                <td className={styles["item-none"]}>A-01-01 </td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-none"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                            <tr>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-green"]}>A-01-01 </td>
                                <td className={styles["item-yallow"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-red"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                                <td className={styles["item-green"]}>A-01-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles["new"]}>
                <div className={styles["title-archirectural-drawing"]}>
                    <div className={styles["header"]}>
                        <p>Tin tức</p>
                    </div>
                    <div className={styles["view-total"]}>
                        <span>Xem tất cả</span>
                        <img src="./icon_next.png" alt="next" ></img>
                    </div>
                </div>
                <div className={styles["new-item"]}>
                    <div className={styles["new-left"]}>
                        <div className={styles["content"]}>
                            <p className={styles["new-left-title"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golden City nhờ App</p>
                            <p className={styles["new-left-time"]}>
                                <img className={styles["new-clock"]} src="./clock.png" alt="Banner" ></img>
                                <span>11: 20 - 25/11/2022</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["new-right"]}>
                        <div className={styles["new-right-item"]}>
                            <div className={styles["new-right-item-one"]}>
                                <div className={styles["new-right-item-one-content"]}>
                                    <div className={styles["content-right"]}>
                                        <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                        <p className={styles["new-left-time"]}>
                                            <img className={styles["new-clock"]} src="./clock.png" alt="Banner" ></img>
                                            <span>11: 20 - 25/11/2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["new-right-item-two"]}>
                                <div className={styles["new-right-item-two-content"]}>
                                    <div className={styles["content-right"]}>
                                        <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                        <p className={styles["new-left-time"]}>
                                            <img className={styles["new-clock"]} src="./clock.png" alt="Banner" ></img>
                                            <span>11: 20 - 25/11/2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["new-right-item-page-two"]}>
                            <div className={styles["new-right-item-one"]}>
                                <div className={styles["new-right-item-three-content"]}>
                                    <div className={styles["content-right"]}>
                                        <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                        <p className={styles["new-left-time"]}>
                                            <img className={styles["new-clock"]} src="./clock.png" alt="Banner" ></img>
                                            <span>11: 20 - 25/11/2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["new-right-item-two"]}>
                                <div className={styles["new-right-item-four-content"]}>
                                    <div className={styles["content-right"]}>
                                        <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                        <p className={styles["new-left-time"]}>
                                            <img className={styles["new-clock"]} src="./clock.png" alt="Banner" ></img>
                                            <span>11: 20 - 25/11/2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["contact"]}>
                <div className={styles["contact-bg"]}>
                    <div className={styles["branch"]}>
                        <div className={styles["form-branch"]}>
                            <p className={styles["provice"]}>Hà Nội</p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_address.png" alt="address" />
                                </span>
                                <span className={styles["icon-text"]}>Tầng 1, Tháp The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Tp. Hà Nội.</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_phone.png" alt="phone" />
                                    </span>
                                <span className={styles["icon-text"]}>+84 24 3785 5588</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_mail.png" alt="mail" />
                                </span>
                                <span className={styles["icon-text"]}>info@bitexco.com.vn</span>
                            </p>
                        </div>
                        <div className={styles["line"]}>
                        </div>
                        <div className={styles["form-branch"]}>
                            <p className={styles["provice"]}>Hồ Chí Minh</p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_address.png" alt="address" />
                                </span>
                                <span className={styles["icon-text"]}>Tầng 48, Tòa nhà Bitexco Financial Tower, số 2 Hải Triều, phường Bến Nghé, quận 1, TP.Hồ Chí Minh.</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_phone.png" alt="phone" />
                                    </span>
                                <span className={styles["icon-text"]}>+84 24 3785 5588</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_mail.png" alt="mail" />
                                </span>
                                <span className={styles["icon-text"]}>info@bitexco.com.vn</span>
                            </p>
                        </div>
                        <div className={styles["line"]}>
                        </div>
                        <div className={styles["form-branch"]}>
                            <p className={styles["provice"]}>Thái Bình</p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_address.png" alt="address" />
                                </span>
                                <span className={styles["icon-text"]}>Số 102A, phố Quang Trung, phường Trần Hưng Đạo, thành phố Thái Bình, Tỉnh Thái Bình</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_phone.png" alt="phone" />
                                    </span>
                                <span className={styles["icon-text"]}>+84 24 3785 5588</span>
                            </p>
                            <p className={styles["form-branch-item"]}>
                                <span>
                                    <img className={styles["icon-branch"]} src="./icon_mail.png" alt="mail" />
                                </span>
                                <span className={styles["icon-text"]}>info@bitexco.com.vn</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["form-contact"]}>
                        <div className={styles["form-contact-header"]}>
                            <p className={styles["header-title"]}>liên hệ</p>
                            <p className={styles["header-content"]}>Xin mời bạn nhập thông tin liên hệ</p>
                            <p className={styles["contact-input"]}>
                                <input className={styles["form-input"]} placeholder="Họ và tên..."></input>
                            </p>
                            <p className={styles["contact-input"]}>
                                <input className={styles["form-input"]} placeholder="Số điện thoại..."></input>
                            </p>
                            <div className={styles["contact-input"]}>
                                <div className={styles["form-select"]}>
                                    <span>Chọn yêu cầu liên hệ</span>
                                    <span>            
                                        <img className={styles["icon-branch"]} src="./icon_select.png" alt="mail" />
                                    </span>
                                </div>  
                            </div>
                            <p className={styles["contact-input"]}>
                                <input className={styles["form-input-description"]} placeholder="Nhập thông tin mô tả nếu có"></input>
                            </p>
                            <p>
                                <button className={styles["send-information"]}>Gửi thông tin</button>
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default Home;