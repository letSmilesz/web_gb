document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.javascript').innerHTML = getDayTime();
})

function getDayTime() {
    const hours = new Date().getHours();
    if (hours < 4 || hours > 23) {
        return 'Хорошей Вам ночи'
    } else if (hours < 12) {
        return 'Хорошего Вам утра'
    } else if (hours < 18) {
        return 'Хорошего Вам дня'
    } else {
        return 'Хорошего Вам вечера'
    }
}