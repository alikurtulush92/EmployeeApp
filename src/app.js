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

  const ui = new UI()
  const request = new Request()
  let skills = []
  let interests = []

  const skillList = new Choices(document.getElementById('eSkills'),{
    removeItemButton:true
  })
  const interestList = new Choices(document.getElementById('eInterests'),{
    removeItemButton:true
  })

  getData()

  eventListeners();
  function eventListeners() {

      form.addEventListener('submit',sendData)
      skillList.passedElement.element.addEventListener('addItem',addSkillItem , false);
      interestList.passedElement.element.addEventListener('addItem',addInterestItem, false);
      skillList.passedElement.element.addEventListener('removeItem',removeSkillItem, false);
      interestList.passedElement.element.addEventListener('removeItem',removeInterestItem, false);


  }
      function addSkillItem(event) {
        // do something creative here...
      skills.push(event.detail.value);

      }
      function addInterestItem(event) {
       // do something creative here...
       interests.push(event.detail.value)
     }
     function removeSkillItem(event) {
      // do something creative here...
    //  skills.push(event.detail.value);
    skills = skills.filter(item => item !== event.detail.label)


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
    }

   ui.clearInputs()
   e.preventDefault()
  }
  function getData() {
     request.get()
    .then(employees => ui.addEmployeesToUi(employees))
    .catch(err => console.log(err))
  }



}
