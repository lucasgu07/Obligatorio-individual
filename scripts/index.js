// Función para agregar un ejercicio al listado
function agregarEjercicio(event) {
    event.preventDefault();
    const exerciseForm = document.getElementById('exercise-form');
    const exerciseName = document.getElementById('exercise-name').value;
    // Obtener los demás campos y validarlos
    // Crear un objeto de ejercicio
    const exercise = {
        name: exerciseName,
        // Agrega aquí los demás campos
    };
    // Agregar el ejercicio al listado
    agregarEjercicioAlListado(exercise);
    // Limpiar el formulario
    exerciseForm.reset();
}

// Función para agregar un ejercicio al listado de ejercicios
function agregarEjercicioAlListado(exercise) {
    const exerciseList = document.getElementById('exercise-list');
    const exerciseItem = document.createElement('div');
    exerciseItem.classList.add('exercise-item');
    exerciseItem.innerHTML = `
        <h3>${exercise.name}</h3>
        <!-- Agrega aquí los demás campos del ejercicio -->
        <button class="delete-btn">Eliminar</button>
    `;
    // Agregar evento para eliminar ejercicio
    exerciseItem.querySelector('.delete-btn').addEventListener('click', function() {
        exerciseItem.remove();
    });
    exerciseList.appendChild(exerciseItem);
}

// Event listener para el formulario de agregar ejercicio
document.getElementById('exercise-form').addEventListener('submit', agregarEjercicio);