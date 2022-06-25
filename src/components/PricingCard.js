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
                <p> --  Responsive Design  --</p>
                <Link to="/coming" className='btn'>
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
                <p> -- EveryTime available for everyone -- </p>
                <Link to="/coming" className='btn'>
                    Coming Soon!
                </Link>
            </div>

            <div className="card">
                <h3>
                    - SAI -
                </h3>
                <span className="bar"></span>
                <p className="btc">-- Made By Python --</p>
                <p> -- Have premium features --</p>
                <p> -- Made in linux & For Linux --</p>
                <p> -- ShashtraOS Artificial Intelligence -- </p>
                <Link to="/coming" className='btn'>
                    Coming Soon!
                </Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard;