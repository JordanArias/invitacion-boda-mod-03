/**
 * ==========================================================================
 * ENVELOPE.JS - APERTURA DEL SOBRE 3D INTERACTIVO Y SELLO DE CERA DORADO
 * BODA LUCÍA & PEDRO (STITCH AI - MODELO 03)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const envelopeScreen = document.getElementById("envelope-screen");
  const envelopeStage = document.getElementById("envelope-stage");
  const waxSeal = document.getElementById("wax-seal");
  const openBtn = document.getElementById("open-envelope-btn");
  const openBtnLabel = document.getElementById("open-envelope-label");

  let isOpened = false;

  const triggerOpenEnvelope = (e) => {
    if (e) e.stopPropagation();
    if (isOpened) return;
    isOpened = true;

    // Vibración háptica sutil en dispositivos móviles
    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(40);
      } catch (_) {}
    }

    // Solicitar inicio de música con la interacción del invitado
    window.dispatchEvent(new CustomEvent("requestPlayMusic"));

    // 1. Activar animación 3D del sobre (solapa abre y carta interior sube)
    if (envelopeStage) {
      envelopeStage.classList.add("opened");
    }

    if (openBtnLabel) {
      openBtnLabel.textContent = "Abriendo Invitación...";
    }

    // 2. Después de mostrar la carta deslizándose, desvanecer hacia la invitación
    setTimeout(() => {
      if (envelopeScreen) {
        envelopeScreen.classList.add("closing-portal");
      }

      window.dispatchEvent(new CustomEvent("envelopeOpened"));

      setTimeout(() => {
        if (envelopeScreen) {
          envelopeScreen.classList.add("hidden");
        }
      }, 900);
    }, 1150);
  };

  if (envelopeStage) {
    envelopeStage.addEventListener("click", triggerOpenEnvelope);
  }

  if (waxSeal) {
    waxSeal.addEventListener("click", triggerOpenEnvelope);
  }

  if (openBtn) {
    openBtn.addEventListener("click", triggerOpenEnvelope);
  }
});
