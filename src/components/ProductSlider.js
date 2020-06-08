import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import S2 from '../resources-nikker/2s.jpg';
import S3 from '../resources-nikker/3s.jpg';
import S4 from '../resources-nikker/4s.jpg';

const items = [
    {
        src: S2,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2'
    },
    {
        src: S3,
        altText: 'Slide 3',
        caption: '',
        header: '',
        key: '3'
    },
    {
        src: S4,
        altText: 'Slide 4',
        caption: '',
        header: '',
        key: '4'
    },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;