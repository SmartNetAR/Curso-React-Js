import { useState } from "react";

const Search = (props) => {
        //nombre del estado, como modifcar el mismo = useState( Inicializacion del estado )
  const [buscar, setBuscar] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    setBuscar(valor);
  };

  const handleClick = (buscar) =>
  {
    props.handleSearch(buscar);
  }

  return (
    <>
      <div className="mb-3 row d text-center">
        <label htmlFor="staticEmail" className="mb-4 display-5 cyan-600">
          Buscar
        </label>
        <div>
          <input
            type="number"
            className="form-control"
            name="buscar"
            onChange={handleChange}
            value={buscar}
          />
        </div>
      </div>
      
        <button type="button" className="btn btn-outline-primary"
            onClick={() =>handleClick(buscar)}>Ver Estado
        </button>
    </>
  );
};

export default Search;
