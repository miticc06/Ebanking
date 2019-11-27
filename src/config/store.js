import Authentication from './auth'
import StoreAppBar from './storeAppBar'

class Store {
  constructor () {
    this.authentication = new Authentication(this)
    this.appBar = new StoreAppBar()
  }
}
export default new Store()