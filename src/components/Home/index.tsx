import "./index.scss"
// import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"

import Loader from 'react-loaders'

import Logo from "./Logo/index"

const Home = () => {
    const [letterClass, setLetterClass] = useState<string>("text-animate")
    const nameArray = ['G', 'e', 'r', 'a', 'l', 'd', '', '', 'k', 'a', 'c', 'h', 'i']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        ' ',
        '&',
        ' ',
        ' ',
        'M',
        'o',
        'b',
        'i',
        'l',
        'e',
        ' ',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        {/* <h1>H1, <br /> I'm {" "} */}
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span> {' '}
                        {/* <img src={LogoTitle} alt="developer" /> {""} */}
                        {/* Geraldkachi */}
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={10} />
                        {/* Web & Mobile Developer */}
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert</h2>
                    <Link to="/contact" className="flat-btn">Contact Me</Link>
                </div>
                <div className="logo">
                    <Logo  />
                </div>
            </div>
            <Loader active type="pacman" />
        </>
    )
}

export default Home
