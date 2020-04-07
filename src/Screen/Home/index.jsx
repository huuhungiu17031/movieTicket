import React, { Component } from 'react'
import Carousel from './../../components/Home/carousel'
import SearchFilmInfor from './../../components/Home/searchFilmInfor'
import Schedule from './../../components/Home/schedule'
import News from '../../components/Home/news'
import Application from '../../components/Home/application'
import Footer from '../../Layouts/footer'
import SearchBar from '../../components/Home/searchBar'
export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <SearchBar />
                <SearchFilmInfor />
                <Schedule />
                <News />
                <Application />
                <Footer />
            </div>
        )
    }
}
