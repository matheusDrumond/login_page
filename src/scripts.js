let passwordInput = document.querySelector('#password');
let hideButton = document.querySelector('#hide');
let viewButton = document.querySelector('#view');

hideButton.addEventListener('click', function(){
    passwordInput.type = 'text';
    hideButton.classList.add('hidden');
    viewButton.classList.remove('hidden');
});

view.addEventListener('click', function(){
    passwordInput.type = 'password';
    viewButton.classList.add('hidden');
    hideButton.classList.remove('hidden');
})
