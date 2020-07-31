module.exports = {
    devServer : {
        open : true,
        port : 8888
    },
    css :{
        loaderOptions : {
            sass : {
                prependData : `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}