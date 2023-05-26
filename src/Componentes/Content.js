import React from 'react';

const Content = () => {
  const alumnos = [
    { nombre: 'Alumno 1', miembro: true },
    { nombre: 'Alumno 2', miembro: false },
    { nombre: 'Alumno 3', miembro: true },
    // Agrega más alumnos si lo deseas
  ];

  return (
    <div className="content">
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index} className={alumno.miembro ? 'miembro' : ''}>
            {alumno.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
