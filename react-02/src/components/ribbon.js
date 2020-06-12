import React from 'react';
import canada from './canada.svg';
import golfer from './golfer.svg';
import hockey from './hockey.svg';
import gear from './gear.svg';
import wifi from './wifi.svg';
import coronavirus from './coronavirus.svg';
import '../App.css';

function SVGicons(props) {
    return (
        <div className="ribbonIcons">

            <img onClick={() => { props.handleClick(0) }} src={canada} alt='logo' className='canada'></img>
            <img onClick={() => { props.handleClick(1) }} src={golfer} alt='logo' className='canada'></img>
            <img onClick={() => { props.handleClick(2) }} src={hockey} alt='logo' className='canada'></img>
            <img onClick={() => { props.handleClick(3) }} src={gear} alt='logo' className='canada'></img>
            <img onClick={() => { props.handleClick(4) }} src={wifi} alt='logo' className='canada'></img>
            <img onClick={() => { props.handleClick(5) }} src={coronavirus} alt='logo' className='canada'></img>

        </div>
    );
}

export default SVGicons;
