import styles from './Pessoa.module.css'

function Pessoa ({foto, nome, tempo, comentario}) {

    return(
        <div>
            <img src={foto} alt={nome}></img>
            <h2 className={styles.nomeContent}>{nome}</h2>
            <p>{tempo}</p>
            <hr width="600px"></hr>
            <p className={styles.comentarioContent}>{comentario}</p>
        </div>
    )
}

export default Pessoa