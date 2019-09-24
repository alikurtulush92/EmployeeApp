
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
  clearInputs(skillList,interestList,languageList){
    console.log('merhaba');
    console.log(this.name.value);
    console.log('sil'+skillList.clearStore());

    this.name.value = ''
    this.age.value = ''
    this.salary.value= ''
    this.department.value=''
    skillList.clearStore()
    interestList.clearStore()
    languageList.clearStore()

    this.workpermitY.value= ''
    this.workpermitN.value= ''
    this.nationality.value = ''

  }
  addEmployeeToUI(employee){
    console.log(employee);
    this.employeeList.innerHTML += `<tr>
      <th>${employee.id}</th>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.salary}</td>
      <td>${employee.department}</td>
      <td>${employee.nationality}</td>
      <td>${employee.interests}</td>
      <td>${employee.skills}</td>
      <td>${employee.languages}</td>

      <td>
         <div class="control">
           <button class="button is-danger" id='employee-delete'>Delete</button>
         </div>
      </td>
      <td>
         <div class="control">
           <button class="button is-primary" id='employee-update' >Update</button>
         </div>
      </td>

   </div>
    </tr>
`
  }
  addEmployeesToUI(employees){
    console.log(employees);
    employees.map(employee =>{
     this.addEmployeeToUI(employee)
    })
  }
  deleteEmployeeFromUI(target){
    target.remove()
  }

}
