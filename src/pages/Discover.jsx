import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genreTitle = 'Pop'

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center flex-row-reverse justify-center sm:flex-row    mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select 
            onChange={() => {}}
            value=""
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
            {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option >)}

        </select>
      </div>
    </div>
  );
  console.log(select)

};

export default Discover;
