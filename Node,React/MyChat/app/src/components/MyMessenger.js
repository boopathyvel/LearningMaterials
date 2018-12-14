import React, { Component } from 'react'
import '../css-styles/MyMessenger.css';
import MenuItems from './MenuItems.js';

class MyMessenger extends Component {

    constructor(props){
        super(props);
        this.store = props.store;
        this.state = {
            isMenuOpen: false,
            isSearchOpen :false
        }
    }

    openSearch = ()=> {
        this.setState({isSearchOpen:true});
    }

    closeSearch = ()=>{
        this.setState({isSearchOpen:false});
    }

    openMenu = ()=>{
        this.setState({isMenuOpen:true});
    }

    closeMenu = ()=>{
        this.setState({isMenuOpen:false});
    }

    changeMenuOpen = (openType) =>{
        this.setState({isMenuOpen:openType});
    }

    render() {
        return (
            <div className="WhatsApp">
                {this.state.isSearchOpen ? 
                (<div className="header-section">
                
                <div className="search-contact-back-section" onClick={this.closeSearch}>
                    <img className="search-contact-back" src={require("../assets/icons/left-arrow-icon.png")} alt=""/>
                </div>
                <div className="search-contact-input-section">
                    <input type="search" className="search-contact-input" placeholder="search for contacts"/>
                </div>
                </div>) 
                :
                (<div className="header-section">
                <div className="header-name">WhatsApp</div>
                <div className="search-contact-section" onClick={this.openSearch}>
                    <img className="search-contacts" src={require("../assets/icons/search-icon.png")} alt=""/>
                </div>
                <div className="menu-section" onClick={this.openMenu}>
                    <img className="menu-section-image" src={require("../assets/icons/menu-icon.png")} alt=""/>
                </div>
                {this.state.isMenuOpen ?
                <MenuItems store={this.store} changeMenuOpen={this.changeMenuOpen}></MenuItems>
                :null }
                </div>)}
            </div>
        )
    }
}

export default MyMessenger;