import React from 'react';

const slider = (props) => {
    return(
        <div className={props.bigClass}>
            <div className={props.class} id='slider' data-beer-label='לפני'>
                <img src={props.before} alt=''></img>
                <div className='beer-reveal' data-beer-label='אחרי'>
                    <img class='img-reveal' src={props.after} alt='' onLoad={(event) => props.onload(event)}></img>
                </div>
            </div>
            <div className='loading-small'>
                <div className='loadingCube'>
                    <div className='loadingCubeFilling'></div>
                </div>
                <h1><span className='dots'></span>טוען</h1>
            </div>
        </div>
    )
}

export default slider;