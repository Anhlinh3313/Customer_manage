import Link from "antd/lib/typography/Link";
import styles from "../../styles/NewBuilding.module.css"
import React, { useEffect, useState } from "react";
import { reState } from "@useState/index";

function NewBuilding() {

    const { chromeWidth } = React.useContext(reState);
    const [widthWindow, setWidthWindow] = useState();

    useEffect(() => {
        setWidthWindow(chromeWidth);
      }, [chromeWidth]);
  
    return (
        <>
            <div className={styles["banner"]}>
                {widthWindow > 600 ?
                    <img src="./banner_new_building.png" alt="Banner" />

                 : 
                    <img src="./img_baner_mobile_new.png" alt="Banner" />
                }
            </div>
           <div className={styles["new"]}>
                {widthWindow > 600 ?
                    <>
                        <div className={styles["new-container"]}>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_1.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_2.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>

                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img__new_3.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>

                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_4.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                        </div>
                        
                        <div className={styles["new-container"]}>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_5.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_6.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_7.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_8.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                        </div>
                        
                        <div className={styles["new-container"]}>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_9.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_10.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_11.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
                                <p className={styles["img_new"]}>
                                    <img src="./img_new_12.png" alt="new" />
                                </p>
                                <p className={styles["title"]}>Đông Dương Land nâng cấp quản lý kinh doanh dự án Golden City nhờ ...</p>
                                <p className={styles["time"]}>
                                    <img src="./icon_time_new.png" alt="icon time" />
                                    <span>11: 20 - 25/11/2022</span>
                                </p>
                            </Link>
                        </div>
                    </>
                :
                    <>
                         <div className={styles["new-container"]}>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                            <Link className={styles["new-item"]} href="/new-building/chi-tiet">
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
                            </Link>
                        </div>
                    </>
                }
           </div>
           <div className={styles["paginate"]}>
                <div className={styles["paginate-container"]}>
                    <div className={styles["paginate-left"]}></div>
                    <div className={styles["paginate-center"]}>
                        <div className={styles["paginate-next_left"]}>
                            <img src="./icon_paginate_left.png" alt="icon paginate left " />
                        </div>
                        <div>
                            <p className={styles["paginate-check"]}>1</p>
                        </div>
                        <div>
                            <p className={styles["paginate-un-check"]}>2</p>
                        </div>
                        <div>
                            <p className={styles["paginate-un-check"]}>...</p>
                        </div>
                        <div>
                            <p className={styles["paginate-un-check"]}>10</p>
                        </div>
                        <div className={styles["paginate-next_right"]}>
                            <img src="./icon_paginate_right.png" alt="icon paginate right" />
                        </div>
                    </div>
                    <div className={styles["paginate-right"]}></div>
                </div>
           </div>
        </>
    );
}

export default NewBuilding;