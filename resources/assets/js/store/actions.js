export const fetchNumber = ({
    commit
}, {min, max}) => axios
    .get(`http://vuex-shopping-cart.dev/api/random/${min}/${max}`)
    .then((response) => {
        commit('addRandomNumber', response.data.number)
    })