import { useEffect, useState } from "react";
import Card from "./Card";

const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

   

    return (
        <div className="py-5">
            <div className="text-center leading-8	">
                <h1 className="text-[#FF3811]">Service</h1>
                <h1 className="text-5xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 py-5">
                {
                    service.map(data => <Card key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Services;