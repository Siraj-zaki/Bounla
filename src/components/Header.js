import React from 'react';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import logo1 from '../assets/logo-1606859584.png'
import logo2 from "../assets/logo_2-1606859477.png";
 export default class Header extends React.Component {
    state = {
        backgroundColor: 'transperent',
        color: 'white',
        scale: '0.95',
        img: logo1,
        border: '1px solid rgb(206, 212, 218)',
        SearchValue: '',
        shadow: ' -6px 15px 49px -34px rgba(0,0,0,0.75)'
    }

    listenScrollEvent = (e) => {
        if (window.scrollY > 30) {
            this.setState({ backgroundColor: 'white' })
            this.setState({ color: 'black' })
            this.setState({ img: logo2 })
            this.setState({ border: '1px solid rgb(206, 212, 218)' })
            this.setState({ shadow: ' -6px 15px 49px -34px rgba(0,0,0,0.75)' })
        } else {
            this.setState({ backgroundColor: '' })
            this.setState({ color: 'white' })
            this.setState({ img: logo1 })
            this.setState({ border: '' })
            this.setState({ shadow: '' })
        }
    }
    ValueHandler = (e) => {
        this.setState({ SearchValue: e.target.value })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render(){
        return(
            <header>
<nav className="navbar navbar-expand-md navbar-inverse fixed-top p-nav scroll" style={{ backgroundColor: this.props.Creators ? "white" : this.state.backgroundColor , boxShadow: this.state.shadow }}>
    <div className="container-fluid d-flex">
        <a className="navbar-brand" href="https://bounla.com/">
            <img src={ this.props.Creators ? logo2 : this.state.img} data-logo={logo1} data-logo-2={logo2} alt="Bounla | Social Private Network For Influencers And Fans" className="logo align-baseline max-w-100"></img>
        </a>
        <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

            <div className="d-lg-none text-right pr-2 mb-2">
                <button type="button" className="navbar-toggler close-menu-mobile text-white" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false">
                    <span></span>
                    <span></span>
                </button>
            </div>

            <ul className="navbar-nav mr-auto">
                <form className="form-inline my-lg-0 position-relative" method="get" action="https://bounla.com/creators">
                    <input value={this.state.SearchValue} className="form-control input-search" type="text" required="" name="q" autoComplete="off" minLength="3" placeholder="Find a creator" aria-label="Search" style={{ border: this.state.border }} onChange={this.ValueHandler}></input>
                    <button className="btn btn-outline-success my-sm-0 button-search e-none" type="submit">
                        <svg className="searchbtn" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512" height="15" width="15">
                            <path fill="rgb(206, 212, 218)" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                    </button>
                </form>

                <li className="nav-item">
                    <a className="nav-link" href="https://bounla.com/creators"  style={{ color: this.props.Creators ? "black" : this.state.color }}>Explore</a>
                </li>


                <li className="nav-item dropdown d-none">
                    <a className="nav-link dropdown-toggle" href="https://bounla.com/#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
    </a>
                    <div className="dropdown-menu dd-menu" aria-labelledby="dropdown01">
                        <a href="https://bounla.com/category/amateurs" className="dropdown-item ">Amateurs</a>
                        <a href="https://bounla.com/category/amatrices" className="dropdown-item ">Amatrices</a>
                        <a href="https://bounla.com/category/animation" className="dropdown-item ">Animation</a>
                        <a href="https://bounla.com/category/artist" className="dropdown-item ">Artist</a>
                        <a href="https://bounla.com/category/others" className="dropdown-item ">Autres</a>
                        <a href="https://bounla.com/category/designer" className="dropdown-item ">Designer</a>
                        <a href="https://bounla.com/category/developer" className="dropdown-item ">Developer</a>
                        <a href="https://bounla.com/category/drawing-and-painting" className="dropdown-item ">Drawing and Painting</a>
                        <a href="https://bounla.com/category/modeles" className="dropdown-item ">Modèles</a>
                        <a href="https://bounla.com/category/photography" className="dropdown-item ">Photography</a>
                        <a href="https://bounla.com/category/podcasts" className="dropdown-item ">Podcasts</a>
                        <a href="https://bounla.com/category/video-and-film" className="dropdown-item ">Video and Film</a>
                        <a href="https://bounla.com/category/writing" className="dropdown-item ">Writing</a>
                    </div>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-1">
                    <a className="nav-link " href="https://bounla.com/login" style={{ color: this.props.Creators ? "black" : this.state.color }}>Login</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link btn btn-main btn-primary pr-3 pl-3" href="https://bounla.com/signup">Getting started <small className="pl-1"><i className="fa fa-long-arrow-alt-right"></i></small></a>
                </li>


            </ul>
        </div >
    </div >
</nav >
</header >

        )
    }
}
