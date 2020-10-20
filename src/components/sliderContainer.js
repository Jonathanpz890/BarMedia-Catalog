import React from 'react';
import Slider from './slider';

const sliderContainer = (props) => {
    return(
        <div className='slider-container'>
            <div className={`loading-small ${props.loadingClass}`}>
                <div className='loadingCube'>
                    <div className='loadingCubeFilling'></div>
                </div>
                <h1><span className='dots'></span>טוען</h1>
            </div>
            <Slider 
                before={props.before}
                after={props.after}
            />
            <Slider 
                before={props.before}
                after={props.after}
            />
            <Slider 
                before={props.before}
                after={props.after}
            />
        </div>
    )
}

export default sliderContainer;