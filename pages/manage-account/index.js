import { useState } from "react";
import styles from "../../styles/ManageAccount.module.css"
import Profile from "../../app/project/ManageAccount/Profile/Profile";
import Bill from "../../app/project/ManageAccount/Bill";
import CarService from "../../app/project/ManageAccount/CarService";
import DeliveryService from "../../app/project/ManageAccount/DeliveryService";
import OvertimeService from "../../app/project/ManageAccount/OvertimeService";
import RequestSend from "../../app/project/ManageAccount/RequestSend";
import Chart from "../../app/project/ManageAccount/Chart";
import MeetingManage from "../../app/project/ManageAccount/Meeting/index";

function ManageAccount() {
    const [slugMenu, setSlugMenu] = useState("info-account");
    const [slugMenuService, setSlugMenuService] = useState("");
    const [isMenuService, setisMenuService] = useState(false);
    const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

    const onClickMenu =(event)=>{
        setSlugMenu(event);
        if(event== "register-service"){
            setisMenuService(!isMenuService);
        }else{
            setisMenuService(false);
        }
    }

    const onClickMenuService =(event)=>{
        setSlugMenuService(event);
    }
    return (
        <>
           <div className={styles["manage-account"]}>
                <div className={styles["menu"]}>
                    <div className={styles["container-menu"]}>
                        <div className={styles["container"]}>
                            <div className={styles["header"]}>
                                <p className={styles["header-title"]}>
                                    <span>Quản lý</span>   
                                </p>
                                <p className={styles["header-img"]}>
                                    <span>
                                        <img className={styles["icon-menu-pc"]} src="/icon_manage.png" alt=""/>
                                    </span>
                                    <span onClick={()=>setIsShowMenuMobile(true)}>
                                        <img className={styles["icon-menu-mobile"]} src="/icon_list_menu.png" alt=""/>
                                    </span>
                                </p>
                            </div>

                            <div className={styles["list-menu-pc"]}>
                                <div className={slugMenu == "info-account" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("info-account")}>
                                    <span>
                                        {
                                            slugMenu == "info-account" ?
                                                <img src="/icon_info_check.png" alt=""/>

                                            : 
                                                <img src="/icon_info_uncheck.png" alt=""/>

                                        }
                                    </span>
                                    <span className={styles["item-menu-title"]}>Thông tin của tôi</span>
                                </div>
                                <div className={styles["manage-info"]}>
                                    <p className={styles["manage-info-title"]}>Quản lý thông tin</p>
                                    <div className={styles["manage-info-item"]}>
                                        <div className={slugMenu == "bill" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("bill")}>
                                            <span>
                                                {
                                                    slugMenu == "bill" ?
                                                        <img src="/icon_bill_check.png" alt=""/>
                                                    : 
                                                        <img src="/icon_bill_un_check.png" alt=""/>
                                                }
                                            </span>
                                            <span className={styles["item-menu-title"]}>Hóa đơn</span>
                                        </div>
                                    </div>
                                    <div className={styles["manage-info-item"]}>
                                        <div className={slugMenu == "register-service" && isMenuService ? styles["item-menu-check-parent"] : styles["item-menu-un-check-parent"] }>
                                            <div className={styles["register-service-menu"]}  onClick={()=>onClickMenu("register-service")}>
                                                <div className={styles["icon-menu"]}>
                                                    {
                                                        slugMenu == "register-service" && isMenuService ?
                                                            <img src="/icon_bill_check.png" alt=""/>
                                                        : 
                                                            <img src="/icon_bill_un_check.png" alt=""/>
                                                    }
                                                </div>
                                                <div className={styles["item-menu-title"]}>Đăng ký dịch vụ</div>
                                                <div className={styles["icon-down"]}>
                                                    {
                                                        slugMenu == "register-service" && isMenuService ?
                                                            <img src="/arrow_drop_down_check.png" alt=""/>
                                                        : 
                                                            <img src="/arrow_drop_down_un_check.png" alt=""/>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                slugMenu == "register-service" && isMenuService? 
                                                <p className={styles["servive"]}>
                                                    <ul >
                                                        <li  className={slugMenuService == "service-car"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-car")}>Dịch vụ xe</li>
                                                        <li className={slugMenuService == "service-delyverr"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-delyverr")}>Dịch vụ vận chuyển</li>
                                                        <li className={slugMenuService == "service-overtime"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-overtime")}>Dịch vụ làm thêm giờ</li>
                                                        <li className={slugMenuService == "service-meeting"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-meeting")}>Thuê phòng họp</li>
                                                    </ul>
                                                </p>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>

                                    <div className={styles["manage-info-item"]}>
                                        <div className={slugMenu == "request-send" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("request-send")}>
                                            <span>
                                                {
                                                    slugMenu == "request-send" ?
                                                        <img src="/icon_request_check.png" alt=""/>
                                                    : 
                                                        <img src="/icon_request_un_check.png" alt=""/>
                                                }
                                            </span>
                                            <span className={styles["item-menu-title"]}>Gửi yêu cầu</span>
                                        </div>
                                    </div>

                                    <div className={styles["manage-info-item"]}>
                                        <div className={slugMenu == "chart" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("chart")}>
                                            <span>
                                                {
                                                    slugMenu == "chart" ?
                                                        <img src="/icon_chart_check.png" alt=""/>
                                                    : 
                                                        <img src="/icon_chart_un_check.png" alt=""/>
                                                }
                                            </span>
                                            <span className={styles["item-menu-title"]}>Biểu đồ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isShowMenuMobile ?
                                <div className={styles["list-menu-mobile"]} >
                                    <div className={styles["menu-mobile-header"]}>
                                        <p className={styles["menu-mobile-header-text"]}> Quản lý</p>
                                        <p className={styles["menu-mobile-header-img"]} onClick={()=>setIsShowMenuMobile(false)}>
                                            <img src="/icon_close_mobile.png" alt=""/>
                                        </p>
                                    </div>
                                    <div className={styles["line-mobile"]}></div>
                                    <div className={slugMenu == "info-account" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("info-account")}>
                                        <span>
                                            {
                                                slugMenu == "info-account" ?
                                                    <img src="/icon_info_check.png" alt=""/>

                                                : 
                                                    <img src="/icon_info_uncheck.png" alt=""/>

                                            }
                                        </span>
                                        <span className={styles["item-menu-title"]}>Thông tin của tôi</span>
                                    </div>
                                    <div className={styles["manage-info"]}>
                                        <p className={styles["manage-info-title"]}>Quản lý thông tin</p>
                                        <div className={styles["manage-info-item"]}>
                                            <div className={slugMenu == "bill" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("bill")}>
                                                <span>
                                                    {
                                                        slugMenu == "bill" ?
                                                            <img src="/icon_bill_check.png" alt=""/>
                                                        : 
                                                            <img src="/icon_bill_un_check.png" alt=""/>
                                                    }
                                                </span>
                                                <span className={styles["item-menu-title"]}>Hóa đơn</span>
                                            </div>
                                        </div>
                                        <div className={styles["manage-info-item"]}>
                                            <div className={slugMenu == "register-service" && isMenuService ? styles["item-menu-check-parent"] : styles["item-menu-un-check-parent"] }>
                                                <div className={styles["register-service-menu"]}  onClick={()=>onClickMenu("register-service")}>
                                                    <div className={styles["icon-menu"]}>
                                                        {
                                                            slugMenu == "register-service" && isMenuService ?
                                                                <img src="/icon_bill_check.png" alt=""/>
                                                            : 
                                                                <img src="/icon_bill_un_check.png" alt=""/>
                                                        }
                                                    </div>
                                                    <div className={styles["item-menu-title"]}>Đăng ký dịch vụ</div>
                                                    <div className={styles["icon-down"]}>
                                                        {
                                                            slugMenu == "register-service" && isMenuService ?
                                                                <img src="/arrow_drop_down_check.png" alt=""/>
                                                            : 
                                                                <img src="/arrow_drop_down_un_check.png" alt=""/>
                                                        }
                                                    </div>
                                                </div>
                                                {
                                                    slugMenu == "register-service" && isMenuService? 
                                                    <p className={styles["servive"]}>
                                                        <ul >
                                                            <li  className={slugMenuService == "service-car"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-car")}>Dịch vụ xe</li>
                                                            <li className={slugMenuService == "service-delyverr"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-delyverr")}>Dịch vụ vận chuyển</li>
                                                            <li className={slugMenuService == "service-overtime"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-overtime")}>Dịch vụ làm thêm giờ</li>
                                                            <li className={slugMenuService == "service-meeting"? styles["check"] : styles["un-check"]} onClick={()=>onClickMenuService("service-meeting")}>Thuê phòng họp</li>
                                                        </ul>
                                                    </p>
                                                    :
                                                    <></>
                                                }
                                            </div>
                                        </div>

                                        <div className={styles["manage-info-item"]}>
                                            <div className={slugMenu == "request-send" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("request-send")}>
                                                <span>
                                                    {
                                                        slugMenu == "request-send" ?
                                                            <img src="/icon_request_check.png" alt=""/>
                                                        : 
                                                            <img src="/icon_request_un_check.png" alt=""/>
                                                    }
                                                </span>
                                                <span className={styles["item-menu-title"]}>Gửi yêu cầu</span>
                                            </div>
                                        </div>

                                        <div className={styles["manage-info-item"]}>
                                            <div className={slugMenu == "chart" ? styles["item-menu-check"] : styles["item-menu-un-check"] } onClick={()=>onClickMenu("chart")}>
                                                <span>
                                                    {
                                                        slugMenu == "chart" ?
                                                            <img src="/icon_chart_check.png" alt=""/>
                                                        : 
                                                            <img src="/icon_chart_un_check.png" alt=""/>
                                                    }
                                                </span>
                                                <span className={styles["item-menu-title"]}>Biểu đồ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                           
                        </div>
                    </div>
                </div>
                <div className={styles["content"]}>
                    {slugMenu == "info-account" ?
                            <Profile/>
                        :
                            <></>                        
                    }
                    {slugMenu == "bill" ?
                            <Bill/>
                        :
                            <></>                        
                    }
                    {slugMenu == "register-service" &&  slugMenuService == "service-car"?
                            <CarService/>
                        :
                            <></>                        
                    }
                    {slugMenu == "register-service" &&  slugMenuService == "service-delyverr"?
                            <DeliveryService/>
                        :
                            <></>                        
                    }
                    {slugMenu == "register-service" &&  slugMenuService == "service-overtime"?
                            <OvertimeService/>
                        :
                            <></>                        
                    }
                    {slugMenu == "register-service" &&  slugMenuService == "service-meeting"?
                            <MeetingManage/>
                        :
                            <></>                        
                    }
                    {slugMenu == "request-send"?
                            <RequestSend/>
                        :
                            <></>                        
                    }
                    {slugMenu == "chart"?
                            <Chart/>
                        :
                            <></>                        
                    }
                </div>
           </div>
        </>
    );
}

export default ManageAccount;