import { useForm } from "./hooks/useForm";

const NuevoFormulario = () => {

    const {formulario, handleChange} = useForm ({
      postal: 'a12cd',
      ciudad: 'Londres'
    });

    const {postal, ciudad} = formulario;



  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código postal: </label>
        <input
          placeholder="..."
          type="text"
          className="form-control"
          name="postal"
          value={ciudad}
          onChange={  handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad: </label>
        <input
          placeholder="..."
          type="text"
          className="form-control"
          name="ciudad"
          value={ciudad}
          onChange={handleChange }
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
}

export default NuevoFormulario