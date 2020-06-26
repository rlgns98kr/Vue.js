import qs from 'qs'
import router from '@/router'
import cookies from 'vue-cookies'

const state = {
    token: cookies.get('imgur_token'),
}
const getters = {
    isLoggedIn: state => !!state.token
}
const mutations = {
    setToken(state, token) {
        state.token = token;
    }
}
const actions = {
    logout({ commit }) {
        commit('setToken', null);
        cookies.remove("imgur_token");
        location.href = '/'
    },
    login() {
        const ROOT_URL = 'https://api.imgur.com/oauth2/authorize?';
        const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        const fullurl = ROOT_URL + qs.stringify(queryString);
        location.href = fullurl;

    },
    finalizeLogin({ commit }) {
        commit('setToken', qs.parse(location.hash.replace('#', '')).access_token)
        cookies.set('imgur_token', qs.parse(location.hash.replace('#', '')).access_token)
        router.push('/');
    }
}

export default {
    state, getters, mutations, actions
}