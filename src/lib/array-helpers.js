const sortBy = (type, field) => {
    switch (type) {
        case 'date':
            return (a, b) => new Date(b[field]) - new Date(a[field])
        case 'string':
            return (a, b) => (a[field] < b[field]) ? -1 : 1
        default:
            return (a, b) => b[field] - a[field]
    }
}

export const sortFunction = sort =>
    (sort === 'SORTED_BY_LIKE') ?
        sortBy('number', 'amountLikes') :
        (sort === 'SORTED_BY_COMMENT') ?
            sortBy('number', 'amountComments') :
            sortBy('date', 'timestamp')