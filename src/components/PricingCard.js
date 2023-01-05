import React from 'react'
import { Link } from 'react-router-dom';
import './PricingCard.css';

const PricingCard = () => {
  return (
    <div className="pricing">
    <div className="heading">
                <h1>Coming Projects...</h1>
    </div>
        <div className="card-container">
            <div className="card">
                <h3>
                    -MY SCHOOL-
                </h3>
                <span className="bar"></span>
                <p className="btc"> In 3 Dimensions </p>
                <p> --  Colrful  --</p>
                <p> -- Using pure blender --</p>
                <p> --  Responsive Design  -- </p>
                <p> -- Animated -- </p>
                <Link to="/" className='btn'>
                    Coming Soon...
                </Link>
            </div>

            <div className="card">
                <h3>
                    - SUSHRUT -
                </h3>
                <span className="bar"></span>
                <p className="btc">  Advanced NLP  </p>
                <p> -- 3 Dimensional and VR -- </p>
                <p> -- An Artificial Doctor -- </p>
                <p> --Always available-- </p>
                <p>--Decentralised |For future|</p>
                <Link to="/" className='btn'>
                    Coming Soon!
                </Link>
            </div>

            <div className="card">
                <h3>
                    - Cognize -
                </h3>
                <span className="bar"></span>
                <p className="btc">-- Failures --</p>
                <p> -- Learning from them --</p>
                <p> --  Recursion ☝️ --</p>
                <p>--But currently in school 😫😩😞-<Link to="/school">-</Link> </p>
                <p>--Even then I will do it -<Link to="/me">-</Link> </p>
                <Link to="/coming" className='btn'>
                   Results
                </Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard;