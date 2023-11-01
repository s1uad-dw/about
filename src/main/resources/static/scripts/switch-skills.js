var skills = document.querySelectorAll("div.skill");
var skills_data = {
    'languages': [0, ['Java', 'Python', 'Rust', 'JavaScript', 'C']],
    'libs': [0, ['Spring', 'Jenkins', 'TestNG', 'Aiogram', 'Tauri', 'Selenium']],
    'ability': [0, ['SQL', 'HTML', 'CSS', 'GIT', 'Linux', 'Парсинг', 'Информационный поиск']],
    'personal-achievements': [0, ['Школьник изобретатель']],
    'personal-qualities': [0, ['Коммуникабельность', 'Обучаемость', 'Исполнительность', 'Настойчивость', 'Пунктуальность']],
    'work-experience': [0, ['Фрилансер', 'Преподаватель академии ТОП']]
}
skills.forEach(skill =>{
    index = skills_data[skill.id][0]
    values = skills_data[skill.id][1]
    skill.insertAdjacentHTML('beforeend', `<span class="skill" id="${skill.id}">${values[index]}<span>`);
})

var reload_imgs =document.querySelectorAll('img.reload');
reload_imgs.forEach(reload_img =>{
    reload_img.addEventListener('click', ()=>{
        var skill = document.querySelector(`span.skill#${reload_img.id}`)
        console.log(skills_data[reload_img.id][0], skills_data[reload_img.id][1].length)
        if (skills_data[reload_img.id][0]+1>=skills_data[reload_img.id][1].length) {
            skills_data[reload_img.id][0] = -1
            console.log('update index')
        }
        skill.style.color = '#191d19'
        setTimeout(()=>{
            skill.textContent = skills_data[reload_img.id][1][++skills_data[reload_img.id][0]]
            skill.style.color = '#d1d2d1'
          }, 100);
        
    })
})
