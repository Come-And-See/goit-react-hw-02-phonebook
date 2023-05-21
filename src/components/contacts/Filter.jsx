export const Filter = ({ changeFilter }) => {
    return (
        <input type="text" value={filter} onChange={changeFilter} />
    )
}