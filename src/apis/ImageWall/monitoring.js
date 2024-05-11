import { useMutation, useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import { useSelector } from "react-redux";

export function Monitoring() {
  const auth = useSelector((store) => store.auth);

  
  async function asyncMonitoring() {
    const { data } = await request.post("/MonitorDevice");
    return data;
  }

  return useQuery({
    queryKey: ["IMG"],
    queryFn: () => asyncMonitoring(),
    enabled: !!auth.accessToken,
  });
}
