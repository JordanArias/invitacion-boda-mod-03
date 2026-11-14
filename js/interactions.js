/**
 * ==========================================================================
 * INTERACTIONS.JS - ENLACES DE MAPAS, ÁLBUM DE FOTOS Y COPIADO DE CUENTA
 * BODA LUCÍA & PEDRO (STITCH AI - MODELO 03)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.WEDDING_CONFIG;
  const toast = document.getElementById("copy-toast");

  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  if (cfg) {
    // Enlaces a Google Maps
    const churchBtn = document.getElementById("church-map-btn");
    if (churchBtn && cfg.ceremonia?.mapsUrl) {
      churchBtn.href = cfg.ceremonia.mapsUrl;
    }

    const receptionBtn = document.getElementById("reception-map-btn");
    if (receptionBtn && cfg.recepcion?.mapsUrl) {
      receptionBtn.href = cfg.recepcion.mapsUrl;
    }

    // Enlace para subir/compartir fotos
    const sharePhotosBtn = document.getElementById("share-photos-btn");
    if (sharePhotosBtn && cfg.fotosCompartidas?.urlAlbum) {
      sharePhotosBtn.href = cfg.fotosCompartidas.urlAlbum;
    }
  }

  // Botón para copiar el número de cuenta bancaria
  const copyBankBtn = document.getElementById("copy-account-btn");
  if (copyBankBtn) {
    copyBankBtn.addEventListener("click", () => {
      const accountNumber =
        cfg?.regalos?.transferencia?.numeroCuenta ||
        document.getElementById("bank-account-number")?.textContent?.trim() ||
        "1234567890";

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(accountNumber)
          .then(() => {
            showToast(`✨ ¡Cuenta ${accountNumber} copiada al portapapeles!`);
          })
          .catch(() => {
            showToast(`✨ Nº de cuenta: ${accountNumber}`);
          });
      } else {
        showToast(`✨ Nº de cuenta: ${accountNumber}`);
      }
    });
  }
});
