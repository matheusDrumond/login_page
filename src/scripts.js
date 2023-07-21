// Lógica de mostrar oue sconder a senha e trocar os ícones
let passwordInput = document.querySelector('#password');
let hideButton = document.querySelector('#hide');
let viewButton = document.querySelector('#view');

// Mostrar a senha
hideButton.addEventListener('click', function(){
    passwordInput.type = 'text';
    hideButton.classList.add('hidden');
    viewButton.classList.remove('hidden');
});

// Esconder a senha
view.addEventListener('click', function(){
    passwordInput.type = 'password';
    viewButton.classList.add('hidden');
    hideButton.classList.remove('hidden');
})
