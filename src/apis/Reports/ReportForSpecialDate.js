import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";

export function ReportForSpecialDate() {
  async function asyncReportForSpecialDate({ date = "08/10/2023" }) {
    const { data } = await request.post(`/ReportApi/ReportForSpecialDate?date=${date}`);
    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncReportForSpecialDate(data),
  });
}
