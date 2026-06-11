function manejador() {
  const nombre = document.getElementById('fname').value.trim();
  const apellido = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('phone').value.trim();
  const motivo = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value.trim();

  let errores = [];

  if (!nombre) errores.push('fname');
  if (!apellido) errores.push('lname');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push('email');
  if (telefono && !/^\+?[\d\s\-]{7,15}$/.test(telefono)) errores.push('phone');
  if (!motivo) errores.push('subject');
  if (!mensaje) errores.push('message');

  // Limpiar errores previos
  document.querySelectorAll('.error-msg').forEach(e => e.remove());
  document.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));

  if (errores.length > 0) {
    errores.forEach(id => {
      const campo = document.getElementById(id);
      campo.classList.add('input-error');
      const msg = document.createElement('div');
      msg.className = 'error-msg';
      msg.textContent = mensajesError[id] || 'Campo requerido.';
      campo.parentElement.appendChild(msg);
    });
    return;
  }

  document.getElementById('success').classList.remove('d-none');
  document.querySelector('button[onclick]').disabled = true;
}

const mensajesError = {
  fname: 'Ingresá tu nombre.',
  lname: 'Ingresá tu apellido.',
  email: 'Ingresá un correo electrónico válido.',
  phone: 'El teléfono no tiene un formato válido.',
  subject: 'Seleccioná un motivo de consulta.',
  message: 'Escribí tu mensaje.'
};