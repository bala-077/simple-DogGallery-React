import '../src/style.css';

import Dog1 from './images/Beagle.jpg';
import Dog2 from './images/Bulldog.jpg';
import Dog3 from './images/German Shepherd.jpg';
import Dog4 from './images/Golden Retriever.jpg';
import Dog5 from './images/Labrador Retriever.jpg';
import Dog6 from './images/Poodle.jpg';
import Dog7 from './images/Rottweiler.jpg';
import Dog8 from './images/Siberian Husky.jpg';

const DogList = [
    { DogImg: Dog1, DogName: "Beagle" },
    { DogImg: Dog2, DogName: "Bulldog" },
    { DogImg: Dog3, DogName: "German Shepherd" },
    { DogImg: Dog4, DogName: "Golden Retriever" },
    { DogImg: Dog5, DogName: "Labrador Retriever" },
    { DogImg: Dog6, DogName: "Poodle" },
    { DogImg: Dog7, DogName: "Rottweiler" },
    { DogImg: Dog8, DogName: "Siberian Husky" }
];

function DogsGallery() {
    return (
        <>
            <div className="doglist">
                {DogList.map(function(item, index) {
                    return (
                        <div key={index} className="dogitem">
                            <img src={item.DogImg} alt={item.DogName} />
                            <h1>{item.DogName}</h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DogsGallery;
