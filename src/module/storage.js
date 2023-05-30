/** @format */

class Storage {
  constructor() {
    this.scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
  }
}

const store = new Storage();

export default store;
