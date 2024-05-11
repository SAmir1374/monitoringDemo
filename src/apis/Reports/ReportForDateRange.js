import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";
import store from "../../redux/store";
import { setLoading } from "../../redux/slice/reportsSlice";

export function ReportForDateRange() {
  async function asyncReportForDateRange({ from, to }) {
    const { data } = await request.post(`/ReportApi/ReportForDateRange?from=${from}&to=${to}`);
    
    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncReportForDateRange(data),
    onMutate: () => store.dispatch(setLoading(true)),
    onSettled: () =>  store.dispatch(setLoading(false)) ,
  });
}
