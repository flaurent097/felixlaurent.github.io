window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.to_reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

const open_buttons = document.querySelectorAll('.open');
const close_buttons = document.querySelectorAll('.close');
const modal_containers = document.querySelectorAll('.modal_container');

open_buttons.forEach((open_button) => {
    open_button.addEventListener('click', () => {
        const target_modal_id = open_button.getAttribute('data-modal');
        const modal_container = document.querySelector(`.${target_modal_id}`);
        if (modal_container) {
            modal_container.classList.add('show');
            document.body.classList.add('modal_open');
        }
    });
});

close_buttons.forEach((close_button) => {
    close_button.addEventListener('click', () => {
        const modal_container = close_button.closest('.modal_container');
        if (modal_container) {
            modal_container.classList.remove('show');
            document.body.classList.remove('modal_open');
        }
    });
});

modal_containers.forEach((modal_container) => {
    modal_container.addEventListener('click', (event) => {
        if (event.target === modal_container) {
            modal_container.classList.remove('show');
            document.body.classList.remove('modal_open');
        }
    });
});