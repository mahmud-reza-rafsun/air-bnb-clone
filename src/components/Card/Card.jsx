import {Link} from "react-router-dom"
import { GoHeart } from "react-icons/go";

const Card = ({card}) => {
    console.log(card);
    return (
        <Link to={`details/${card?._id}`}>
            <div className=" bg-white rounded-2xl overflow-hidden relative">
                {/* Favorite Badge */}
                <span className="absolute top-3 left-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
                    Guest favorite
                </span>

                {/* Heart Icon */}
                <button className="btn bg-transparent border-none shadow-none absolute top-2 right-2 text-gray-100 cursor-pointer">
                    <GoHeart className="text-2xl" />
                </button>

                {/* Image */}
                <img
                    src={card?.image}
                    alt="Apartment"
                    className="w-full h-48 object-cover"
                />

                {/* Details */}
                <div className="py-1">
                    <h2 className="text-gray-800 text-sm">
                        Apartment in Moham'madapura Thana
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">$51 for 2 nights • ★ 5.0</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;