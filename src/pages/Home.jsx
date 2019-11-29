import React, { Fragment, Component } from 'react'
import axios from 'axios'
import PuppyCard from '../components/common/PuppyCard'
import Loader from 'react-loader-spinner'


class Home extends Component {
    state = {
        availablePuppies: [],
        location: '',
        petType: '',
        breed: '',
        gender: ''
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

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    render() {
        let locations = [...new Set(this.state.availablePuppies.map(x => x.Location))]
        let petType = [...new Set(this.state.availablePuppies.map(x => x.PetType))]
        let breed = [...new Set(this.state.availablePuppies.map(x => x.BreedName))]
        let gender = [...new Set(this.state.availablePuppies.map(x => x.Gender))]

        let filterDogs = (location, type, breed, gender) => {
            return (
                this.state.availablePuppies.filter((x) => x.Location.includes(location) && x.PetType.includes(type) && x.BreedName.includes(breed) && x.Gender.includes(gender))
            )
        }

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
                        <select name="location" id="location-select" onChange={this.handleChange}>
                            <option value=''>ALL LOCATIONS</option>
                            {locations.map(locations => <option value={locations}>{locations}</option>)}
                        </select>


                        <label for="pet-type-select">PET TYPE</label>
                        <select name="petType" id="pet-type-select" onChange={this.handleChange}>
                            <option value=''>ALL PET TYPES</option>
                            {petType.map(petType => <option value={petType}>{petType}</option>)}
                        </select>

                        <label for="breed-select">BREED</label>
                        <select name="breed" id="breed-select" onChange={this.handleChange}>
                            <option value=''>ALL PET TYPES</option>
                            {breed.map(breed => <option value={breed}>{breed}</option>)}
                        </select>

                        <label for="gender-select">GENDER</label>
                        <select name="gender" id="breed-select" onChange={this.handleChange}>
                            <option value=''>ALL GENDERS</option>
                            {gender.map(gender => <option value={gender}>{gender}</option>)}
                        </select>
                    </div>

                    <section className="card-list">
                        <PuppyCard
                            data={filterDogs(this.state.location, this.state.petType, this.state.breed, this.state.gender)}
                        />
                    </section>

                </section>
            </Fragment>
        )
    }
}

export default Home
