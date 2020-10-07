import musicService from "./music";

const trackService = {}

trackService.search = function (q, offset = 0) {
    const type = 'track'

    return musicService.get('/search', {
        params: { q, type, offset }
    })
        .then(res => res.data)
}

trackService.getById = function (id) {
    return musicService.get(`/tracks/${id}`)
        .then(res => res.data)
}

export default trackService