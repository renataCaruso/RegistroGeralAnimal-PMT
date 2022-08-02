import { useEffect, useState } from "react";
import { getPet } from "../../service/axiosClient";
import Select from "react-select/creatable";
import { set } from "react-hook-form";

const BuscarFoto = () => {
  const [pets, setPets] = useState([]);
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetPets, setResetPets] = useState([])

  const options = [
    { value: "AKITA", label: "Akita" },
    { value: "BASSET_HOUND", label: "Basset Hound" },
    { value: "BEAGLE", label: "Beagle" },
    { value: "BICHON_FRISE", label: "Bicho Frise" },
    { value: "BOIADEIRO_AUSTRALIANO", label: "Boiadeiro Australiano" },
    { value: "BOSTON TERRIER", label: "Border Collie" },
    { value: "BOXER", label: "Boxer" },
    { value: "BULDOGUE_FRANCES", label: "Buldogue Francês" },
    { value: "BULDOGUE_INGLES", label: "Buldogue Inglês" },
    { value: "BULL_TERRIER", label: "Bull Terrier" },
    { value: "CANE_CORSO", label: "Cane Corso" },
    { value: "CAVALIER_KING_CHARLES SPAINEL", label: "Cavalier King Spainel" },
    { value: "CHIHUAHUA", label: "Chihuahua" },
    { value: "CHOW_CHOW", label: "Chow Chow" },
    { value: "DACHSHUND", label: "Dachshund" },
    { value: "DALMATA", label: "Dalmata" },
    { value: "DOBERMAN", label: "Doberman" },
    { value: "DOGO_ARGENTINO", label: "Dogo Argentino" },
    { value: "DOGUE_ALEMAO", label: "Dogue Alemão" },
    { value: "FILA_BRASILEIRO", label: "Fila Brasileiro" },
    { value: "GOLDEN_RETIEVER", label: "Golden Retriever" },
    { value: "JACK_RUSSEL_TERRIER", label: "Jack Russel Terrier" },
    { value: "LABRADOR_RETRIEVER", label: "Labrador" },
    { value: "LHASA_APSO", label: "Lhasa Apso" },
    { value: "LULU_DA_POMERANIA", label: "Lulu da Pomerania" },
    { value: "MASTIFF_INGLES", label: "Mastiff Inglês" },
    { value: "MASTIM_TIBETANO", label: "Mastim Tibetano" },
    { value: "PASTOR_ALEMAO", label: "Pastor Alemão" },
    { value: "PASTOR_AUSTRALIANO", label: "Pastor Australiano" },
    { value: "PASTOR_DE_SHETLAND", label: "Pastor de Shetland" },
    { value: "PEQUINES", label: "Pequines" },
    { value: "PINSCHER", label: "Pinscher" },
    { value: "PIT_BULL", label: "Pit Bull" },
    { value: "POODLE", label: "Poodle" },
    { value: "PUG", label: "Pug" },
    { value: "ROTTWEILER", label: "Rottweiler" },
    { value: "SCHNAUZER", label: "Schnauzer" },
    { value: "SHAR_PEI", label: "Shar Pei" },
    { value: "SHIBA", label: "Shiba" },
    { value: "SHIH_TZU", label: "Shih Tzu" },
    {
      value: "STAFFORDSHIRE_BULL_TERRIER",
      label: "Staffordshire Bull Terrier",
    },
    { value: "WEIMARANER", label: "Weimaraner" },
    { value: "YORKSHIRE", label: "Yorkshire" },
    { value: "SRD", label: "Sem raça definida" },
  ];

  const options2 = [
    { value: "PERSA_E_HIMALAIA", label: "Persa" },
    { value: "SIAMES", label: "Siames" },
    { value: "MAINE_COON", label: "Maine Coon" },
    { value: "ANGORA", label: "Angora" },
    { value: "SPHYNX", label: "Sphynx" },
    { value: "RAGDOLL", label: "Ragdoll" },
    { value: "ASHERA", label: "Ashera" },
    { value: "AMERICAN_SHORTHAIR", label: "American Shorthair" },
    { value: "EXOTICO", label: "Exôtico" },
    { value: "SRD", label: "Sem raça definida" },
  ];


  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const data = await getPet();
      setPets(data);
      setLoading(false);
      setResetPets(data)
    };
    get();
  }, []);

  const handleChange = (e) => {
    setRaca(e.value);
  };

  const filtrar = () => {
    console.log(pets)
    if (raca !== "") {
      const animaisFiltrados = resetPets.filter((pet) => pet.raca === raca);
      setPets(animaisFiltrados);
    }
    if (sexo !== "") {
      const animaisFiltrados = resetPets.filter((pet) => pet.raca === raca);
      setPets(animaisFiltrados);
    }

    console.log(pets);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="row">
            {/* <form onSubmit={filtrar} className="row"> */}

            <div className="row mt-8 align-items-center">
              <h2>Busca de Fotos Por Filtro</h2>

              <label className="line col-sm-6">
                {" "}
                Raça:
                <Select options={options} onChange={handleChange} />

              </label>
              <div className="col-sm-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => filtrar()}
                >
                  Filtrar
                </button>
              </div>


              <label className="line col-sm-6 ">
                        {" "}
                        Sexo:
                        <div className="form-check">
                          <input
                            value="macho"
                            checked={sexo === "macho"}
                            onChange={(e) => setSexo(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="sexoRadial"
                          />
                          <label className="form-check-label">Macho</label>
                        </div>
                        <div className="form-check">
                          <input
                            value="fêmea"
                            checked={sexo === "fêmea"}
                            onChange={(e) => setSexo(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="sexoRadial"
                          />
                          <label className="form-check-label">Fêmea</label>
                        </div>
                      </label>
            </div>

            <div className="row">
              <div className="col-sm-5">
                <ul>
                  {pets &&
                    pets.map((pet) => (
                      <li key={pet.id} className="row">
                        {" "}
                        {pet.nomePet}{" "}
                      </li>
                    ))}
                </ul>
                {/* </form> */}
              </div>
            </div>
            <div>
              {/* <ul>
        {pets.filter(pet => pet.raca === "BEAGLE").map(petfiltrado => (
          <li>
            {petfiltrado.nomePet}
          </li> 
        ))}
        </ul>   */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarFoto;
