import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Listing2 from "./listing2"
const ListingsAll = () => {
  const data = useStaticQuery(graphql`
    query ListingQueryAll {
      allDataJson {
        nodes {
          name
          dotari
          slug
          detaliipret {
            pret
            perioada
            detaliu1
            detaliu2
          }
          detaliidescriere {
            text
            type
          }
          camere {
            name
            amount
          }
        }
      }
    }
  `)

  const getCamere = camere =>
    camere.map(camera => (
      <div>
        <p>
          {camera.name} {camera.amount}
        </p>
      </div>
    ))

  const getDotari = dotari =>
    dotari.map(dotare => (
      <div>
        <p>{dotare}</p>
      </div>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <div>
        {descriere.type === "normal" ? (
          <p style={{ color: "red" }}>{descriere.text}</p>
        ) : (
          <p style={{ color: "purple" }}>{descriere.text}</p>
        )}
      </div>
    ))

  return (
    <div className="container row">
      {// map through all the data, query formed from the graphql

      data.allDataJson.nodes.map(listing => (
        <div className="col-md-4">
          <div className="card">
            
            <img src={`/${listing.slug}.jpg/`} className="card-img-top" alt="Logo"/>
            <div className="card-body">
              <h5 className="card-title">{listing.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
            <Link to={`/${listing.slug}/`}>Visit {`${listing.name}`}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ListingsAll
