import state from "./state";
import * as moduleGetters from "./getters";
import * as moduleMutations from "./mutations";
import * as moduleName from "./actions";


const myCustomeModule = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
}



export default myCustomeModule