import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

const HeroCard = ({ photo, name }) => {
  return (
    <div className="hero-card">
      <div className="hero-card__img">
        <img src={photo} alt={`Фото ${name}`}/>
      </div>
      <h3 className="hero-card__name">{name}</h3>
      <p className="hero-card__info">

      </p>
      <div className="hero-card__control">
        <Button>Like</Button>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string
}

export default HeroCard
