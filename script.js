const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const contactForm = document.querySelector("#contact-form");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");

  mobileMenu.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const nome = data.get("nome")?.trim() || "";
  const whatsapp = data.get("whatsapp")?.trim() || "";
  const interesse = data.get("interesse") || "Não informado";
  const mensagem = data.get("mensagem")?.trim() || "Não informada";

  const texto = [
    "Olá! Gostaria de agendar uma avaliação.",
    "",
    `Nome: ${nome}`,
    `Meu WhatsApp: ${whatsapp}`,
    `Interesse: ${interesse}`,
    `Mensagem: ${mensagem}`
  ].join("\n");

  const numeroWhatsApp = "5500000000000";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank", "noopener");
});