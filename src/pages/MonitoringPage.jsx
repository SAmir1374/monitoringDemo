import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ModalButton from "../components/ui/ModalButton";
import { useSelector } from "react-redux";
import MySkeleton from "../components/ui/Skeleton";
import store from "../redux/store";
import { Monitoring } from "../apis/ImageWall/monitoring";
import { setImgWall } from "../redux/slice/imgWall";
import defualtmonitoring from '../components/images/defualtmonitoring.jpg'

function MonitoringPage() {
  // const { imgWall } = useSelector((store) => store.imgWall);

  // const imgWall = [];
  const imgWall = [
    {
      id: 1,
      imageUrl: defualtmonitoring,
      imageName: "ه راه پمپ بنزین",
      imageDatatype: "1",
      temperature: "5.29",
      imageDateTime: "2023-11-15T00:16:00",
      humidity: "65",
      cameraId: 26,
    },
    {
      id: 2,
      imageUrl: defualtmonitoring,
      imageName: "20231115-001600.jpgسه راه بنزین",
      imageDatatype: "1",
      temperature: "5.29",
      imageDateTime: "2023-11-15T00:16:00",
      humidity: "65",
      cameraId: 26,
    },
    {
      id: 3,
      imageUrl: defualtmonitoring,
      imageName: "کرج",
      imageDatatype: "1",
      temperature: "5.29",
      imageDateTime: "2023-11-15T00:16:00",
      humidity: "65",
      cameraId: 26,
    },
    {
      id: 4,
      imageUrl: defualtmonitoring,
      imageName: "مشهد",
      imageDatatype: "1",
      temperature: "5.29",
      imageDateTime: "2023-11-15T00:16:00",
      humidity: "65",
      cameraId: 26,
    },
    {
      id: 5,
      imageUrl: defualtmonitoring,
      imageName: "تهران",
      imageDatatype: "1",
      temperature: "5.29",
      imageDateTime: "2023-11-15T00:16:00",
      humidity: "65",
      cameraId: 26,
    },
  ];

  // const myMonitoringData = Monitoring();
  const countSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  // setTimeout(() => { imgWall.push(...data) }, 2000);

  useEffect(() => {
    // store.dispatch(setImgWall(myMonitoringData.data));
  }, [imgWall]);

  return (
    <Grid container justifyContent={"center"}>
      {imgWall?.length === 0 || imgWall === undefined
        ? countSkeleton.map((e) => <MySkeleton key={e} />)
        : imgWall?.map(
            (
              { id, imageUrl, temperature, humidity, imageName, imageDateTime },
              index
            ) => (
              <ModalButton
                key={id}
                id={id}
                index={index}
                src={imageUrl}
                temperature={temperature}
                wet={humidity}
                location={imageName}
                date={imageDateTime}
              />
            )
          )}
    </Grid>
  );
}

export default MonitoringPage;
