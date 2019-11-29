import React, { Fragment } from 'react'

const FilterSelect = ({ name, id, onChange, option, initialOption, labelTitle }) => {
    return (
        <Fragment>
            <label for={id}>{labelTitle}</label>
            <select name={name} id={id} onChange={onChange}>
                <option value=''>{initialOption}</option>
                {option}
            </select>
        </Fragment>
    )
}

export default FilterSelect