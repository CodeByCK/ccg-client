import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PuppyCard = ({ data }) => {
    let backUp = 'https://www.petlandflorida.com/wp-content/themes/petland/assets/images/no-available.png'
    return (
        <Fragment>
            {data.length > 0 ? data.map((dog) => {
                return (
                    <Link
                        to={{
                            pathname: `/pet/${dog.PetId}`,
                            state: {
                                PetName: dog.PetName,
                                Breed: dog.BreedName,
                                Color: dog.Coloring,
                                Location: dog.Location,
                                Gender: dog.Gender,
                                Birth: dog.BirthDate,
                                RefId: dog.ReferenceNumber,
                                Status: dog.Status,
                                Photo: dog.Photo === null ? backUp : dog.Photo.BaseUrl + dog.Photo.Size500
                            }
                        }}
                        style={{ textDecoration: 'none' }}>

                        <div className="card-wrapper" key={dog.PetId}>
                            <img src={dog.Photo === null ? backUp : dog.Photo.BaseUrl + dog.Photo.Size300} />
                            <div className="card-container">
                                <div className="card-puppy-details">
                                    <span>{dog.PetType} • {dog.Gender} • REF ID: {dog.ReferenceNumber} • {dog.BirthDate}</span>
                                </div>
                                <hr></hr>

                                <div>
                                    <h3>{dog.PetName} • <span>{dog.BreedName}</span></h3>
                                </div>
                                <span className="card-button">
                                    <i class="fa fa-map-marker" /> <strong>Location:</strong> {dog.Location}
                                </span>
                            </div>
                        </div>
                    </Link>
                )
            }) : <h1 className="warning-text">No Puppies</h1>}
        </Fragment>
    )
}
export default PuppyCard