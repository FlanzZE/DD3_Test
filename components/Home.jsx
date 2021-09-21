import React, { useEffect, useState } from 'react'

const Home = () => {
  const [rymResults, setRymResults] = useState(null);
  const [paramToSearch, setParamToSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then(data => data.json())
      .then(characters => {
        const { results } = characters
        setRymResults(results)
      })

  }, []);

  useEffect(() => {

    if (paramToSearch && paramToSearch.length > 3) {
      setIsLoading(true)
      fetch(`https://rickandmortyapi.com/api/character/?name=${paramToSearch}`).then(data => data.json())
        .then(characters => {
          const { results } = characters
          setRymResults(results)
          setIsLoading(false)
        }).catch(error => {
          setIsLoading(false)
        })
    }

  }, [paramToSearch]);
  return rymResults && (
    <div style={{ maxHeight: "80vh", overflow: "auto" }} >
      <input
        placeholder="Filtrar por nombre"
        type="text"
        onChange={e => {
          setParamToSearch(e.target.value)
        }} />
      {
        isLoading ? <div>Cargando...</div> : rymResults.map(character => {
          return (<div>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
            <a href={`/detail/${character.id}`}>Ver detalles...</a>
          </div>)
        })
      }
    </div>
  )
}
export default Home
