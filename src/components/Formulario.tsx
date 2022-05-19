import { useForm } from "./hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

const Formulario = () => {

const {email, nombre, edad, formulario, handleChange} = useForm<FormData>({
    email: 'nami@gmail.com',
    nombre: 'Maria Nadal',
    edad: 35
});

// const { email,nombre, edad } = formulario

//  REMPLAZADO con codigo de arriba ^ ^
//     const [formulario, setFormulario] = useState({
//         email: '',
//         nombre: ''
// })

// const handleChange = ( {target}: ChangeEvent<HTMLInputElement>) => {
//     const {name, value} = target;
//  console.log(name, value)

//  setFormulario({
//    ...formulario,
//    [name]: value,
//  });
// }



  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input
          placeholder="..."
          type="email"
          className="form-control"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre: </label>
        <input
          placeholder="..."
          type="text"
          className="form-control"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre: </label>
        <input
          placeholder="..."
          type="number"
          className="form-control"
          name="edad"
          value={formulario.edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
}

export default Formulario