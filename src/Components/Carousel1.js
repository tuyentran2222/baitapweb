import React from 'react'
import slide1 from './Photos/slide1.png'
import slide2 from './Photos/slide2.png'
import slide3 from './Photos/slide3.png'
import {Carousel} from 'react-bootstrap';
function Carousel1(){
    return(

        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tai nghe</h3>
                    <p>Mang đến cho bạn một trải nghiệm âm thanh tốt nhất</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Điện thoại</h3>
                    <p>Trải nghiệm tốt nhất với những mẫu điện thoại hot nhất</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>TiVi </h3>
                    <p>Giải trí tuyệt vời sau những giờ làm việc căng thẳng.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Carousel1;
   
   

   
