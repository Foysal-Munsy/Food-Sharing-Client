import axios from "axios";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  // Memoize axios instance so it does not recreate on every render
  const axiosSecure = useMemo(() => {
    return axios.create({
      baseURL: "http://localhost:5001",
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    });
  }, [user?.accessToken]);

  return axiosSecure;
};

export default useAxiosSecure;
