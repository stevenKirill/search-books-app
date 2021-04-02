import React, {useState} from 'react';
import classes from './slider.module.css';
import SliderContent from './SliderContent/SliderContent';
import Slide from './Slide/Slide';
import Arrow from './Arrow/Arrow';
import Dots from './Dots/Dots';
import img1 from '../../assets/img/samurai.jpeg';
import img2 from '../../assets/img/genii.jpg';
import img3 from '../../assets/img/trump.jpg';
import img4 from '../../assets/img/morning.png';
import img5 from '../../assets/img/pofig.jpg';

export function Slider() {
    const [state, setState] = useState({
        translate: 0,
        transition: 0.45,
        activeIndex: 0,
    });
    const WIDTH = 500;

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];

    const prevSlide = () => {
        const {activeIndex} = state;
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (images.length - 1) * WIDTH,
                activeIndex: images.length - 1, 
            })
        };
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * WIDTH,
        });
    };

    const nextSlide = () => {
        const {activeIndex} = state;
        if (activeIndex === images.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0,
            })
        };
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * WIDTH,
        });
    }

    const {translate, transition, activeIndex} = state;

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Слайдер с картинками просто так
            </h1>
            <div className={classes.slider}>
                <SliderContent
                transition={transition}
                translate={translate}>
                {images.map((image,i) => {
                    return (
                        <Slide key={i + 1} content={image}/>
                    )
                })}
                </SliderContent>
            </div>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Dots images={images} activeIndex={activeIndex}/>
        </div>
    );
};