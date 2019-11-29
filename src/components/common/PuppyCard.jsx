import React from 'react'

const PuppyCard = ({ pic, type, gender, refId, birth, name, location, breed }) => {
    return (
        <div className="card-wrapper">
            <img src={pic}></img>
            <div className="card-container">
                <div className="card-puppy-details">
                    <span>{type} • {gender} • REF ID: {refId} • {birth}</span>
                </div>
                <hr></hr>

                <div>
                    <h3>{name} • <span>{breed}</span></h3>
                </div>
                <span className="card-button">
                    <i class="fa fa-map-marker" /> <strong>Location:</strong> {location}
                </span>
            </div>
        </div>
    )
}
export default PuppyCard