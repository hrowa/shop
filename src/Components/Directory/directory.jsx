import React, {useState} from 'react'
import './directory.scss'

import MenuItem from '../Menu Item/menuItem'

import data from '../../data'

const Direction = ({id, title, imageUrl, size}) => {
    return(
        <div className="directory-menu">
            {data.map(({title, imageUrl, id, size}) => ( 
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} /> 
            ))}
        </div>
    )
}

export default Direction;

