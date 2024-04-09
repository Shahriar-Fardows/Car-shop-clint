import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Layout/Auth/AuthProvider";

const CardInfo = () => {
    const loaderData = useLoaderData();
    const { title, price, img, description } = loaderData;
    const { user } = useContext(AuthContext)

    const submit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const number = form.get('number');
        const text = form.get('text');

        const booking = {
            name: name,
            email: email,
            number: number,
            Massage: text,
            img: img,
            price: price

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }




    return (
        <div className="">
            <h1 className="text-2xl text-center"> {title} </h1>
            <div className=" grid grid-cols-2 my-[5rem] gap-5">
                <img src={img} alt="" />
                <div>
                    <h1 className="text-2xl"> price : ${price} </h1><br />
                    <p>{description}</p>
                </div>
            </div>
            <form onSubmit={submit} className="mx-10 my-10" >
                <div className="grid grid-cols-2 gap-5 ">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" name="name" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" defaultValue={user?.email} placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <h1 name="price" className="grow"> Price : {price} </h1>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="number" name="number" className="grow" placeholder="Number" />
                    </label>
                    <textarea name="text" className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>

                <input type="submit" className="btn my-5 w-full" value="Submit" />
            </form>
        </div>
    );
};

export default CardInfo;