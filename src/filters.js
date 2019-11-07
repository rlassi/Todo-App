let filters = {
    searchText: '',
    hideCompleted: false
}

// Exposes filters
const getFilters = () => filters

const setFilters = (searchText, hideCompleted) => {
    filters = {
        searchText,
        hideCompleted
    }

}

export { getFilters, setFilters }

