import React from 'react';
import img_manager from '../../../assets/img_manager';
import './styles/Search.css';

export default (props) => {
    // let css = {
    //     width: props.width,
    //     height: props.height
    // }
    return (
        <div className="search">
            <input placeholder="Ищете что то?" />
            <img src={img_manager.header.lens} alt="" />
        </div>
    )
}