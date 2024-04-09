import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 relative'>
         <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={img2} className=" w-1/2 rounded-lg absolute right-5 top-1/2 shadow-2xl" />
         </div>
          <div className='lg:w-1/2 space-y-5'>
            <h1 className='text-[#FF3811] font-bold'>About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;