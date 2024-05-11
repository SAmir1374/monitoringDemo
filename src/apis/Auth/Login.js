import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";

export function AuthLogin() {
  async function authRegister(incomingData) {
    const { data } = await request.post("/Authentication", incomingData);

    return data;
  }

  return useMutation({
    mutationFn: (data) => authRegister(data),
  });
}
