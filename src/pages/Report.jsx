import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";
import Divider from "@mui/material/Divider";
import ChartBox from "../components/ui/ChartBox";
import LineChart from "../components/complix/LineChart";
import BarChart from "../components/complix/BarChart";
import AreaChart from "../components/complix/AreaChart";
import DatePicker from "../components/ui/DatePicker";
import persian from "react-date-object/calendars/persian";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { ShowMissTime } from "../apis/Reports/ShowMissTime";
import { DateObject } from "react-multi-date-picker";
import { setForDate, setShowMissTime } from "../redux/slice/reportsSlice";
import Loader from "../components/ui/Loader";
import "../styles/pages/report.css";

function Report() {
  const { pathname } = useLocation();

  const reports = {
    loading: false,
    maxMinAvg: {
      max: {
        cameraId: 91,
        count: 9341,
        deviceName: "K01",
        location: "tehran",
        countPer100: "45.95",
      },
      min: {
        cameraId: 30,
        count: 6738,
        deviceName: "I99",
        location: "MASHHAD",
        countPer100: "72.61",
      },
    },
    rangeDate: [],
    rangeDateData: [
      {
        cameraId: 91,
        count: 9341,
        deviceName: "K01",
        location: "tehran",
        countPer100: "45.95",
      },
      {
        cameraId: 30,
        count: 6738,
        deviceName: "I99",
        location: "MASHHAD",
        countPer100: "72.61",
      },
    ],
  };

  return (
    <div>
      {reports.loading && (
        <Loader label="کمی صبر کنید" className={"reportsLoader"} />
      )}
      <Grid container spacing={2} className="myGrid">
        <Grid item xs={12} md={12} className="myGridTitle">
          <Grid>
            <div className="title">
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                className="divider"
              />
              <h3>آمار منطقه</h3>
            </div>
          </Grid>
          <Grid>
            <div className="title">
              <DatePicker />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="بیشترین درصد کارایی"
            colorNumber="green"
            number={`${reports.maxMinAvg?.max?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="کمترین درصد کارایی"
            colorNumber="red"
            number={`${reports.maxMinAvg?.min?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            title="میانگین کارایی همه دستگاه ها"
            number={`${(
              (+reports.maxMinAvg?.max?.countPer100 +
                +reports.maxMinAvg?.min?.countPer100) /
              2
            ).toFixed(2)}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox title="نرخ کارایی مطلوب" number="90%" />
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <LineChart className={"test"} data={reports.rangeDateData} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <BarChart className={"test"} data={reports.rangeDateData} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <AreaChart className={"test"} data={reports.rangeDateData} />
          </ChartBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;
