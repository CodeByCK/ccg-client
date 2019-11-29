import React, { Fragment, Component } from 'react'
import axios from 'axios'
import PuppyCard from '../components/common/PuppyCard'


class Home extends Component {
    state = {
        availablePuppies: [],
        filteredPuppies: [],

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

    handleChange = (e) => {
        console.log('You Selected: ', e.target.value)
    }


    render() {
        let locations = [...new Set(this.state.availablePuppies.map(x => x.Location))]
        let petType = [...new Set(this.state.availablePuppies.map(x => x.PetType))]
        let breed = [...new Set(this.state.availablePuppies.map(x => x.BreedName))]
        let gender = [...new Set(this.state.availablePuppies.map(x => x.Gender))]

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
                            id="location-select"
                            onChange={this.handleChange}
                        >
                            <option value=''>ALL LOCATIONS</option>
                            {locations.map(locations => <option value={locations}>{locations}</option>)}
                        </select>
                        <label for="pet-type-select">PET TYPE</label>
                        <select name="pet-type" id="pet-type-select">
                            <option value=''>ALL PET TYPES</option>
                            {petType.map(petType => <option value={petType}>{petType}</option>)}
                        </select>

                        <label for="breed-select">BREED</label>
                        <select name="breed" id="breed-select">
                            <option value=''>ALL PET TYPES</option>
                            {breed.map(breed => <option value={breed}>{breed}</option>)}
                        </select>

                        <label for="gender-select">BREED</label>
                        <select name="gender" id="breed-select">
                            <option value=''>ALL GENDERS</option>
                            {gender.map(gender => <option value={gender}>{gender}</option>)}
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
