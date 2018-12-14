import React, { Component } from 'react'
import '../css-styles/MenuItems.css';


class MenuItems extends Component {

    constructor(props){
        super(props);
        this.store = props.store;
        this.changeMenuOpen = props.changeMenuOpen;
        this.menuItemsLeft = window.innerWidth-210;
        this.menuItemsTop = document.getElementsByClassName('header-section')[0].getBoundingClientRect()['height'];
        this.state = {
            
        }
    }

    handleNewGroup = ()=>{
        this.changeMenuOpen(false);
        var datas = this.store.service.directGet("http://data.fixer.io/api/latest?access_key=b1df67aecfa9d89dd6b7a1e1176389d7");
        datas.then(function(result,error){
            console.log(result);
            console.log(error);
        });
        
    }

    handleNewBroadcast = ()=>{
        this.changeMenuOpen(true);
    }

    handleWhatsAppWeb = ()=>{
        this.changeMenuOpen(false);
    }

    handleStarredMessages = ()=>{
        this.changeMenuOpen(true);
    }

    handleSettings = ()=>{
        this.changeMenuOpen(false);
    }

    render() {
        const menuItemsStyle = {
            left: this.menuItemsLeft,
            top: this.menuItemsTop
        };
        return (
            <div className="menu-items" style={menuItemsStyle}>
                <div className="menu-item-row">
            <div className="menu-item" onClick={this.handleNewGroup}>New group</div>
            </div>
            <div className="menu-item-row">
            <div className="menu-item" onClick={this.handleNewBroadcast}>New broadcast</div>
            </div>
            <div className="menu-item-row">
            <div className="menu-item" onClick={this.handleWhatsAppWeb}>WhatsApp Web</div>
            </div>
            <div className="menu-item-row">
            <div className="menu-item" onClick={this.handleStarredMessages}>Starred messages</div>
            </div>
            <div className="menu-item-row">
            <div className="menu-item" onClick={this.handleSettings}>Settings</div>
            </div>
            </div>
        )
    }
}

export default MenuItems;