import { useState } from "react"

function Condicional() {

    const [email, SetEmail] = useState()
    const [userEmail, SetUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        SetUserEmail(email)
        console.log(`O email cadastrado foi ${userEmail}`)
    }

    function limparEmail() {
        SetUserEmail('')
    }


    return(
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e) => SetEmail(e.target.value)} ></input>
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email digitado foi: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional