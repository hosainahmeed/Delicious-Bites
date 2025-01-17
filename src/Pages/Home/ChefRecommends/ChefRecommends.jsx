import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../../components/MenuCard/MenuCard";


const ChefRecommends = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>setMenu(data))
    },[])
    return (
        <section className="mt-20 text-center">
            <SectionTitle subHeading={'---Should Try---'} heading={'CHEF RECOMMENDS'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    menu.slice(0,6).map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;