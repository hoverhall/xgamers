import React, { Component } from "react";
import img_manager from "../assets/img_manager";
import Search from './templates/Search/Search'
import './styles/Header.css';

export default class extends Component {
    render () {
        return (
            <header>
                <div className="header-top-menu">
                    <div className="items">
                        <span className="item">О нас</span>
                        <span className="item">Оплата и доставка</span>
                        <span className="item">Контакты</span>
                        <span className="item">Новости и блог</span>
                        <span className="item">Партнерам</span>
                    </div>
                    <div className="user-tool">
                        <div className="sn-links">
                            <img src={img_manager.header.telegram} alt="" />
                            <img src={img_manager.header.youtube} alt="" />
                            <img src={img_manager.header.instagram} alt="" />
                            <img src={img_manager.header.facebook} alt="" />
                        </div>
                        <div  className="user">
                            <img src={img_manager.header.user} alt="" />
                            <span className="item">Вход в личный кабинет</span>
                        </div>
                    </div>
                </div>
                <div className="header-tools">
                    <div className="left">
                        <img className="logo" src={img_manager.header.dark_logo} alt="" />
                        <Search />
                    </div>
                    <div className="right">
                        <img src={img_manager.header.favourite} alt="" />
                        <div className="line"></div>
                        <img src={img_manager.header.cart} alt="" />
                    </div>
                </div>
                <div className="header-menu">
                    <div className="menu-btn">
                        <img src={img_manager.header.lines} alt="" />
                        <span className="menu-btn-text">Каталог</span>
                    </div>
                </div>
            </header>
        )
    }
}