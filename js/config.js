/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRALIZADA - BODA LUCÍA & PEDRO (MODELO 03)
 * ==========================================================================
 * Este archivo centraliza todos los datos editables de la invitación.
 * Puedes modificar nombres, fechas, lugares, horarios, datos bancarios,
 * enlaces de Google Maps, álbum de fotos, WhatsApp y música desde aquí.
 */

const WEDDING_CONFIG = {
  novios: {
    nombreNovia: "Lucía",
    nombreNovio: "Pedro",
    tituloPareja: "Lucía & Pedro",
    monograma: "L / P",
    monogramaSello: "L • P",
    frasePortada: "“Dos vidas, un mismo camino, una sola historia de amor.”",
    fraseSobre: "“Dos vidas, un mismo camino”"
  },
  fecha: {
    diaSemana: "Sábado",
    diaNumero: "27",
    mesNombre: "Agosto",
    mesNumero: "08",
    anio: "2026",
    fechaPuntos: "27 · 08 · 2026",
    fechaCorta: "27.08.2026",
    fechaTexto: "27 de Agosto de 2026",
    fechaLimiteRsvp: "10 de Agosto de 2026",
    // Fecha y hora en formato ISO para la cuenta regresiva y Google Calendar
    fechaHoraISO: "2026-08-27T20:00:00",
    fechaFinISO: "2026-08-28T03:00:00"
  },
  bienvenida: {
    titulo: "BIENVENIDOS",
    mensaje: "Nos llena de alegría compartir con ustedes el inicio de esta nueva etapa.",
    citaFamilia: "El amor se fortalece con la familia y con quienes siempre nos han acompañado."
  },
  padresYPadrinos: {
    padresNovia: ["María González", "Carlos Torres"],
    padresNovio: ["Elena Vargas", "Jorge Fernández"],
    padrinos: ["Andrea Rojas", "Miguel Salazar"]
  },
  ceremonia: {
    titulo: "Ceremonia Religiosa",
    lugar: "Iglesia Santa Isabel",
    direccion: "Av. Principal Nº123",
    hora: "20:00 hrs.",
    mapsUrl: "https://maps.google.com/?q=Iglesia+Santa+Isabel+Av+Principal+123"
  },
  recepcion: {
    titulo: "Recepción Social",
    lugar: "Salón Los Olivos",
    direccion: "Av. Jardín Nº456",
    hora: "21:00 hrs.",
    mapsUrl: "https://maps.google.com/?q=Salon+Los+Olivos+Av+Jardin+456"
  },
  vestimenta: {
    titulo: "CÓDIGO DE VESTIMENTA",
    estilo: "Elegante Formal",
    colores: [
      { nombre: "Champagne", hex: "#f2e6d8" },
      { nombre: "Rosa empolvado", hex: "#e3bebe" },
      { nombre: "Terracota", hex: "#c2847a" },
      { nombre: "Marsala", hex: "#7d3f44" }
    ]
  },
  itinerario: [
    {
      hora: "20:00 hrs.",
      evento: "Ceremonia Religiosa",
      icono: "iconos/libro.gif"
    },
    {
      hora: "21:00 hrs.",
      evento: "Recepción Social",
      icono: "iconos/brindis.gif"
    },
    {
      hora: "22:00 hrs.",
      evento: "Cena",
      icono: "iconos/dinner.gif"
    },
    {
      hora: "23:00 hrs.",
      evento: "Fiesta",
      icono: "iconos/celebration.gif"
    },
    {
      hora: "00:00 hrs.",
      evento: "Torta",
      icono: "iconos/noche.gif"
    }
  ],
  regalos: {
    frase: "“Tu presencia es el mejor regalo, pero si deseas tener un detalle con nosotros, esta es una sugerencia.”",
    sugerenciaTitulo: "Sugerencia de Regalo",
    sugerenciaDetalle: "Lluvia de sobres o mesa de regalos en recepción",
    transferencia: {
      banco: "Banco Nacional",
      titular: "Lucía Torres",
      numeroCuenta: "1234567890",
      aliasOClabe: "BODALUCIAYPEDRO"
    },
    qrImagen: "img/qr_transferencia.svg"
  },
  fotosCompartidas: {
    titulo: "Comparte tus Fotos",
    urlAlbum: "https://photos.google.com/",
    hashtag: "#LuciaYPedro2026"
  },
  whatsapp: {
    telefono: "59170000000", // Número de WhatsApp para confirmaciones (con código de país)
    mensajePredefinido: "¡Hola Lucía y Pedro! Confirmo con mucha alegría mi asistencia a su boda el 27 de Agosto de 2026."
  },
  musica: {
    archivo: "music/cancion_boda.mp3",
    titulo: "Perfect",
    artista: "Ed Sheeran",
    duracionTexto: "4:10"
  }
};

if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
