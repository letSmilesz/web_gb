// преобразование в json
// localhost:5000/api/v1/
// axios
// code 400 не валидные данные
document.addEventListener('DOMContentLoaded', getFormData)

function getFormData() {
    const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);
    const form = document.querySelector('.order');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {};

        for (let field of form) {
            const { name } = field;

            if (name) {
                const { type, checked, value } = field;

                data[name] = isCheckboxOrRadio(type) ? checked : value;
            }
        }

        console.log(data);
    });
}

function choosePackage(n) {
    const modal = document.querySelector('.modal__window');
    const pack = document.querySelector('.package');
    pack.value = n;
    modal.classList.add('show');
}

function closeModal() {
    document.querySelector('.modal__window').classList.remove('show');
}