import React from 'react'
import "./css/Subscriptions.css"

function Subscriptions(props) {
    return (
        <div>
            <div className="subscriptions">
            <img className="subscriptions__img" src={props.imageURL}/>
            <p className="subscriptions__title">{props.name}</p>
        </div>
        </div>
    )
}

export default Subscriptions;