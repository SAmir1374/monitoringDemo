import { useMutation } from "@tanstack/react-query";
import store from '../../redux/store'
import request from "../../utils/request";
import { setLoading } from "../../redux/slice/reportsSlice";

export function ShowMissTime() {
  async function asyncShowMissTime({ DeviceId = 3, fordate = "08/10/2023" }) {
    const { data } = await request.post(`ReportApi/ShowfailedTime?DeviceId=${DeviceId}&fordate=${fordate}`);
    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncShowMissTime(data),
    onMutate: () => store.dispatch(setLoading(true)),
    onSettled: () =>  store.dispatch(setLoading(false)),
  });
}
