import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Layout/Auth/AuthProvider";
import BookingList from "./BookingList";
// import Swal from "sweetalert2";

const Booking = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user?.email])

    const bookingDelete = id => {
        const proceed = confirm('are you sure? you went to delete that');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successful');
                    const newBookings = bookings.filter(booking => booking._id !== id);
                    setBookings(newBookings)
                }
            })
            
        }

    }

    const bookingConfirm = id => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers: {
                "content-type" : 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data => {console.log(data);
        if(data.modifiedCount > 0){
            const remaining = bookings.filter(booking => booking._id !== id);
            const updateBooking = bookings.find(bookings=> bookings._id === id);
            updateBooking.status = 'confirm'
            const newBookings = [updateBooking , ...remaining];
            setBookings(newBookings)
        }
        })
    }
    
    return (
        <div className="py-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Stetus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(bookings => <BookingList key={bookings._id} bookingConfirm={bookingConfirm} bookingDelete={bookingDelete} bookings={bookings} />)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Booking;