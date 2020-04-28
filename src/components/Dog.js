import React from 'react';
import FavoriteActions from "./FavoriteActions";

const Dog = ({id, name, toggle, getStatus}) => {
    return <li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                {name}
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
    </li>
};

export default Dog;