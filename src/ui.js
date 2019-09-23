export class UI{
  constructor(){
    this.name  = document.getElementById('eName')
    this.age = document.getElementById('eAge')
    this.salary = document.getElementById('eSalary')
    this.department = document.getElementById('eDepartment')
    this.skills = document.getElementById('eSkills')
    this.nationality = document.getElementById('eNationality')
    this.interests= document.getElementById('eInterests')
    this.workpermitY = document.getElementById('yes')
    this.workpermitN = document.getElementById('no')
    this.employeeList = document.getElementById('employee-list')
  }
  clearInputs(){
    console.log('merhaba');
    console.log(this.name.value);
    this.name.value = ''
    this.age.value = ''
    this.salary.value= ''
    this.department.value=''
    this.skills.value= ''
    this.interests.value= ''
    this.workpermitY.value= ''
    this.workpermitN.value= ''
    this.nationality.value = ''
  }
  addEmployeesToUi(employees){
    console.log(employees);
    employees.map(employee =>{
      this.employeeList.innerHTML += `<tr>
        <th>${employee.id}</th>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.salary}</td>
        <td>${employee.department}</td>
        <td>${employee.nationality}</td>
        <td>${employee.skills}</td>
        <td>${employee.interests}</td>
      </tr>
`
    })



  }

}
