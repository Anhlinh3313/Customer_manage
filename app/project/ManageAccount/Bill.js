import styles from "../../../styles/ManageAccount.module.css";

const Bill = () => {
    return(
        <>
           <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Hóa đơn</div>
                <div className={styles["content-button"]}>
                    <button className={styles["content-button-calendar"]}> 
                        <p>Chọn từ ngày</p>        
                        <p className={styles["icon-calendar"]}>
                            <img src="/icon_calendar.png" alt=""/>
                        </p>
                    </button>
                </div>                       
            </div>

            <div className={styles["content-table"]}>
                <table>
                    <tbody>

                        <tr className={styles["table-header"]}>
                            <th className={styles["header-item"]}>Mã hóa đơn</th>
                            <th className={styles["header-item"]}>Kỳ</th>
                            <th className={styles["header-item"]}>Tháng</th>
                            <th className={styles["header-item"]}>Năm</th>
                            <th className={styles["header-item"]}>Nợ</th>
                            <th className={styles["header-item"]}>Trạng thái</th>
                            <th className={styles["header-item"]}>Tùy chọn</th>
                        </tr>

                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>HD 8665</td>
                            <td className={styles["content-item-period"]}>5</td>
                            <td className={styles["content-item-month"]}>Tháng 5</td>
                            <td className={styles["content-item-year"]}>2021</td>
                            <td className={styles["content-item-debt"]}>Nợ</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-erro"]}>Chưa thanh toán</span>
                            </td>
                            <td className={styles["content-item-action"]}>
                                <span className={styles["download"]}>Tải xuống</span>
                                <span className={styles["detail"]}>Chi tiết</span>
                            </td>
                        </tr>
                        
                        <tr className={styles["table-content"]}>
                            <td className={styles["content-item-code"]}>HD 8665</td>
                            <td className={styles["content-item-period"]}>5</td>
                            <td className={styles["content-item-month"]}>Tháng 5</td>
                            <td className={styles["content-item-year"]}>2021</td>
                            <td className={styles["content-item-debt"]}>Nợ</td>
                            <td className={styles["content-item-status"]}>
                                <span className={styles["status-success"]}>Hoàn thành</span>
                            </td>
                            <td className={styles["content-item-action"]}>
                                <span className={styles["download"]}>Tải xuống</span>
                                <span className={styles["detail"]}>Chi tiết</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Bill;
