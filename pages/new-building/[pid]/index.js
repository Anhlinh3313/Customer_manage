import React, { useEffect, useState } from "react";
import styles from "../../../styles/NewBuildingDetail.module.css"
import Link from "antd/lib/typography/Link";
import { reState } from "@useState/index";

function NewBuildingDetail() {
    const { chromeWidth } = React.useContext(reState);
    const [widthWindow, setWidthWindow] = useState();

    useEffect(() => {
        setWidthWindow(chromeWidth);
    }, [chromeWidth]);

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-left"]}>
                    <div className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ App Mobile Landsoft</div>
                    <div>
                        <img src="../../new_detail.png" alt="new detail" />
                    </div>
                    <div>
                        <div>
                            Là một trong những doanh nghiệp có uy tín trong thị trường bất động sản, Đông Dương Land luôn đặt tiêu chí đầu tiên trong kinh doanh chính là tối ưu hiệu quả quản lý kinh doanh dự án và tăng cường công tác chăm sóc khách hàng.
                            <br></br>
                            <ul>
                                <li> Môi giới bất động sản Vinh Nhân và hành trình cải tổ bộ máy quản lý kinh doanh bằng công nghệ</li>
                                <li>Sàn giao dịch bất động sản Crystal xây dựng nền tảng kinh doanh vững chắc bằng phần mềm</li>
                                <li>Bất động sản Khu Đất số hóa quy trình quản lý kinh doanh nhằm tăng trưởng doanh số</li>
                            </ul>
                            <br></br>
                            Chính vì điều này mà vừa qua công ty TNHH tập đoàn Đông Dương Land đã sử dụng App Mobile Landsoft để nâng cấp quản lý cho dự án Golden City, mang lại giải pháp quản lý kinh doanh hoàn hảo cho người dùng trên nền tảng di động.
                            <br></br>
                            Đông Dương Land với mục đích số hóa quản lý dự án Golden City trên di động
                            <br></br>
                            Công ty TNHH tập đoàn Đông Dương Land là chi nhánh của địa ốc Hoàng Quân, doanh nghiệp mới được thành lập từ tháng 6 và tới nay đã hoạt động được 4 tháng. Mặc dù mới được đăng ký kinh doanh không lâu nhưng Đông Dương Land lại có nền tảng nhân sự, bộ máy quản lý vững chắc từ địa ốc Hoàng Quân, bao gồm ứng dụng phần mềm quản lý kinh doanh bất động sản Landsoft của DIP Việt Nam để số hóa bộ máy quản lý doanh nghiệp ngay từ đầu.
                            Chính điều này đã xây dựng cho Đông Dương Land nền tảng quản lý dự án khoa học và hiện đại từ thời điểm mới hoạt động, tiếp đó nhanh chóng tạo dựng dấu ấn trên thị trường bất động sản tại thành phố Hồ Chí Minh.
                            Giờ đây Đông Dương Land cũng triển khai tư vấn kinh doanh dự án bất động sản Golden City nhằm mang tới cho khách hàng những sản phẩm bất động sản chất lượng và uy tín.
                            Tuy nhiên, để nâng cao hiệu quả quản lý kinh doanh dự án Golden City càng thêm tiện dụng hơn thì Đông Dương Land không thể chỉ ứng dụng phần mềm Landsoft của địa ốc Hoàng Quân vào quản lý dự án, thay vào đó doanh nghiệp cần có một ứng dụng riêng biệt để phục vụ riêng cho mục đích kinh doanh dự án Golden City, nâng cao hiệu suất hoạt động cho riêng dự án của doanh nghiệp.
                        </div>
                    </div>
                    <div>
                        <img src="../../new_detail2.png" alt="new detail 2" />
                    </div>
                    <div>
                        <p>
                            Chính vì vậy Đông Dương Land đã quyết định phát triển riêng App Mobile Landsoft cho riêng dự án Golden City dựa trên hệ thống cơ sở dữ liệu phần mềm Landsoft của địa ốc Hoàng Quân trong dự án Golden City.
                            Ứng dụng được DIP Việt Nam xây dựng App Booking độc lập cho một dự án duy nhất là Golden City, trong đó những dữ liệu app từ database trên phần mềm Landsoft Hoàng Quân. Mặc dù vậy App Mobile Landsoft Golden City vẫn đảm bảo hoàn toàn độc lập với App Hoàng Quân Land và chỉ dùng cho 1 dự án là Golden City.
                            App Landsoft Golden City mang lại thay đổi gì trong quản lý của Đông Dương Land?
                            <br></br>
                            Là ứng dụng quản lý kinh doanh bất động sản trên nền tảng di động, App Landsoft Golden City được DIP Việt Nam xây dựng hoàn toàn độc lập với App Hoàng Quân Land, mang lại cho Đông Dương Land giải pháp quản lý và chăm sóc khách hàng hiệu quả trên nền tảng di động. Điều này cũng đảm bảo tính chuyên nhất và bảo mật cao, tối ưu được hiệu quả kinh doanh cũng như quản lý của Đông Dương Land trong quá trình kinh doanh.
                            Với sự trợ giúp của App Mobile Golden City, toàn bộ thông tin khách hàng cùng danh sách khách hàng đều được quản lý khoa học trên nền tảng di động, qua đó người dùng có thể trực tiếp thêm mới khách hàng là cá nhân hoặc công ty ngay trên ứng dụng di động, giúp việc quản lý khách hàng càng thêm nhanh chóng, tiết kiệm thời gian hơn.
                            <br></br>
                            Đặc biệt, App Mobile Golden City còn tích hợp thêm tính năng cập nhật lịch sử tương tác làm việc với khách hàng, ghi nhận lại danh sách các giao dịch đang thực hiện với chủ đầu tư. Điều này giúp người quản lý vừa có thể nắm bắt được quá trình làm việc với khách hàng của từng nhân viên tốt hơn mà còn kiểm soát được toàn bộ giao dịch bất động sản thực hiện với chủ đầu tư, hỗ trợ việc quản lý kinh doanh, chăm sóc và tư vấn khách hàng càng thêm chuyên nghiệp.
                        </p>
                    </div>
                </div>
                <div className={styles["container-right"]}>
                    <div className={styles["title-right"]}>Tin tức khác</div>

                    { widthWindow > 600 ?
                            <>
                                <div className={styles["container-right-item"]}>
                                    <img src="../../new_detail3.png" alt="new detail" />
                                    <p className={styles["content-right"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                    <p className={styles["time"]}>
                                        <img src="../../icon_time_new.png" alt="icon time" />
                                        <span>11: 20 - 25/11/2022</span>
                                    </p>
                                </div>

                                <div className={styles["container-right-item"]}>
                                    <img src="../../new_detail_4.png" alt="new detail" />
                                    <p className={styles["content-right"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                    <p className={styles["time"]}>
                                        <img src="../../icon_time_new.png" alt="icon time" />
                                        <span>11: 20 - 25/11/2022</span>
                                    </p>
                                </div>

                                <div className={styles["container-right-item"]}>
                                    <img src="../../new_detail_5.png" alt="new detail" />
                                    <p className={styles["content-right"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                    <p className={styles["time"]}>
                                        <img src="../../icon_time_new.png" alt="icon time" />
                                        <span>11: 20 - 25/11/2022</span>
                                    </p>
                                </div>
                            </>
                        :
                            <div className={styles["list-new"]}>
                                <div className={styles["container-right-item"]}>
                                    <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                        <div className={styles["new-right-item-one"]}>
                                            <div className={styles["new-right-item-one-content"]}>
                                                <div className={styles["content-right"]}>
                                                    <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                                    <p className={styles["new-left-time"]}>
                                                        <img className={styles["new-clock"]} src="./../clock.png" alt="Banner" ></img>
                                                        <span>11: 20 - 25/11/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles["container-right-item"]}>
                                    <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                        <div className={styles["new-right-item-one"]}>
                                            <div className={styles["new-right-item-one-content"]}>
                                                <div className={styles["content-right"]}>
                                                    <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                                    <p className={styles["new-left-time"]}>
                                                        <img className={styles["new-clock"]} src="./../clock.png" alt="Banner" ></img>
                                                        <span>11: 20 - 25/11/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles["container-right-item"]}>
                                    <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                        <div className={styles["new-right-item-one"]}>
                                            <div className={styles["new-right-item-one-content"]}>
                                                <div className={styles["content-right"]}>
                                                    <p className={styles["new-left-title-item"]}>Đông Dương Land nâng  cấp quản lý kinh doanh dự án Golde...</p>
                                                    <p className={styles["new-left-time"]}>
                                                        <img className={styles["new-clock"]} src="./../clock.png" alt="Banner" ></img>
                                                        <span>11: 20 - 25/11/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                    }
                </div>
            </div>
        </>
    );
}

export default NewBuildingDetail;