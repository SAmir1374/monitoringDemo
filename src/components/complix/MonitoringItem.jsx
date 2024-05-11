import React from "react";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";
import GlassCover from "../ui/GlassCover";
import { TiBatteryCharge } from "react-icons/ti";
import { GiWaterDrop } from "react-icons/gi";
import Sencor from "../ui/Sencor";
import Descreption from "../ui/Descreption";
import defualtmonitoring from "../images/defualtmonitoring.jpg";
import "../../styles/ui/monitoringItem.css";

function MonitoringItem({ className, src = defualtmonitoring, temperature = "20", wet = "19.8", location, date, children }) {
  return (
    <div className={`monitor ${className}`} style={{ backgroundImage: `url(${src || defualtmonitoring})` }}>
      <GlassCover className={`glassCover`}>
        <div className="secsor-group">
          <Sencor icon={<TiBatteryCharge />} />
          <Sencor icon={<LiaTemperatureHighSolid />} lable={`${temperature}`} />
          <Sencor icon={<GiWaterDrop />} lable={wet} />
        </div>
        <div className="description-group">
          <Descreption desc={location} date={date} />
        </div>
      </GlassCover>
    </div>
  );
}

export default MonitoringItem;
