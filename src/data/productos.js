import imgQueso from '../assets/img/quesos-chillan.jpg'
import imgMiel from '../assets/img/miel-chillan.jpg'
import imgTejidos from '../assets/img/tejidos-chillan.jpg'
import imgLonganiza from '../assets/img/Longaniza_chillan.jpg' // <-- Importamos tu imagen

export const productos = [
  {
    id: 1,
    nombre: 'Queso Chanco de San Carlos',
    precio: 4500,
    categoria: 'Lácteos',
    imagen: imgQueso,
    descripcion: 'Queso artesanal de vaca, maduración media, tradicional de Ñuble.'
  },
  {
    id: 2,
    nombre: 'Miel de Quillón',
    precio: 3500,
    categoria: 'Miel',
    imagen: imgMiel,
    descripcion: 'Miel multifloral de productores locales, sin aditivos.'
  },
  {
    id: 3,
    nombre: 'Poncho tejido de Coihueco',
    precio: 22000,
    categoria: 'Textil',
    imagen: imgTejidos,
    descripcion: 'Poncho de lana natural, tejido a telar por artesanas de la zona.'
  },
  // Nuestro cuarto producto:
  {
    id: 4,
    nombre: 'Longaniza Ahumada Artesanal',
    precio: 8500,
    categoria: 'Embutidos',
    imagen: imgLonganiza,
    descripcion: 'Auténtica longaniza de Chillán (Cecinas Ñuble), ahumada de forma tradicional. Sabor inconfundible.'
  }
]