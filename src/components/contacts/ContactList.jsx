export const ContactList = ({ filter, render }) => {
    return (
        <ul>{render(filter)}</ul>
    )

}