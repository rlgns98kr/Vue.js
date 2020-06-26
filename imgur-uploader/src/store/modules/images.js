import axios from 'axios'
import cookie from 'vue-cookies'
import router from '@/router'

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
    async uploadImages(context, e) {
        const fullURL = 'https://api.imgur.com/3/image';
        const images = e.target.files;

        const promises = [];

        images.forEach(element => {
            const formData = new FormData();
            formData.append('image', element);
            promises.push(axios.post(fullURL, formData, { headers: { Authorization: `Bearer ${cookie.get('imgur_token')}` } }))
        });
        await Promise.all(promises);
        router.push('/')
    },
}

export default {
    state, getters, mutations, actions
}