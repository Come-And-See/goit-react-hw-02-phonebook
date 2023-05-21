import PropTypes from 'prop-types';

export const Filter = ({ changeFilter }) => {
    return (
        <>
            <h3>Find contacts by name</h3 >
            <input type="text" onChange={changeFilter} />
        </>

    )
}

Filter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
};