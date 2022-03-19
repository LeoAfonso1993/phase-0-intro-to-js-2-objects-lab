// Write your solution in this file!
const employee = {
    name: "Leo",
    streetAddress: "Meadow Dr"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee
}

console.log(updateEmployeeWithKeyAndValue(employee, "name", "Afonso"))

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

const newAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Fayette St")

console.log(newAddress)


function deleteFromEmployeeByKey(obj, key) {
    const newEmployee2 = {...obj}
    delete newEmployee2[key]
    return newEmployee2
}

console.log(deleteFromEmployeeByKey(employee, "streetAddress"))


function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value
    delete obj[key]
    return obj
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))
