import React from 'react'

import Card from './Card';
import ElasticSlider from './ElasticSlider';

export default function SideSlider() {
    return (
        <div className='latestArive'>
            <div className='half-sec'>
                <h1>test</h1>
            </div>
            <div className='half-sec'>
                <ElasticSlider />
            </div>
        </div>
    )
}
