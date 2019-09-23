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

}
