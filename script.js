const loader = document.querySelector("#loader");
const loaderStart = performance.now();
const MIN_LOADER_TIME = 1400;

document.body.classList.add("is-loading");

function hideLoader() {
  if (!loader) return;

  const elapsed = performance.now() - loaderStart;
  const wait = Math.max(0, MIN_LOADER_TIME - elapsed);

setTimeout(() => {
  loader.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  setTimeout(() => loader.remove(), 900);
}, wait);
}

window.addEventListener("load", hideLoader);

setTimeout(hideLoader, 6000);
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
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
const backToTop = document.querySelector("#back-to-top");

window.addEventListener(
  "scroll",
  () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 500);
  },
  { passive: true }
);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
