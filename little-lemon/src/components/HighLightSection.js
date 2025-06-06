import React from 'react'
import  dishes  from './DataDishes'
import '../styles/HighLight.css'
import delivery from '../assets/livreur.png'
export default function HighLightSection() {
  return (
    <div className='hightlight-section'>
        <div className='hightlight-text'>
            <h2 className='hightlight-title'>This Special weeks !</h2>
            <button>online menu</button>
        </div>
        <div className='hightlight-container'>
            {dishes.map(({nom, price, description, image}) => {
                return (
                    <div className='hightlight-card' key={nom}>
                        <img src={image} alt={nom}/>
                        <div className='hightlight-card-description'>
                            <div className='hightlight-name'>
                                <h3>{nom}</h3>
                                <span>${price}</span>
                            </div>
                            <p>{description}</p>
                            <div className='hightlight-button-delivery'>
                                <button>order a delivery</button>
                                <img src={delivery} alt='commande'/>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}
