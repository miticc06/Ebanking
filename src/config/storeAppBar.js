import { action, observable, decorate } from 'mobx'

class StoreAppBar {
  title = 'Home'

  setTitle = txt => {
    this.title = txt
  }
}

decorate(StoreAppBar, {
  title: observable,
  setTitle: action
})

export default StoreAppBar
