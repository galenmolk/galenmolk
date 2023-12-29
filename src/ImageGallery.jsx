import {useState} from "react";
import './ImageGallery.css'
import gm1 from './assets/img/gallery/gm1.webp'
import gm2 from './assets/img/gallery/gm2.webp'
import gm3 from './assets/img/gallery/gm3.webp'
import gm4 from './assets/img/gallery/gm4.webp'
import gm5 from './assets/img/gallery/gm5.webp'
import gm6 from './assets/img/gallery/gm6.webp'
import gm7 from './assets/img/gallery/gm7.webp'
import gm8 from './assets/img/gallery/gm8.webp'
import gm9 from './assets/img/gallery/gm9.webp'
import gm10 from './assets/img/gallery/gm10.webp'
import gm11 from './assets/img/gallery/gm11.webp'
import gm12 from './assets/img/gallery/gm12.webp'

const images = [
    { 
        name: 'Julius Caesar / Theatre for a New Audience / Dir. Shana Cooper',
        src: gm1,
        height: '130%'
    },
    {
        name: 'Super 180s / Dir. Joshua Kellerman',
        src: gm2,
        height: '100%'
    },
    {
        name: 'The Odyssey / Oregon Shakespeare Festival / Dir. Mary Zimmerman',
        src: gm3,
        height: '140%',
        top: '-30%'
    },
    {
        name: 'King John / John Cullum Theatre / Dir. James Jennings',
        src: gm4,
        height: '130%',
        left: '50%',
        top: '-20%'
    },
    {
        name: 'The Exes / Theatre Row',
        src: gm5,
        height: '110%'
    },
    {
        name: 'The Odyssey / Oregon Shakespeare Festival / Dir. Mary Zimmerman',
        src: gm6,
        height: '120%'
    },
    {
        name: 'The Resistible Rise of Arturo Ui / Dir. Jackie Apodaca',
        src: gm7,
        height: '100%'
    },
    {
        name: 'Caliban\'s Dreams / Dir. James Donlon',
        src: gm8,
        height: '100%'
    },
    {
        name: 'An Act of God / Millbrook Playhouse / Dir. Adam Knight',
        src: gm9,
        height: '100%'
    },
    {
        name: 'Eighty-12 / Dir. Louis Bacigalupo',
        src: gm10,
        height: '100%'
    },
    {
        name: 'Julius Caesar / Oregon Shakespeare Festival - Dir. Shana Cooper',
        src: gm11,
        top: '-40%',
        height: '150%',
    },
    {
        name: 'The Orange Cheddar Debacle',
        src: gm12,
        height: '100%'
    }
]

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleSwipe = (indexDelta) => {
        const newImage = currentImage + indexDelta;
        setCurrentImage(newImage >= 0 ? newImage % images.length : images.length - 1);
    };
    
    return (
        <div className={'image-gallery'} onClick={() => {
            handleSwipe(1);
        }}>
            <div className={'image-container'}>
                <img src={images[currentImage].src} alt={images[currentImage].name}
                style={{
                    height: images[currentImage].height ?? '',
                    width: images[currentImage].width ?? '',
                    top: images[currentImage].top ?? '0',
                    left: images[currentImage].left ?? '50%'
                }}/>
            </div>
            <p className={'image-name'}>{images[currentImage].name}</p>
        </div>
    );
}

export default ImageGallery;