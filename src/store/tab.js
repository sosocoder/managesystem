export default {
    state: {
        currentMenu: null,
        isCollapse: false,
        menu: [],
        tabsList: [
            {
          id: 1,
          name: "home",
          path: "/",
          label: "首页",
          icon: "home"
        },
        ]
    },
    mutations: {
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result === -1 ? state.tabsList.push(val) : ''
            } else {
                state.currentMenu = null
            }
        },
        closeTab(state, val) {
            let result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result,1)
        },
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
         }
    },
    actions: {
    },
}