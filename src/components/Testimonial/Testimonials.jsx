import React from "react"
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'




const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            }
        ]
    }

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Muhammed Basil</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Rahma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Muhammed Basil</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Rahma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Muhammed Basil</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Rahma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ut massa sed magna mollis posuere sed ac ligula.
                Suspendisse nulla nisl, vulputate eget diam id, aliquam ornare elit.
                Nullam arcu est, sodales lobortis porttitor non, facilisis vitae justo.
                Nulla eleifend dolor eget neque interdum sagittis.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}
export default Testimonials