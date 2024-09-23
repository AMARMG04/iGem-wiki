import React, { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three' // Vanta requires THREE.js to be available
import { TypeAnimation } from "react-type-animation";
const BirdBanner = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color1: 0xac25,
          colorMode: "lerpGradient",
          birdSize: 0.30,
          THREE 
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh' }}>
      <TypeAnimation
        sequence={[
          props.title,
          2000,
          "",
          1000,
        ]}
        repeat={Infinity}
        className="text-white text-[100px] font-nohemi_m absolute inset-0 flex items-center justify-center typewriter"
      />
    </div>
  )
}

export default BirdBanner
