
const BookingList = ({ bookings, bookingDelete , bookingConfirm }) => {

    const { _id, price, img, number, email, name , status } = bookings;

   



    return (
        <tr>
            <th>
                <button onClick={()=> bookingDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
                <br />
            </td>
            <td>{number}</td>
            <th className="">
            {
                status==='confirm' ? 
                <h1 className=" text-green-400	">Confirm</h1>
                : 

                <button onClick={() => bookingConfirm(_id)} className="btn btn-ghost btn-xs text-orange-500	">Pending</button>
            }
            </th>
        </tr>
    );
};

export default BookingList;