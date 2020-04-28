import React from 'react';
import dogs from "../dogsdata";

const Cavaliers = () => {
    const cavaliers = dogs.filter((dog) => dog.breed === "Cavalier King Charles Spaniel");
    return (
        <div>
            <ul>
                {
                    cavaliers.map((cavalier) => {
                        return <li>{cavalier.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Cavaliers;