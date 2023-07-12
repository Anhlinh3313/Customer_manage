import { useState } from "react";
import MeetingHistory from "./MeetingHistory";
import Meeting from "./Meeting";

const MeetingManage = () => {
  const [isHeader, setIsHeader] = useState(true);

  const handleHistory = (event) => {
    console.log("handleHistory", event);
    setIsHeader(event);
  };

  const handleBack = (event) => {
    console.log("handleBack", event);
    setIsHeader(event);
  };

  return (
    <>
      {isHeader ? (
        <Meeting onchangeHistory={handleHistory} />
      ) : (
        <MeetingHistory onchangeBack={handleBack} />
      )}
    </>
  );
};

export default MeetingManage;
