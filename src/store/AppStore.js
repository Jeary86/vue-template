export default {
    state: {
        loaderName: "loading",
    },
    mutations: {
        SET_LOADER_NAME: (state, payload) => {
            state.loaderName = payload
        },
    },
    actions: {
        setLoaderName: ({commit, state}, payload) => {
            return commit('SET_LOADER_NAME', payload)
        },
    },
    getters: {
        loaderName: state => state.loaderName,
    }
}
