import Card from "../../components/Card/Card";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Home = () => {
    const { data: apartment = [] } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/apartment`);
            return data;
        }
    });
    return (
        <div className="container mx-auto my-4 lg:my-8">
            <div className="my-3">
                <h2 className="text-xl font-semibold">Popular homes in Dhaka District </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {
                    apartment.map((card) => <Card key={card?.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Home;