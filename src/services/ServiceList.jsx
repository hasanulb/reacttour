import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData = [
    {
        imgUrl: weatherImg,
        title: "calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    }
]

const ServiceList = () => {
    return <>
        {servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
}
export default ServiceList