//Элементы окна логинизации
const logLoginInput = document.getElementById('log_login_input')
const logPassInput 	= document.getElementById('log_pass_input')
const logBtn 		= document.getElementById('log_btn')
const goToRegBtn 	= document.getElementById('go_to_registrate_btn')

//Элементы окна регистрации
const regLogInput 	= document.getElementById('reg_login_input')
const regPassInput1 = document.getElementById('reg_pass_input_1')
const regPassInput2 = document.getElementById('reg_pass_input_2')
const regBtn 		= document.getElementById('reg_btn')
const goToLogBtn 	= document.getElementById('go_to_log_btn')

//Высшие по иерархии блоки (регистрация, логинизация, основной блок)
const logBlock 		= document.querySelector('.work_with_persons_login')
const regBlock 		= document.querySelector('.work_with_persons_registrate')
const tasksBlock 	= document.querySelector('.tasks')

//Блоки списка задач
const tasksBody 	= document.querySelector('.list_of_tasks')
const showTask 		= document.querySelector('.show_task')
const addChangeTask = document.querySelector('.add_change_task')

//Элементы списка задач
const goToTasksBtn 	= document.getElementById('go_to_tasks_list_btn')
const addTaskBtn 	= document.querySelector('.add_task_btn')

const mainBlocks 	= [logBlock, regBlock, tasksBlock]
const listBlocks 	= [tasksBody, showTask, addChangeTask]

//Объект состояния
const state = {

}

//Функция показа выбранного блока и скрытия остальных(из массива элементов)
function goToChosedBlock(blocks, classSelector) {
	for(let element of blocks) {
		if(element.classList.contains(classSelector))
			element.classList.remove('hidden')
		else if(!element.classList.contains('hidden'))
			element.classList.add('hidden')		
	}
}

//Перейти к регистрации пользователя
goToRegBtn.addEventListener(
	'click',
	() => goToChosedBlock(mainBlocks, 'work_with_persons_registrate')
)

//Перейти к авторизации пользователя
goToLogBtn.addEventListener(
	'click',
	() => goToChosedBlock(mainBlocks, 'work_with_persons_login')
)

//Авторизироваться
logBtn.addEventListener(
	'click',
	() => goToChosedBlock(mainBlocks, 'work_with_persons_registrate')
)

//Зарегистрироваться
regBtn.addEventListener(
	'click',
	() => goToChosedBlock(mainBlocks, 'tasks')
)

//Перейти к добавлению задачи
addTaskBtn.addEventListener(
	'click',
	() => goToChosedBlock(listBlocks, 'add_change_task'))


document.documentElement.querySelector('body').addEventListener(
	'click',
	(event) => {

		//Обработка нажатия на кнопку перехода к изменению
		if(event.target.closest('.change_task_btn')) 
			goToChosedBlock(listBlocks, 'add_change_task')

		//Переход к просмотру задачи
		else if(event.target.closest('.single_task')) 
				goToChosedBlock(listBlocks, 'show_task')

		//Переход ко всем задачам
		else if(event.target.closest('.go_to_tasks_list_btn'))
				goToChosedBlock(listBlocks, 'list_of_tasks')
	}
)

