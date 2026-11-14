/**
 * ==========================================================================
 * INVITATION.JS - TRANSICIONES Y REVELADO CINEMÁTICO SUAVE EN SCROLL
 * BODA LUCÍA & PEDRO (STITCH AI - MODELO 03)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-invitation-container");
  const envelope = document.getElementById("envelope-screen");
  const isEnvelopePresent = envelope && !envelope.classList.contains("hidden");

  // 1. Entrada suave del contenedor principal
  if (mainContainer) {
    mainContainer.classList.add("page-dreamy-entrance");

    if (!isEnvelopePresent) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          mainContainer.classList.add("page-ready");
        }, 80);
      });
    } else {
      window.addEventListener(
        "envelopeOpened",
        () => {
          setTimeout(() => {
            mainContainer.classList.add("page-ready");
          }, 120);
        },
        { once: true }
      );
    }
  }

  // 2. Grupos de elementos con animación de revelado suave al hacer scroll
  const revealGroups = [
    // Portada / Hero
    { selector: ".hero-monogram-wrap", class: "scroll-reveal", delay: "delay-1" },
    { selector: ".hero-wave-frame", class: "scroll-reveal-scale", delay: "delay-2" },
    { selector: ".hero-quote-box", class: "scroll-reveal", delay: "delay-3" },
    { selector: ".hero-audio-player", class: "scroll-reveal-scale", delay: "delay-3" },

    // Bienvenidos, Cuenta Regresiva y Familia
    { selector: ".welcome-heading", class: "scroll-reveal" },
    { selector: ".welcome-lead-text", class: "scroll-reveal", delay: "delay-1" },
    { selector: ".date-countdown-card", class: "scroll-reveal-scale", delay: "delay-1" },
    { selector: ".inspirational-quote-wrap", class: "scroll-reveal" },
    { selector: ".family-group-box", class: "scroll-reveal", stagger: true },

    // Ceremonia y Celebración
    { selector: ".section-marsala-arch", class: "scroll-reveal" },
    { selector: ".location-col-item", class: "scroll-reveal", stagger: true },

    // Código de Vestimenta e Itinerario
    { selector: ".dress-code-block", class: "scroll-reveal" },
    { selector: ".itinerary-step-row", class: "scroll-reveal", stagger: true },

    // Regalos, Galería y Acciones
    { selector: ".gift-registry-block", class: "scroll-reveal" },
    { selector: ".gallery-thumb-item", class: "scroll-reveal-scale", stagger: true },
    { selector: ".rsvp-photos-block", class: "scroll-reveal" },
    { selector: ".footer-photo-card", class: "scroll-reveal-scale" }
  ];

  const allTargets = [];
  revealGroups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((node, index) => {
      node.classList.add(group.class);
      if (group.delay) {
        node.classList.add(group.delay);
      }
      if (group.stagger) {
        const staggerIndex = (index % 5) + 1;
        node.classList.add(`delay-${staggerIndex}`);
      }
      allTargets.push(node);
    });
  });

  if (!("IntersectionObserver" in window)) {
    allTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -30px 0px",
      threshold: 0.08
    }
  );

  const startObserving = () => {
    allTargets.forEach((el) => observer.observe(el));
  };

  if (!isEnvelopePresent) {
    setTimeout(startObserving, 120);
  } else {
    window.addEventListener(
      "envelopeOpened",
      () => {
        setTimeout(startObserving, 250);
      },
      { once: true }
    );
  }
});
