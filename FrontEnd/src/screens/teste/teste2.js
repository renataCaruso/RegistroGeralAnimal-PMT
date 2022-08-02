import { useState } from "react";

const Teste2 = () => {
    const [foto, setFoto] = useState("")


    const uploadFoto = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file);
        console.log(base64)
        setFoto(base64)
        
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            
            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    return(
        <div>
            <label>
              <input 
              // {...register("foto" , {required: true})}
               type="file"
               name="foto" 
               placeholder="foto"
               onChange={(e) => uploadFoto(e)}

              />
            </label>
            <br></br>
            <img src={foto} height="200px"/>

        </div>
    )
}

export default Teste2