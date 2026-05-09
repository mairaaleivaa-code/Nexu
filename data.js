// ============================================================
//  data.js — FUENTE DE VERDAD
//  faltas: { actuales: N, maximo: N }
//  condiciones: array de strings con requisitos de promo/regular
//  programa: ruta relativa desde la carpeta UNIVERSIDAD
// ============================================================

const MATERIAS = [

  // ── MEDICINA ──────────────────────────────────────────────

  {
    id: "salud-mental",
    carrera: "Medicina",
    nombre: "Salud Mental",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "regular",
    examen: "",
    programa: "Materias/MEDICINA/CURSADA/Salud_Mental/programa-medicina-saludmental.pdf",
    campus: "",
    faltas: { actuales: 0, maximo: 3 },
    condiciones: [
      "Mínimo 75% de asistencia",
      "Aprobar ambos parciales con 4 o más",
      "Entregar todos los trabajos prácticos"
    ],
    parciales: []
  },
  {
    id: "comunitaria",
    carrera: "Medicina",
    nombre: "Comunitaria",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "regular",
    examen: "07/05/2026",
    programa: "Materias/MEDICINA/CURSADA/Comunitaria/programa-medicina-comunitaria.pdf",
    campus: "",
    faltas: { actuales: 0, maximo: 3 },
    condiciones: [
      "Mínimo 75% de asistencia",
      "Aprobar ambos parciales con 4 o más"
    ],
    parciales: [
      { nombre: "Parcial 1", fecha: "07/05/2026" }
    ]
  },
  {
    id: "arti-iii",
    carrera: "Medicina",
    nombre: "Arti III",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "regular",
    examen: "28/05/2026",
    programa: "Materias/MEDICINA/CURSADA/Arti_III/programa-medicina-articiii.pdf",
    campus: "",
    faltas: { actuales: 0, maximo: 3 },
    condiciones: [
      "Mínimo 75% de asistencia",
      "Aprobar el parcial con 4 o más"
    ],
    parciales: [
      { nombre: "Parcial 1", fecha: "28/05/2026" }
    ]
  },
  {
    id: "lengua-senas",
    carrera: "Medicina",
    nombre: "Lengua de Señas",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "promocional",
    examen: "",
    programa: "",
    campus: "",
    faltas: { actuales: 0, maximo: 2 },
    condiciones: [
      "Mínimo 80% de asistencia",
      "Aprobar ambos parciales con 7 o más",
      "Aprobar el trabajo final con 7 o más",
      "Promedio final de 7 o más"
    ],
    parciales: []
  },
  {
    id: "epidemio",
    carrera: "Medicina",
    nombre: "Epidemiología",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "regular",
    examen: "",
    programa: "Materias/MEDICINA/CURSADA/Epidemiologia/programa-medicina-epidemio.pdf",
    campus: "",
    faltas: { actuales: 0, maximo: 3 },
    condiciones: [
      "Mínimo 75% de asistencia",
      "Aprobar ambos parciales con 4 o más"
    ],
    parciales: []
  },

  // ── NUTRICIÓN ─────────────────────────────────────────────

  {
    id: "metodologia",
    carrera: "Nutrición",
    nombre: "Metodología",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "promocional",
    examen: "04/05/2026",
    programa: "programas/metodologia.pdf",
    campus: "",
    faltas: { actuales: 3, maximo: 3 },
    condiciones: [
      "80% de asistencia",
      "Aprobar ambos parciales con 7 o más",
      "Promedio final de 7 o más",
      "Entregar todos los trabajos prácticos en fecha"
    ],
    parciales: [
      { nombre: "Parcial 1", fecha: "04/05/2026" }
    ]
  },
  {
    id: "matematicas",
    carrera: "Nutrición",
    nombre: "Matemáticas",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "promocional",
    examen: "",
    programa: "Materias/NUTRICION/Cursada/Matematicas/programa-nutricion-matematicas.pdf",
    campus: "",
    faltas: { actuales: 1, maximo: 2 },
    condiciones: [
      "80% de asistencia",
      "Aprobar ambos parciales con 7 o más",
      "Promedio final de 7 o más"
    ],
    parciales: []
  },
  {
    id: "quimica-basica",
    carrera: "Nutrición",
    nombre: "Química Básica",
    año: "1° año",
    cuatrimestre: "1° cuatrimestre",
    tipo: "regular",
    examen: "08/05/2026",
    programa: "Materias/NUTRICION/Cursada/Quimica/programa-nutricion-quimicabasica.pdf",
    campus: "",
    faltas: { actuales: 1, maximo: 3 },
    condiciones: [
      "Mínimo 75% de asistencia",
      "Aprobar ambos parciales con 4 o más",
      "Aprobar los trabajos de laboratorio"
    ],
    parciales: [
      { nombre: "Parcial 1", fecha: "08/05/2026" }
    ]
  }

];

const RESUMENES = [];
const BIBLIOGRAFIA = [];
