import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MuiRTL from "../ui/MuiRTL";
import MuiTheme from "../ui/MuiTheme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/complix/table.css";

function MyTable(data) {
  const report = useSelector((state) => state.reportsSlice);

  useEffect(() => {}, [data]);

  return (
    <MuiRTL>
      <MuiTheme>
        <TableContainer
          component={Paper}
          sx={{
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(1px)",
            borderRadius: "15px",
          }}
        >
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>موقعیت</TableCell>
                <TableCell>شماره دستگاه</TableCell>
                <TableCell>عملکرد</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data?.map((row) => (
                <TableRow
                  key={row.cameraId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="col">
                    <Link className="myLink" to={`/reports/${row.cameraId}`}>
                      {row.location}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link className="myLink" to={`/reports/${row.cameraId}`}>
                      {row.deviceName}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link className="myLink" to={`/reports/${row.cameraId}`}>
                      {row.countPer100}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiTheme>
    </MuiRTL>
  );
}

export default MyTable;
