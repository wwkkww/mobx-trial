import { decorate, observable, action, computed } from "mobx";

class Store {
  employeeList = [
    {name: "John Doe", salary: 150},
    {name: "Richard Roe", salary: 225},
  ]

  clearList = () => {
    this.employeeList = []
  }

  addEmployee = (e) => {
    this.employeeList.push(e)
  }

  get totalSum() {
    let sum = 0
    this.employeeList.map(employee => sum = sum + employee.salary)
    return sum
  }
}

decorate(Store, {
  employeeList: observable,
  clearList: action,
  addEmployee: action,
  totalSum: computed
})

const appStore = new Store()

export default appStore;