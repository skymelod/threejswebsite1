import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SkymelodsCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#87ceeb]"/>
          <div className="w-1 sm:h-80 h-40 skymelod-gradient"/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#87ceeb]"> SkyMeloD </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            ThreeJS 와 React를 활용한 연습 웹사이트입니다. <br className="sm:block hidden"/> 잘 부탁드립니다.
          </p>
        </div>
      </div>
      
      <SkymelodsCanvas /> 

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero