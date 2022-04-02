import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={-10}
            />
          </h1>
          <p>
            Hello! I'm Adimora Augustine Onyekachi //  alias: 'Gerald kachi' 🤓, a software engineer
            based in Nigeria 🇳🇬.
          </p>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p
          // align="LEFT"
          >
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic,
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <p>Javascript (ES6+)
            <div> HTML & (S)CSS</div>
            <div>React/Redux</div>
            <div>ReactNative</div>
            <div>Node.js</div>
          </p>
          <p>
          I am open to new job opportunities. If you wanna get in touch, talk to me about a project collaboration or just say hi, click the button below or send an email to fitzgeraldkachi.com and ~let's talk!
          </p>
          </p>
          <a className="mail" href="mailto:fitzgeraldkachi@gmail.com">Say Hello</a>
        </div>


        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  )
}

export default About