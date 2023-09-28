import { IconStarHalfFilled } from "@tabler/icons-react";

const BestsHotels = ({ hotels, isLoading }) => {
  const filterHotels = hotels
    ?.filter((hotel) => hotel.rating > 4.6)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col mt-4 py-12">
      <h2 className="text-center text-2xl md:text-4xl text-slate-800 font-semibold font-serif">
        Best rated hotels
      </h2>
      <div className="flex flex-wrap lg:gap-4 md:gap-8 justify-center mt-16 mx-auto gap-4 xl:max-w-full lg:max-w-6xl md:max-w-4xl max-w-xs">
        {isLoading ? (
          <div className="loader mx-64 mt-32" />
        ) : (
          filterHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="border-2 border-slate-500 bg-slate-100 shadow-xl shadow-black p-4 rounded-lg text-center flex flex-col gap-4"
            >
              <div className="flex gap-4 justify-center">
                <span>{hotel.name}</span>
                <span className="flex gap-2">
                  {hotel.rating}
                  <IconStarHalfFilled className="text-yellow-500" size="24" />
                </span>
              </div>
              <img
                className="cover xl:h-44 lg:h-32 md:h-28"
                src={hotel.image}
                alt={hotel.name}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BestsHotels;
