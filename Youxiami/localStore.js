let localStore = {
    // 设置
    setStore(key,params){
        params = JSON.stringify(params);
        localStorage.setItem(key,params);
    },
    // 获取
    getStore(key){
        return JSON.parse(localStorage.getItem(key));
    }
}

export default localStore;


