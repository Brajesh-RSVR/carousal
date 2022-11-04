import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './Card';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

export default function ElasticSlider() {

    return (
        <Carousel breakPoints={breakPoints}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Carousel>
    )
}
