import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { img, price, title , _id } = data;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="product pic" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/cardInfo/${_id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;