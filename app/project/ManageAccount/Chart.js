import styles from "../../../styles/ManageAccount.module.css";

const Chart = () => {

    return(
        <>
            <div className={styles["content-header"]}>
                <div className={styles["content-title"]}>Biểu đồ</div>
            </div>
            <div>
                <img src="/img_chart.png" alt="icon close"/>
            </div>
        </>
    );
};

export default Chart;
