import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import destiny from '../../images/destiny.jpg'
import '../../css/Home.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <section className="hero">
        <div className="hero-text">
          <h1>Encuentra tu hotel ideal</h1>
          <p>Reserva tus próximas vacaciones con nosotros</p>
          <Link to={routes.hotels()} className="btn btn-primary">
            Buscar hoteles
          </Link>
        </div>
      </section>

      <section className="destinos">
        <div className="contenedor">
          <h2>Destinos populares</h2>
          <ul>
            <li>
              <Link to="#">
                <img src={destiny} alt="Destino 1" className="destino-img" />
                <h3>Destino 1</h3>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={destiny} alt="Destino 1" className="destino-img" />
                <h3>Destiny 2</h3>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={destiny} alt="Destino 1" className="destino-img" />
                <h3>Destiny 3</h3>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="recomendados">
        <div className="contenedor">
          <h2>Hoteles recomendados</h2>
          <div className="cards">
            <div className="card">
              <img src={destiny} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 1</h3>
                <p className="card-location">Ubicación 1</p>
                <p className="card-price">Precio por noche: $100</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={destiny} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 2</h3>
                <p className="card-location">Ubicación 2</p>
                <p className="card-price">Precio por noche: $150</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={destiny} alt="Destino 3" className="card-img" />
              <div className="card-text">
                <h3>Hotel 3</h3>
                <p className="card-location">Ubicación 3</p>
                <p className="card-price">Precio por noche: $200</p>
                <Link to="#" className="btn btn-primary">
                  Reservar{' '}
                </Link>
ar
                </a>
ction>

      <section className="comentarios">
        <div className="contenedor">
          <h2>Comentarios de nuestros usuarios</h2>
          <div className="comentario">
            <img src={destiny} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Usuario 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                varius euismod arcu, eget pulvinar libero faucibus ut.
              </p>
            </div>
          </div>
          <div className="comentario">
            <img src={destiny} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Usuario 2</h3>
              <p>
                Nullam vitae ipsum auctor, eleifend velit vel, interdum nisl.
                Praesent id libero id enim tincidunt vestibulum vitae a nisi.
              </p>
            </div>
          </div>
          <div className="comentario">
            <img src={destiny} alt="Destino 3" className="card-img" />
            <div className="contenido">
              <h3>Usuario 3</h3>
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
