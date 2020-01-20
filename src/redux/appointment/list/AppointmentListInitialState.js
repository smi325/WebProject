const { Record } = require('immutable')

export default Record({
    error: null,
    isFetching: false,
    shouldReload: false,
    dataSource: Record({
        data: [],
        filter: Record({
            statusId: null,
            startDate: null,
            endDate: null,
            clientName: '',
            holderName: '',
            compliences: '',
            onlyMe: false
        })(),
        // пагинация
        pagination: Record({
            page: 1, // текущий номер страницы
            size: 15, // размер страницы
            totalCount: 0 // всего элементов
        })()
        // ...
    })()
})