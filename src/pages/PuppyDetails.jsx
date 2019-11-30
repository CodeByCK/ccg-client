import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar'


const PuppyDetails = ({ location: { state: { PetName, Breed, Color, Location, Gender, Birth, RefId, Status, Photo } } }) => {
    return (
        <Fragment>
            <section className="hero">
                <Navbar />
            </section>
            <section className="petInfo-wrapper">
                <div className="petInfo-container">
                    <div className="petInfo-Card">
                        <div className="petInfo-Photo">
                            <img src={Photo} />
                        </div>
                        <div className="petInfo-Details">
                            <div className="petInfo-Heading">
                                <h1>BIO</h1>
                            </div>
                            <ul>
                                <li><strong>Name:</strong> {PetName}</li>
                                <li><strong>Breed:</strong> {Breed}</li>
                                <li><strong>Color:</strong> {Color}</li>
                                <li><strong>Location:</strong> {Location}</li>
                                <li><strong>Gender:</strong> {Gender}</li>
                                <li><strong>D.O.B:</strong> {Birth}</li>
                                <li><strong>Reference #:</strong> {RefId}</li>
                                <li><strong>Status:</strong> {Status}</li>
                            </ul>
                            <div className="petInfo-button">
                                <button><i class="fa fa-info-circle" /> request more info</button>
                                <button><i class="fa fa-phone" /> call to reserve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default PuppyDetails