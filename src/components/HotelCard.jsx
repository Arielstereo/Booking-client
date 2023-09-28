import { Link } from "react-router-dom";
import { IconHeart, IconHeartFilled, IconStarHalfFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFavorites from "../store/favorites";

/* eslint-disable react/prop-types */
const HotelCard = ({ hotels, isLoading }) => {
  const { register, handleSubmit } = useForm();
  const favoriteHotels = useFavorites((state) => state.favoritesHotelsIds);
  const addToFavorites = useFavorites((state) => state.addToFavorites)
  const removeFromFavorites = useFavorites((state) => state.removeFromFavorites)

  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = (searchValue) => {
    const filtered = hotels.filter((hotel) => {
      return hotel.city.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredHotels(filtered);
  };

  const onSubmit = (data) => {
    filterHotels(data.search);
  };

  return (
    <div className="flex flex-col mt-32">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mx-auto my-16">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md w-64 sm:w-96"
          {...register("search")}
          placeholder="Paris, France, etc"
        />
        <button className="p-0 sm:p-2 px-2 sm:px-4 bg-blue-500 text-white border-none rounded-md cursor-pointer">
          Search hotel
        </button>
      </form>
      {isLoading ? (
        <div className="loader mx-64 mt-32" />
      ) : (
        filteredHotels?.map((hotel) => (
          <div key={hotel.id} className="border border-gray-400 rounded-lg bg-blue-200 shadow-lg shadow-black max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-2 flex flex-col md:flex-row items-center mx-auto my-6">
            <div className="p-4">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="object-cover rounded-xl"
              />
              {
                favoriteHotels.includes(hotel.id) ? (<button className="flex items-center mt-4" onClick={() => removeFromFavorites(hotel.id)}><IconHeartFilled className="text-red-600" size='28' /></button>) : (<button className="flex items-center gap-2 mt-4 font-semibold" onClick={() => addToFavorites(hotel.id)}><IconHeart className="text-red-400" size='28' />like it</button>)
              }
            </div>
            <div className="flex flex-col mx-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
                <p className="text-base font-semibold">{hotel.description}</p>
                <p className="text-base font-semibold">{hotel.city}</p>
                <p className="text-base font-semibold">u$s {hotel.price} per night</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="mr-4">
                  <span className="text-lg flex gap-2">
                    <IconStarHalfFilled className="text-yellow-500" size="28" />
                    {hotel.rating}
                  </span>
                </div>
                <Link
                  to={`/hotels/${hotel.id}`}
                  className="px-6 py-2 bg-pink-500 text-white rounded"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelCard;
