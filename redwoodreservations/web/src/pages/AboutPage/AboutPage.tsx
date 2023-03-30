import { MetaTags } from '@redwoodjs/web'
import '../../css/About.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <MetaTags title="About" description="About page" />
      <h2>About</h2>
      <p>
        Welcome to our page for hotel reservations in Costa Rica. Here you will
        find a wide variety of lodging options to meet your travel needs in this
        beautiful Central American country. From luxury resorts to small country
        inns, we have something for every budget and preference. Our easy-to-use
        booking platform allows you to search for hotels by location, price,
        type of accommodation and amenities. You can also read reviews from
        other guests and view photos of the hotel and its facilities to ensure
        you are making the right choice. In addition, we offer special offers
        and exclusive promotions at some of the best hotels in Costa Rica.
        Whether you are looking for a beach vacation on the Pacific coast or a
        mountain retreat in the Monteverde region, we have the perfect
        accommodation for you. And for your peace of mind, our customer support
        team is available 24/7 to assist you with any questions or issues you
        may have before, during, or after your stay in Costa Rica. Reserve your
        hotel online today and prepare to enjoy an unforgettable experience in
        one of the most beautiful countries in the world.
      </p>
    </div>
  )
}

export default AboutPage
