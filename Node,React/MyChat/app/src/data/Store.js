import Service from "../service/service.js";


class Store {

    constructor(appComponent) {
        this.app = appComponent;
        this.service = new Service();
    }

}

export default Store;