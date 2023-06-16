import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef<any>()
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // emailjs
    // .send(
    //   `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
    //   `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
    //   {
    //     from_name: form.name,
    //     to_name: "Gerald Kachi",
    //     from_email: form.email,
    //     to_email: "fitzgeraldkachi@gmail.com",
    //     message: form.message,
    //   },
    //   `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
    // )
    setLoading(true)
    emailjs
      .sendForm(
        // 'gmail',
        'service_cwlw4rh',
        'template_rk36t0l',
        form.current,
        '7D14rARv1RZ-ROOyU'
      )
      .then(
        () => {
          setLoading(false)
          alert('Message successfully sent!')
          // @ts-ignore
          form.current.reset()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input disabled={loading} style={{borderColor: loading ?  "green" : "", color: loading  ? 'green': "" }} type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Adinora Augustine Onyekachi,
          alias: gerlad kachi
          <br />
          Nigeria Lagos,
          <br />
          <br />
          <span>fitzgeraldkachi@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Kachi lives here, come over for a cup of coffee :</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  )
}

export default Contact
