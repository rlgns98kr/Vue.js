import axios from 'axios'
import cookie from 'vue-cookies'

const state = {
    images: [],
}
const getters = {
    allImages: state => state.images
}
const mutations = {
    setImages: (state, images) => state.images = images
}
const actions = {
    fetchImages({ commit }) {
        const fullURL = 'https://api.imgur.com/3/account/me/images';
        axios.get(fullURL, { headers: { Authorization: `Bearer ${cookie.get('imgur_token')}` } })
            .then(result => commit('setImages', result.data.data))
            .catch(err => console.error(err))
    },
    uploadImage() { },
}

export default {
    state, getters, mutations, actions
}