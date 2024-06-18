// Função para exibir a tela após o login
function showAfterLogin() {
    document.getElementById("afterLogin").style.display = "block";
}

// Funções para as opções Aim Lock, Aim Fov, Aim Head e Regedit
function aimLock() {
    alert("Lock Ativado Go");
}

function aimFov() {
    alert("Melhorado Head");
}

function aimHead() {
    alert("Dura 20 Minutos");
}

function regedit() {
    alert("Reparacao 2 Plano");
}

// Event listener para o formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    showAfterLogin(); // Exibe a tela após o login
});
