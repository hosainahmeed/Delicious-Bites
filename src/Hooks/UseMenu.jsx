import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], isLoading: menuLoading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      // const res = await fetch('https://bistro-boss-server-nv3pn771r-hosains-projects-1e2169e4.vercel.app/menu');
      const res = await fetch('https://bistro-boss-server-nv3pn771r-hosains-projects-1e2169e4.vercel.app/menu');
      return res.json();
    }
  });
  return [menu, menuLoading,refetch];
};

export default useMenu;
