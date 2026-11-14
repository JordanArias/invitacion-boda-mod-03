/**
 * ==========================================================================
 * GALLERY.JS - GALERÍA DE FOTOS Y VISOR LIGHTBOX
 * BODA LUCÍA & PEDRO (STITCH AI - MODELO 03)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const zoomableImages = document.querySelectorAll(
    ".gallery-thumb-item img, .hero-arch-img, .qr-code-image"
  );

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Fotografía de la boda de Lucía & Pedro";
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  zoomableImages.forEach((img) => {
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
});
