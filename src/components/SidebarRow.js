import React from 'react'
import "./css/SidebarRow.css"

function SidebarRow(props) {
    
    return (
        <div className={`sidebarRow ${props.selected&&"selected"}`}>
        <props.icon className="sidebarRow__icon" />
            <p className="sidebarRow__title">{props.title}</p>
        </div>
    )
}

export default SidebarRow
