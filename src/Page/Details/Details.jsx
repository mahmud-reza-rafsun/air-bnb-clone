import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Details = () => {
    const { id } = useParams();
    const { data: details } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/apartment/${id}`);
            return data;
        }
    })
    console.log(details);
    return (
        <div className="container lg:max-w-7xl mx-auto py-5">
            Hi
        </div>
    );
};

export default Details;