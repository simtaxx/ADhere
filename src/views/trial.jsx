import React, { useState, useEffect } from "react"

import Header from "../components/layouts/header"
import Breadcrumb from "../components/modules/breadcrumb"
import TrialCards from "../assets/data/federation_list.json"
import TrialCard from "../components/ui/trialCard"
import Save from "../components/ui/save"
import AxiosGet from "../components/mixins/axios"

const Trial = () => {
  const [idPage, setIdPage] = useState(0)
  const [cards, setCards] = useState(0)
  const [dataDetails, setDataDetails] = useState([])
  const [dataCsp, setDataCsp] = useState([])

  const setDetailsParams = () => {
    let data = JSON.parse(localStorage.getItem("audienceData"))
    let newParams = {}
    data.forEach(element => {
      if (element.category === "sexe") {
        newParams.sexe = newParams.sexe + "," + element.value.substring(0, 1)
      } else if (element.category === "age") {
        newParams.ageRanges = newParams.ageRanges + "," + element.value
      } else if (element.category === "csp") {
        newParams.federationIds = 1
      }
    })
    return newParams
  }

  let formatedParams = setDetailsParams()
  const [paramsCsp, setParamsCsp] = useState({
    federationIds: "1"
  })

  const creatCardModel = (card, i) => {
    let model = { ...card, checked: false, key: "card__" + i } // Create a model to add a checked property
    return model
  }

  // create the pagination
  const cardsBycard = () => {
    let newCards = [[]]
    let current = 0
    Object.values(TrialCards).forEach((card, i) => {
      if (7 < newCards[current].length) {
        newCards.push([])
        current++
      }
      newCards[current].push(creatCardModel(card, i))
    })
    setCards(newCards)
  }

  useEffect(() => {
    (async () => {
      const resultDetails = await AxiosGet(
        "http://127.0.0.1:8000/federationDetails",
        { formatedParams }
      )
      setDataDetails(resultDetails.data)
      const resultCsp = await AxiosGet("http://127.0.0.1:8000/federationCsp", {
        paramsCsp
      })
      setDataCsp(resultCsp.data)
    })()
  }, [paramsCsp])

  useEffect(() => {
    if (!cards) {
      cardsBycard()
    }
  })

  const setNewValue = i => {
    let newCards = JSON.parse(JSON.stringify(cards))
    newCards[idPage][i].checked = newCards[idPage][i].checked ? false : true
    setCards(newCards)
  }

  return (
    <div className="Epreuve">
      <Header title="Épreuves"></Header>
      <div className="big-gap">
        <h2>Épreuves disponible aux dates séléctionnées</h2>
        <h3>Choisisez les épreuves qui vous intéressent</h3>
        <p className="description">
          Plus la correspondance est élevée plus le public touché correspondra a
          votre audience ciblé
        </p>
        <form>
          <div className="input-container--flex">
            {cards[idPage]
              ? cards
                  .find((e, id) => idPage === id)
                  .map((trialCard, i) => {
                    return (
                      <TrialCard
                        {...trialCard}
                        setNewValue={() => {
                          setNewValue(i)
                        }}
                      />
                    )
                  })
              : ""}
          </div>
          <Save />
        </form>
        <span
          className="previous-arrow"
          onClick={() => setIdPage(idPage > 0 ? idPage - 1 : idPage)}
        ></span>
        <span
          className="next-arrow"
          onClick={() => setIdPage(idPage < 1 ? idPage + 1 : idPage)}
        ></span>
        <Breadcrumb pathRef="trial" />
      </div>
    </div>
  )
}

export default Trial
