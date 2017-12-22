export const fetchNumber = ({
    commit
}, {min, max}) => axios
    .get(`/api/random/${min}/${max}`)
    .then((response) => {
        commit('addRandomNumber', response.data.number)
    })