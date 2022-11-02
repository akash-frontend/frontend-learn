const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')
const userName = document.querySelector('.logined-user')

const changeMode = () =>  {
    toggleCircle.classList.toggle('toggle__circle-right')
    document.body.classList.toggle('mode')
}

userName.textContent = localStorage.getItem("userPassword")
toggle.addEventListener('click', changeMode)

