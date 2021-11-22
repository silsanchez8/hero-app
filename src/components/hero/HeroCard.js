import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeroCard.styles';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <S.Card className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="img-fluid rounded-start"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link className="btn btn-outline-primary" to={`./hero/${id}`}>
              Más...
            </Link>
          </div>
        </div>
      </div>
    </S.Card>
  );
};
