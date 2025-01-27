export const reports = [
  {
    nombrePaciente: "Carlos Pérez",
    idPaciente: "CC 54321",
    contrato: "Contrato Luis",
    procedencia: "Ambulatorio",
    procedimiento: "Radiografía de Tórax (PA y lateral)",
    fechaCita: "2025-01-24",
    hallazgos: {
      opacidadesIntersticiales: "Patrón reticular fino bilateral",
      consolidacion: "No hay evidencia",
      angulosCostodiafragmaticos: "Libres",
      vascularizacionPulmonar: "De calibre habitual",
      siluetaCardiaca: "Normal",
      estructurasOseasYTejidosBlandos: "Normales para su rango de edad",
    },
    conclusion: "Proceso inflamatorio peribronquial",
    medico: {
      nombre: "Luis Martínez",
      rmf: "RMF 87654",
      fechaInforme: "2025-01-24 11:20:13.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "1.4mGy",
    estado: "En diagnóstico",
  },
  {
    nombrePaciente: "Ana Gómez",
    idPaciente: "CC 11223",
    contrato: "Contrato Sofia",
    procedencia: "Urgencias",
    procedimiento: "Ecografía abdominal",
    fechaCita: "2025-01-25",
    hallazgos: {
      opacidadesIntersticiales: "No se observaron alteraciones",
      consolidacion: "Ninguna",
      angulosCostodiafragmaticos: "Normales",
      vascularizacionPulmonar: "Sin anomalías",
      siluetaCardiaca: "Adecuada",
      estructurasOseasYTejidosBlandos: "Dentro de parámetros normales",
    },
    conclusion: "No se evidencian alteraciones relevantes",
    medico: {
      nombre: "Sofia Rodríguez",
      rmf: "RMF 99876",
      fechaInforme: "2025-01-25 12:10:40.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "0.9mGy",
    estado: "Entregado",
  },
  {
    nombrePaciente: "Javier López",
    idPaciente: "CC 98765",
    contrato: "Contrato Andrea",
    procedencia: "Ambulatorio",
    procedimiento: "Radiografía de Tórax (PA y lateral)",
    fechaCita: "2025-01-26",
    hallazgos: {
      opacidadesIntersticiales: "Patrón reticular fino unilateral",
      consolidacion: "Evidencia moderada en lóbulo inferior",
      angulosCostodiafragmaticos: "Libres",
      vascularizacionPulmonar: "Usual",
      siluetaCardiaca: "Normal",
      estructurasOseasYTejidosBlandos: "En condiciones normales",
    },
    conclusion: "Sospecha de neumonía",
    medico: {
      nombre: "Andrea Ruiz",
      rmf: "RMF 23456",
      fechaInforme: "2025-01-26 13:15:00.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "1.2mGy",
    estado: "En atención",
  },
  {
    nombrePaciente: "Beatriz Martínez",
    idPaciente: "CC 76543",
    contrato: "Contrato Juan",
    procedencia: "Ambulatorio",
    procedimiento: "Ecografía ginecológica",
    fechaCita: "2025-01-27",
    hallazgos: {
      opacidadesIntersticiales: "No se aprecian",
      consolidacion: "No visible",
      angulosCostodiafragmaticos: "Sin alteraciones",
      vascularizacionPulmonar: "En parámetros normales",
      siluetaCardiaca: "Adecuada",
      estructurasOseasYTejidosBlandos: "En condiciones normales",
    },
    conclusion: "Sin hallazgos relevantes",
    medico: {
      nombre: "Juan Pérez",
      rmf: "RMF 11223",
      fechaInforme: "2025-01-27 14:25:50.0",
      tipoMedico: "Ginecólogo",
    },
    dosisRadiacion: "0.5mGy",
    estado: "En entrega de resultado",
  },
  {
    nombrePaciente: "María Clara",
    idPaciente: "CC 56789",
    contrato: "Contrato Paula",
    procedencia: "Urgencias",
    procedimiento: "Tomografía de tórax",
    fechaCita: "2025-02-02",
    hallazgos: {
      opacidadesIntersticiales: "Patrón difuso",
      consolidacion: "Moderada en base derecha",
      angulosCostodiafragmaticos: "Levemente obstruidos",
      vascularizacionPulmonar: "Aumentada",
      siluetaCardiaca: "Cardiomegalia leve",
      estructurasOseasYTejidosBlandos: "Normales",
    },
    conclusion: "Sospecha de fibrosis pulmonar",
    medico: {
      nombre: "Paula Suárez",
      rmf: "RMF 55678",
      fechaInforme: "2025-02-02 10:00:00.0",
      tipoMedico: "Neumólogo",
    },
    dosisRadiacion: "2.1mGy",
    estado: "En atención",
  },
  {
    nombrePaciente: "Santiago Ruiz",
    idPaciente: "CC 87954",
    contrato: "Contrato Pedro",
    procedencia: "Consulta Externa",
    procedimiento: "Resonancia magnética cerebral",
    fechaCita: "2025-02-10",
    hallazgos: {
      opacidadesIntersticiales: "No aplica",
      consolidacion: "No aplica",
      angulosCostodiafragmaticos: "No aplica",
      vascularizacionPulmonar: "No aplica",
      siluetaCardiaca: "No aplica",
      estructurasOseasYTejidosBlandos: "Normales",
    },
    conclusion: "Sin hallazgos patológicos",
    medico: {
      nombre: "Pedro Gómez",
      rmf: "RMF 33445",
      fechaInforme: "2025-02-10 09:45:00.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "0.3mGy",
    estado: "Entregado",
  },
  {
    nombrePaciente: "Juliana Mendoza",
    idPaciente: "CC 65478",
    contrato: "Contrato Natalia",
    procedencia: "Ambulatorio",
    procedimiento: "Mamografía bilateral",
    fechaCita: "2025-02-15",
    hallazgos: {
      opacidadesIntersticiales: "No evidentes",
      consolidacion: "No detectada",
      angulosCostodiafragmaticos: "Normales",
      vascularizacionPulmonar: "Sin cambios",
      siluetaCardiaca: "Normal",
      estructurasOseasYTejidosBlandos: "Normales",
    },
    conclusion: "Control mamográfico anual",
    medico: {
      nombre: "Natalia Suárez",
      rmf: "RMF 77889",
      fechaInforme: "2025-02-15 12:30:00.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "1.0mGy",
    estado: "En diagnóstico",
  },
  {
    nombrePaciente: "Daniel Ortega",
    idPaciente: "CC 98723",
    contrato: "Contrato Ricardo",
    procedencia: "Urgencias",
    procedimiento: "TAC de abdomen",
    fechaCita: "2025-02-20",
    hallazgos: {
      opacidadesIntersticiales: "No aplica",
      consolidacion: "Ausente",
      angulosCostodiafragmaticos: "Libres",
      vascularizacionPulmonar: "Adecuada",
      siluetaCardiaca: "Sin cambios",
      estructurasOseasYTejidosBlandos: "Normales",
    },
    conclusion: "No hay evidencia de anomalías",
    medico: {
      nombre: "Ricardo Pérez",
      rmf: "RMF 22334",
      fechaInforme: "2025-02-20 14:50:00.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "2.5mGy",
    estado: "En entrega de resultado",
  },
  {
    nombrePaciente: "Camila Torres",
    idPaciente: "CC 54320",
    contrato: "Contrato Laura",
    procedencia: "Consulta Externa",
    procedimiento: "Radiografía de mano izquierda",
    fechaCita: "2025-02-25",
    hallazgos: {
      opacidadesIntersticiales: "No aplica",
      consolidacion: "No aplica",
      angulosCostodiafragmaticos: "No aplica",
      vascularizacionPulmonar: "No aplica",
      siluetaCardiaca: "No aplica",
      estructurasOseasYTejidosBlandos: "Normales",
    },
    conclusion: "Sin fracturas ni lesiones óseas",
    medico: {
      nombre: "Laura Rodríguez",
      rmf: "RMF 33445",
      fechaInforme: "2025-02-25 08:20:00.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "0.2mGy",
    estado: "Entregado",
  },
  {
    nombrePaciente: "Paola Mendoza",
    idPaciente: "CC 67890",
    contrato: "Contrato Miguel",
    procedencia: "Ambulatorio",
    procedimiento: "Electrocardiograma",
    fechaCita: "2025-02-02",
    hallazgos: {
      ritmoCardiaco: "Sinusoidal normal",
      ondasST: "Sin alteraciones",
      frecuencias: "75 lpm",
      segmentosQT: "Dentro de rango normal",
      conclusiones: "Función cardíaca adecuada",
    },
    conclusion: "Electrocardiograma normal",
    medico: {
      nombre: "Miguel Rojas",
      rmf: "RMF 12346",
      fechaInforme: "2025-02-02 09:00:10.0",
      tipoMedico: "Cardiólogo",
    },
    dosisRadiacion: "0mGy",
    estado: "Entregado",
  },
  {
    nombrePaciente: "Sebastián Cruz",
    idPaciente: "CC 54322",
    contrato: "Contrato Isabel",
    procedencia: "Urgencias",
    procedimiento: "Tomografía craneal",
    fechaCita: "2025-02-03",
    hallazgos: {
      hemorragia: "No evidenciada",
      estructuraCerebral: "Sin desplazamiento",
      ventrículos: "Simétricos",
      huesosCraneales: "Normales",
      tejidosBlandos: "Sin anomalías",
    },
    conclusion: "No se detectan alteraciones cerebrales",
    medico: {
      nombre: "Isabel Gómez",
      rmf: "RMF 33456",
      fechaInforme: "2025-02-03 11:15:20.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "2.5mGy",
    estado: "En diagnóstico",
  },
  {
    nombrePaciente: "Andrea Castillo",
    idPaciente: "CC 11224",
    contrato: "Contrato Julián",
    procedencia: "Ambulatorio",
    procedimiento: "Ecografía pélvica",
    fechaCita: "2025-02-04",
    hallazgos: {
      útero: "Tamaño y forma normal",
      ovarios: "Sin quistes evidentes",
      vejiga: "Llena, sin alteraciones",
      tejidosAdyacentes: "Dentro de parámetros normales",
    },
    conclusion: "Ecografía sin hallazgos relevantes",
    medico: {
      nombre: "Julián Ruiz",
      rmf: "RMF 44567",
      fechaInforme: "2025-02-04 10:30:45.0",
      tipoMedico: "Ginecólogo",
    },
    dosisRadiacion: "0.8mGy",
    estado: "En atención",
  },
  {
    nombrePaciente: "Daniela Vargas",
    idPaciente: "CC 76544",
    contrato: "Contrato Valeria",
    procedencia: "Urgencias",
    procedimiento: "Resonancia magnética lumbar",
    fechaCita: "2025-02-05",
    hallazgos: {
      discosIntervertebrales: "Ligeramente deshidratados",
      médulaEspinal: "Normal",
      nerviosRaquídeos: "Sin compresión",
      tejidosBlandos: "Normales",
    },
    conclusion: "Cambios leves por la edad, sin alteraciones graves",
    medico: {
      nombre: "Valeria Torres",
      rmf: "RMF 55678",
      fechaInforme: "2025-02-05 14:50:30.0",
      tipoMedico: "Neurólogo",
    },
    dosisRadiacion: "0mGy",
    estado: "En entrega de resultado",
  },
  {
    nombrePaciente: "Jorge Romero",
    idPaciente: "CC 98766",
    contrato: "Contrato Camila",
    procedencia: "Ambulatorio",
    procedimiento: "Radiografía de abdomen",
    fechaCita: "2025-02-06",
    hallazgos: {
      gasIntestinal: "Distribución normal",
      órganosAbdominales: "Sin calcificaciones",
      huesosPélvicos: "Sin alteraciones",
    },
    conclusion: "Estudio abdominal dentro de parámetros normales",
    medico: {
      nombre: "Camila López",
      rmf: "RMF 66789",
      fechaInforme: "2025-02-06 16:45:10.0",
      tipoMedico: "Radiólogo",
    },
    dosisRadiacion: "1.1mGy",
    estado: "En diagnóstico",
  },
  {
    nombrePaciente: "Laura Gutiérrez",
    idPaciente: "CC 31416",
    contrato: "Contrato Ernesto",
    procedencia: "Urgencias",
    procedimiento: "Mamografía bilateral",
    fechaCita: "2025-02-07",
    hallazgos: {
      densidadMamaria: "Tipo B",
      microcalcificaciones: "No evidenciadas",
      masas: "Ausentes",
      tejidoMamario: "Sin distorsiones",
    },
    conclusion: "Estudio mamario normal",
    medico: {
      nombre: "Ernesto Ramírez",
      rmf: "RMF 77890",
      fechaInforme: "2025-02-07 17:20:35.0",
      tipoMedico: "Oncólogo",
    },
    dosisRadiacion: "1.5mGy",
    estado: "Entregado",
  },
  {
    nombrePaciente: "Natalia Sánchez",
    idPaciente: "CC 87655",
    contrato: "Contrato Diego",
    procedencia: "Ambulatorio",
    procedimiento: "Eco Doppler arterial",
    fechaCita: "2025-02-08",
    hallazgos: {
      flujoSanguíneo: "Sin alteraciones",
      obstrucciones: "No evidenciadas",
      aneurismas: "Ausentes",
    },
    conclusion: "Arterias con flujo normal",
    medico: {
      nombre: "Diego Hernández",
      rmf: "RMF 88901",
      fechaInforme: "2025-02-08 12:15:50.0",
      tipoMedico: "Cardiólogo",
    },
    dosisRadiacion: "0.5mGy",
    estado: "En atención",
  },
  {
    nombrePaciente: "Héctor Salazar",
    idPaciente: "CC 76545",
    contrato: "Contrato Fernanda",
    procedencia: "Urgencias",
    procedimiento: "Radiografía de columna cervical",
    fechaCita: "2025-02-09",
    hallazgos: {
      curvaturaCervical: "Leve rectificación",
      fracturas: "No evidenciadas",
      tejidosBlandos: "Sin anomalías",
    },
    conclusion: "Rectificación leve, sin lesiones significativas",
    medico: {
      nombre: "Fernanda Méndez",
      rmf: "RMF 99012",
      fechaInforme: "2025-02-09 13:30:00.0",
      tipoMedico: "Ortopedista",
    },
    dosisRadiacion: "1.3mGy",
    estado: "En entrega de resultado",
  },
];
