import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import toast from "react-hot-toast";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: cart = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!token,
    //
    // queryFn: async ()=>{
    //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
    //         headers:{authorization: `bearer ${token}`}
    //     })
    //     return response.json();;
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      if (res.data) {
        toast.success("Item added");
        return res.data;
      }
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
