/**
 * ==========================================================================
 * COUNTDOWN.JS - CUENTA REGRESIVA DINÁMICA Y ENLACE A GOOGLE CALENDAR
 * BODA LUCÍA & PEDRO (STITCH AI - MODELO 03)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const configDate = window.WEDDING_CONFIG?.fecha?.fechaHoraISO || "2026-11-24T15:00:00";
  const weddingDate = new Date(configDate);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    // Si la fecha configurada ya llegó o pasó, mantener el contador en 0 sin reiniciar
    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "0";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => (n < 10 ? "0" + n : n.toString());

    if (daysEl) daysEl.textContent = days.toString();
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Configurar enlace dinámico a Google Calendar
  const calendarBtn = document.getElementById("google-calendar-btn");
  if (calendarBtn && window.WEDDING_CONFIG) {
    const title = encodeURIComponent(`Boda ${window.WEDDING_CONFIG.novios.tituloPareja}`);
    const details = encodeURIComponent(
      `¡Acompáñanos a celebrar nuestra boda! Ceremonia: ${window.WEDDING_CONFIG.ceremonia.lugar} (${window.WEDDING_CONFIG.ceremonia.hora}). Recepción: ${window.WEDDING_CONFIG.recepcion.lugar} (${window.WEDDING_CONFIG.recepcion.hora}).`
    );
    const location = encodeURIComponent(
      `${window.WEDDING_CONFIG.ceremonia.lugar}, ${window.WEDDING_CONFIG.ceremonia.direccion}`
    );
    const dates = "20261124T150000/20261124T230000";
    calendarBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  }
});
