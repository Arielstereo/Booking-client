import { useQuery } from "@tanstack/react-query";
import { useFetchApi } from "../hooks/useFetchApi";
import HotelCard from "./HotelCard";
import Navbar from "./Navbar";
import BestsHotels from "./BestsHotels";

const Hotels = () => {
  const { getHotels } = useFetchApi();
  const { data: hotels, isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return (
    <div>
      <Navbar />
      <HotelCard hotels={hotels} isLoading={isLoading} />
      <hr />
      <BestsHotels hotels={hotels} isLoading={isLoading} />
    </div>
  );
};

export default Hotels;
