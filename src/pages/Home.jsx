import React, { Fragment, Component } from 'react'
import axios from 'axios'
import PuppyCard from '../components/common/PuppyCard'


class Home extends Component {
    state = {
        availablePuppies: [],
        filteredPuppies: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get('https://www.petlandflorida.com/wp-json/petland/v1/available-puppies/')
            .then(response => {
                this.setState({ availablePuppies: response.data.puppies })
            }).catch(err => console.log("ERROR, No Response from Pet Land API"))
    }

    render() {
        return (
            <Fragment>
                <section className="hero">
                    <nav className="nav">THIS IS THE NAVBAR</nav>
                </section>

                <section className="av-section">
                    <div className="section-title">
                        <span>AVAILABLE</span>
                        <h1>PUPPIES</h1>
                    </div>
                </section>



                {/* FILTER */}
                <section className="filter-wrapper">
                    <div className="filter">
                        <span> <i class="fa fa-filter"></i> Filter By:</span>

                        <label for="location-select">LOCATION</label>
                        <select
                            name="location"
                            id="location-select">
                            <option value=''>ALL LOCATIONS</option>
                        </select>
                    </div>




                    {/* CARD LISTS */}
                    <section className="card-list">
                        {this.state.availablePuppies.map((dog) => {
                            let backUp = 'https://www.petlandflorida.com/wp-content/themes/petland/assets/images/no-available.png'

                            return (
                                <PuppyCard
                                    key={dog.PetId}
                                    pic={dog.Photo === null ? backUp : dog.Photo.BaseUrl + dog.Photo.Size300}
                                    type={dog.PetType}
                                    refId={dog.ReferenceNumber}
                                    name={dog.PetName}
                                    breed={dog.BreedName}
                                    gender={dog.Gender}
                                    birth={dog.BirthDate}
                                    location={dog.Location}
                                />
                            )
                        })}
                    </section>




                </section>
            </Fragment>
        )
    }
}

export default Home
