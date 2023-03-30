import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Person1 from '../../images/person-1.jpg'
import Person2 from '../../images/person-2.jpg'
import Person3 from '../../images/person-3.jpg'
import destiny1 from '../../images/popular-destiny-1.png'
import destiny2 from '../../images/popular-destiny-2.jpg'
import destiny3 from '../../images/popular-destiny-3.jpg'
import Recomended1 from '../../images/Recomended-hotel-1.jpg'
import Recomended2 from '../../images/Recomended-hotel-2.jpg'
import Recomended3 from '../../images/Recomended-hotel-3.jpg'
import '../../css/Home.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <section className="hero">
        <div className="hero-text">
          <h1>RedWood Reservations</h1>
          <h2>Find your ideal hotel</h2>
          <p>Book your next vacation with us</p>
          <Link to={routes.hotels()} className="btn btn-primary">
            Search hotels
          </Link>
        </div>
      </section>

      <section className="destinos">
        <div className="contenedor">
          <h2>Popular destinations</h2>
          <ul>
            <li>
              <Link to="#">
                <img src={destiny1} alt="Destino 1" className="destino-img" />
                <h3>Destiny 1</h3>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={destiny2} alt="Destino 1" className="destino-img" />
                <h3>Destiny 2</h3>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={destiny3} alt="Destino 1" className="destino-img" />
                <h3>Destiny 3</h3>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="recomendados">
        <div className="contenedor">
          <h2>Recommended hotels</h2>
          <div className="cards">
            <div className="card">
              <img src={Recomended1} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 1</h3>
                <p className="card-location">Location 1</p>
                <p className="card-price">Price per night: $200</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={Recomended2} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 2</h3>
                <p className="card-location">Location 2</p>
                <p className="card-price">Price per night: $150</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={Recomended3} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 3</h3>
                <p className="card-location">Location 3</p>
                <p className="card-price">Price per night: $100</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comentarios">
        <div className="contenedor">
          <h2>Feedback from our users</h2>
          <div className="comentario">
            <img src={Person1} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Juan Perez</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                varius euismod arcu, eget pulvinar libero faucibus ut.
              </p>
            </div>
          </div>
          <div className="comentario">
            <img src={Person2} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Doris</h3>
              <p>
                Nullam vitae ipsum auctor, eleifend velit vel, interdum nisl.
                Praesent id libero id enim tincidunt vestibulum vitae a nisi.
              </p>
            </div>
          </div>
          <div className="comentario">
            <img src={Person3} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Michardo</h3>
              <p>
                Suspendisse ut augue vel magna posuere luctus eu ac justo. Nulla
                gravida dolor a neque vehicula, sit amet sollicitudin metus
                ultrices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
