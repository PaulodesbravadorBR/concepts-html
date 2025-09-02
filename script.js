// Alterna a classe "light" no <html> ao clicar no botão
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;          // <html>
  const btn  = document.getElementById("theme-toggle");

  // Começa no ESCURO (sem .light). Se quiser iniciar claro, descomente:
  // html.classList.add("light");

  btn.addEventListener("click", () => {
    html.classList.toggle("light");
  });
});
