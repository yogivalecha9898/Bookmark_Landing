const req = document.querySelectorAll('.that');
req.forEach((element)=> {
    element.addEventListener('click', ()=> {
        const show = element.parentElement.nextElementSibling;
        if(show.classList.contains('d-none')) {
            show.classList.remove('d-none');
            if(element.classList.contains('rotate_opp')) {
                element.classList.remove('rotate_opp');
            }
            element.classList.add('rotate');
        } else {
            show.classList.add('d-none');
            if(element.classList.contains('rotate')) {
                element.classList.remove('rotate');
            }
            element.classList.add('rotate_opp');
        }
    });
});

function showError(input) {
    input.parentElement.classList.add("error");
    input.nextElementSibling.classList.remove('d-none');
    const para = document.querySelector('.error_para');
    para.classList.remove('d-none');
}
function showSuccess(input) {
    if(input.parentElement.classList.contains('error')) {
        input.parentElement.classList.remove("error");
    }
    if(!input.nextElementSibling.classList.contains('d-none')) {
        input.nextElementSibling.classList.add('d-none');
    }
    const para = document.querySelector('.error_para');
    if(!para.classList.contains('d-none')) {
        para.classList.add('d-none');
    }
}

const form = document.querySelector('.form-group');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const input = document.querySelector('.email');
    if(input.value === '') {
        showError(input);
    } else {
        showSuccess(input);
    }
});