import styles from "../../styles/ArchirecturalDrawing.module.css"
import React from 'react';
import { Checkbox } from 'antd';

function ArchirecturalDrawing() {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
        <>
            <div className={styles["banner"]}>
                <img src="./banner_archirectural_drawing.png" alt="Banner" />
            </div>
            <div className={styles["container"]}>
                <div className={styles["container-menu"]}>
                    <div className={styles["container-list-menu"]}>
                        <div className={styles["menu"]}>Trạng thái: </div>

                        <div className={styles["menu-item"]}>
                            <span className={styles["menu-checkbox"]}>
                                <img src="./check_all.png" alt="check all" />
                            </span>
                            <span className={styles["menu-name"]}>Tất cả</span>
                        </div>
                        <div className={styles["menu-item"]}>
                            <span className={styles["menu-checkbox"]}>
                                <img src="./check_success.png" alt="check success" />
                            </span>
                            <span className={styles["menu-name"]}>Thành công</span>
                        </div>
                        <div className={styles["menu-item"]}>
                            <span className={styles["menu-checkbox"]}>
                                <img src="./check_maintenance.png" alt="check maintenance" />
                            </span>
                            <span className={styles["menu-name"]}>Đang bảo trì</span>
                        </div>
                        <div className={styles["menu-item"]}>
                            <span className={styles["menu-checkbox"]}>
                                <img src="./check_repair.png" alt="check repair" />
                            </span>
                            <span className={styles["menu-name"]}>Đang sữa chữa</span>
                        </div>
                        <div className={styles["menu-item"]}>
                            <span className={styles["menu-checkbox"]}>
                                <img src="./check_all.png" alt="check all" />
                            </span>
                            <span className={styles["menu-name"]}>Đang xây dựng</span>
                        </div>
                    </div>
                </div>
                <div className={styles["container-table"]}>
                    <div className={styles["table"]}>
                        <table>
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
            </div>
        </>
    );
}

export default ArchirecturalDrawing;