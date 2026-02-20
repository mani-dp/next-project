 interface Iprops {
    params: Promise<{id: string}>
 }

async function productsId({params} : Iprops) {
    const { id } = await params;

    return <h3>is product Id = {id} </h3>
}

export default productsId