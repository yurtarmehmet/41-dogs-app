import React from 'react';
import dogs from "../dogsdata";


const Goldens = () => {
    const goldens = dogs.filter((dog) => dog.breed === "Golden Retriever");
    return (
        <div>
            <ul>
                {
                    goldens.map((golden) => {
                        return <li>{golden.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Goldens;