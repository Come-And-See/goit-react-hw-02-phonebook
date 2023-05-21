import PropTypes from 'prop-types';

export const ContactList = ({ filter, render }) => {
    return (
        <ul>{render(filter)}</ul>
    )

}

ContactList.propTypes = {
    filter: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
};