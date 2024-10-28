var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src='../img/menu.png'
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src='../img/close.png'
    }
})

// funcionalidade que garante que e um pdf ou uma foto
document.getElementById("cadastroForm").addEventListener("submit", function(ev) {
    ev.preventDefault();  // Impede o envio do formulário

    const comprovante = document.getElementById('comprovante').files[0];
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    if (comprovante && comprovante.type !== "application/pdf" && !comprovante.type.startsWith("image/")) {
        alert("Por favor, envie apenas arquivos PDF ou imagens.");
    } else if (comprovante && comprovante.size > 5 * 1024 * 1024) {
        alert("O arquivo não pode ultrapassar 5 MB.");
    } else {
        // Exibe a mensagem de sucesso se todas as condições forem atendidas
        mensagemSucesso.innerText = "Sua família foi cadastrada com sucesso!";
        mensagemSucesso.style.display = "block";
        
        // Opcional: ocultar a mensagem após alguns segundos
        setTimeout(() => {
            mensagemSucesso.style.display = "none";
        }, 3000);
    }
});
