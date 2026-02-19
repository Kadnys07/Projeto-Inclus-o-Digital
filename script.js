
function fazerLogin(event) {
    
    event.preventDefault();

    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    
    if (senha.length < 6) {
        alert("Erro: A senha precisa ter pelo menos 6 caracteres.");
        return; 
    }

    alert("Login realizado com sucesso! Bem-vindo(a) " + email);
    
    window.location.href = "index.html";
}