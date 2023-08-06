

const task = {
    namespaced:true,
    state: () => ({
        title: "Taks List",
        list: [
            'task 1'
        ]
    }),


    getters: {
        total(state) {
            return state.list.length;
        }
    },
    mutations: {
        SAVE(state, title) {
            state.list.push(title);
        }
    },
    actions: {
        save({ commit }, title) {
            commit('SAVE', title);
        }
    }

}
export default task;