
import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
       
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de software"
          empresa="Amazonas"
          testimonio="Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          imagen="shawn"
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniero de software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble."
          imagen="sarah"
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniero de software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se atascó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          imagen="emma"
        />
      </div>

    </div>
  );
}

export default App;
