import { DatePicker } from "antd";
import styles from "../../../styles/ManageAccount.module.css";
import IconDatepicker from "./Icon/IconDatepicker";

const Bill = () => {
    const dateFormatCreate = 'HH:mm - DD/MM/YYYY';
    const deleteIcon = <IconDatepicker />;

    return(
        <>
           <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Hóa đơn</div>
                <div className={styles["content-button"]}>
                    <button className={styles["content-button-calendar"]}> 
                        <DatePicker 
                        format={dateFormatCreate}
                        className={styles["date-picker-data"]} 
                        suffixIcon={deleteIcon} 
                        placeholder="Chọn ngày"
                        style={{border:'0px', backgroundColor: '#fff'}}
                        showTime/>
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
                            <td className={styles["content-item-action-car"]}>
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
                            <td className={styles["content-item-action-car"]}>
                                <span className={styles["download"]}>Tải xuống</span>
                                <span className={styles["detail"]}>Chi tiết</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles["content-table-mobile"]}>
               <div className={styles["table-item-mobile"]}>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["date-time"]}>
                            <span>kỳ 2 tháng  5 năm 2021</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>HD 8665</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa thanh toán</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Tùy chọn</span>
                        </p>
                        <p className={styles["data-download"]}>
                            <span>Tải xuống</span>
                        </p>
                   </div>
               </div>
               <div className={styles["line-mobile"]}></div>
               <div className={styles["table-item-mobile"]}>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["date-time"]}>
                            <span>kỳ 2 tháng  5 năm 2021</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>HD 8665</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa thanh toán</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Tùy chọn</span>
                        </p>
                        <p className={styles["data-download"]}>
                            <span>Tải xuống</span>
                        </p>
                   </div>
               </div>
               <div className={styles["line-mobile"]}></div>
               <div className={styles["table-item-mobile"]}>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["date-time"]}>
                            <span>kỳ 2 tháng  5 năm 2021</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>HD 8665</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa thanh toán</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Tùy chọn</span>
                        </p>
                        <p className={styles["data-download"]}>
                            <span>Tải xuống</span>
                        </p>
                   </div>
               </div>
               <div className={styles["line-mobile"]}></div>
               <div className={styles["table-item-mobile"]}>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["date-time"]}>
                            <span>kỳ 2 tháng  5 năm 2021</span>
                        </p>
                        <p className={styles["data-code"]}>
                            <span>HD 8665</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Trạng thái</span>
                        </p>
                        <p className={styles["data-status"]}>
                            <span>Chưa thanh toán</span>
                        </p>
                   </div>
                   <div className={styles["row-item-data"]}>
                        <p className={styles["status"]}>
                            <span>Tùy chọn</span>
                        </p>
                        <p className={styles["data-download"]}>
                            <span>Tải xuống</span>
                        </p>
                   </div>
               </div>
            </div>
        </>
    );
};

export default Bill;
