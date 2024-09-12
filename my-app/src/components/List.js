import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca={"Dior"} lancamento={1946}/>
                <Item marca={"Givenchy"} lancamento={1952}/>
                <Item marca={"Prada"} lancamento={1913}/>
                <Item marca={"Versace"} lancamento={1978}/>
                <Item/>
            </ul>
        </>
    )
}

export default List