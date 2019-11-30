import React, { Fragment, Component, Suspense, lazy } from 'react'
import axios from 'axios'

import FilterSelect from '../components/common/FilterSelect'
import Navbar from '../components/Navbar/Navbar'
const PuppyCard = lazy(() => import('../components/common/PuppyCard'))


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
                this.state.availablePuppies.filter((x) => (
                    x.Location.includes(location)
                    && x.PetType.includes(type)
                    && x.BreedName.includes(breed)
                    && x.Gender.includes(gender)
                ))
            )
        }

        return (
            <Fragment>
                <section className="hero">
                    <Navbar />
                </section>

                <section className="av-section">
                    <div className="section-title">
                        <span>AVAILABLE</span>
                        <h1>PUPPIES</h1>
                    </div>
                </section>

                <section className="filter-wrapper">
                    <div className="filter">
                        <span> <i class="fa fa-filter"></i> Filter By:</span>
                        <FilterSelect
                            name={'location'}
                            id={'location-select'}
                            onChange={this.handleChange}
                            option={locations.map(locations => <option value={locations}>{locations}</option>)}
                            initialOption={'ALL LOCATIONS'}
                            labelTitle={'LOCATION'}
                        />
                        <FilterSelect
                            name={'petType'}
                            id={'pet-type-select'}
                            onChange={this.handleChange}
                            option={petType.map(petType => <option value={petType}>{petType}</option>)}
                            initialOption={'ALL PET TYPES'}
                            labelTitle={'PET TYPE'}
                        />
                        <FilterSelect
                            name={'breed'}
                            id={'breed-select'}
                            onChange={this.handleChange}
                            option={breed.map(breed => <option value={breed}>{breed}</option>)}
                            initialOption={'ALL BREED TYPES'}
                            labelTitle={'BREED'}
                        />
                        <FilterSelect
                            name={'gender'}
                            id={'gender-select'}
                            onChange={this.handleChange}
                            option={gender.map(gender => <option value={gender}>{gender}</option>)}
                            initialOption={'ALL GENDERS'}
                            labelTitle={'GENDER'}
                        />
                    </div>

                    <section className="card-list">
                        <Suspense fallback={<div style={{ marginTop: '20px' }}>...Loading</div>}>
                            <PuppyCard
                                data={filterDogs(this.state.location, this.state.petType, this.state.breed, this.state.gender)}
                            />
                        </Suspense>
                    </section>

                </section>
            </Fragment>
        )
    }
}

export default Home
