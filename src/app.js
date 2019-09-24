console.log('Connected');
import 'bulma'
import {Request} from './request.js'
import {UI} from './ui.js'
import Choices from 'choices.js'


document.addEventListener('DOMContentLoaded', loadedPage)


function loadedPage() {
  const nameInput = document.getElementById('eName')
  const ageInput = document.getElementById('eAge')
  const salaryInput = document.getElementById('eSalary')
  const departmentInput = document.getElementById('eDepartment')
  const skillsInput = document.getElementById('eSkills')
  const nationalityInput = document.getElementById('eNationality')
  const interestsInput = document.getElementById('eInterests')
  const workpermitYInput = document.getElementById('yes')
  const workpermitNInput = document.getElementById('no')
  const form = document.getElementById('form-employee')
  const employeeList = document.getElementById('employee-list')

  const ui = new UI()
  const request = new Request()
  let skills = []
  let interests = []
  let languages = []

  const skillList = new Choices(document.getElementById('eSkills'),{
    removeItemButton:true
  })
  const interestList = new Choices(document.getElementById('eInterests'),{

      removeItemButton:true
  })

  const languageList = new Choices(document.getElementById('eLanguages'),{
      removeItemButton:true
    })

  getData()

  eventListeners();
  function eventListeners() {

      form.addEventListener('submit',sendData)
      employeeList.addEventListener('click',selectItem)

      skillList.passedElement.element.addEventListener('addItem',addSkillItem , false);
      interestList.passedElement.element.addEventListener('addItem',addInterestItem, false);
      languageList.passedElement.element.addEventListener('addItem',addLanguageItem, false);

      skillList.passedElement.element.addEventListener('removeItem',removeSkillItem, false);
      interestList.passedElement.element.addEventListener('removeItem',removeInterestItem, false);
      languageList.passedElement.element.addEventListener('removeItem',removeLanguageItem, false);



  }
      function addSkillItem(event) {
        // do something creative here...
      skills.push(event.detail.value);

      }
      function addInterestItem(event) {
       // do something creative here...
       interests.push(event.detail.value)
     }
     function addLanguageItem(event) {
      // do something creative here...
      languages.push(event.detail.value)
    }

     function removeSkillItem(event) {
      // do something creative here...
    //  skills.push(event.detail.value);
    skills = skills.filter(item => item !== event.detail.label)


    }
    function removeLanguageItem(event) {
     languages = languages.filter(item => item !== event.detail.label)
    }

    function removeInterestItem(event) {
        interests = interests.filter(item => item !== event.detail.label)
    }

  function  sendData(e) {
    if(nameInput.value.trim() ==='' || ageInput.value.trim() ==='' || nationalityInput.value.trim() === '' || salaryInput.value.trim()=='' || departmentInput.value.trim() ==='' || skillsInput.value.trim()==='' || interestsInput.value.trim () ==='' ){
      alert('Please enter all fields')
    }

    else{

      const data = {
        name:nameInput.value.trim(),
        age:ageInput.value.trim(),
        salary:salaryInput.value.trim(),
        department:departmentInput.value.trim(),
        nationality:nationalityInput.value.trim(),
        skills:skills,
        interests:interests,
        workpermit:workpermitYInput.value === 'yes' ? true : false
      }
      request.post(data)
      .then(employee => ui.addEmployeeToUI(employee))
      .catch(err => console.log(err))
    }

   ui.clearInputs(skillList,interestList,languageList)

   e.preventDefault()
  }
  function getData() {
     request.get()
    .then(employees => ui.addEmployeesToUI(employees))
    .catch(err => console.log(err))
  }
  function selectItem(e) {
    console.log(e.target.textContent);
    console.log(e.target.id);
    const id = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent


    if(e.target.id === 'employee-delete'){

       deleteEmployee(e.target)

    }

    else if(e.target.id === 'employee-update'){
          updateEmployee(e.target)
    }

  }
   function deleteEmployee(targetEmployee) {
     const id = targetEmployee.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
     request.delete(id)
    .then(message => ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement.parentElement))
    .catch(err => console.log(err))
   }






}
