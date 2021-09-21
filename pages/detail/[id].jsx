import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  const [detailCharacter, setDetailCharacter] = useState(null);
  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then(data => data.json())
        .then(character => {
          setDetailCharacter(character)
        })
    }

  }, [id]);

  return detailCharacter && (
    <div style={{ padding: "1rem" }}>
      <h1>{detailCharacter.name} </h1>
      <div>
        <img src={detailCharacter.image} alt="" />
      </div>
      <div>
        <p> Genero:<span> {detailCharacter?.gender} </span></p>
        <p> episode:<span> {detailCharacter?.episode[0]} </span></p>
        <p> id:<span> {detailCharacter?.id} </span></p>
        <p> location:<span> {detailCharacter?.location?.name} </span></p>
        <p> name:<span> {detailCharacter?.name} </span></p>
        <p> origin:<span> {detailCharacter?.origin?.name} </span></p>
        <p> species:<span> {detailCharacter?.species} </span></p>
        <p> status:<span> {detailCharacter?.status} </span></p>
        <p> type:<span> {detailCharacter?.type} </span></p>
      </div>
    </div>
  )
}


export default Detail
