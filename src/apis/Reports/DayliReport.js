import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";

export function DailyReport() {
  const auth = useSelector((store) => store.auth);

  async function asyncDailyReport() {
    const { data } = await request.get("/ReportApi/DayliReport");
    return data;
  }

  return useQuery({
    queryKey: ["DailyReport"],
    queryFn: () => asyncDailyReport(),
    enabled: !!auth.accessToken,
  });
}
