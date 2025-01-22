import useStore from '@/helpers/store'
// import { FiArrowUpRight } from 'react-icons/fi'

export const IndexOverlay = () => {
  const router = useStore((s) => s.router)

  return (
    <main className='relative flex flex-col h-full'>
      <div className='flex flex-col items-center justify-between h-full py-36 md:py-32'>
        <span className='text-base font-light uppercase pointer-events-none md:text-xl md:relative md:self-start indent-10 text-white/50 font-ubuntu whitespace-nowrap top-28' style={{ top: '10px' }}>
          <p className='italic text-2xl text-white/80' > Hello &nbsp; &nbsp; Everyone !</p>
          <span className='italic text-2xl text-white/80'> &nbsp; &nbsp; &nbsp; A &nbsp; Professional &nbsp; Developer </span> &nbsp;<span className='italic text-2xl text-white/80'>
            with &nbsp; 8 &nbsp; years &nbsp; of &nbsp;  experience </span> <br />
        </span>
        <div className='flex flex-col items-center pointer-events-none md:self-end md:items-start'>
          <h2 className='relative italic lg:text-8xl text-[10vw] text-white/60 font-fog right-5'>
            <span className='relative lg:text-8xl left-2 text-[11vw]'>2D / 3D Full-Stack</span>
            &nbsp;&nbsp;
            <span className='lg:text-8xl text-[11vw]'>D</span>e
            <span className='font-light '>veloper</span>
          </h2>
          <div className='flex gap-2 flex-row justify-around md:flex-row'>
            <div>
              <span className='text-base font-light  md:text-xl text-white/50 font-ubuntu indent-10 whitespace-nowrap'>
                - Design and Develop Websites From 2D Web Elements to 3D Web Integrations.
              </span>
            </div>
            <div>
              <span className='text-base font-light  md:text-xl text-white/50 font-ubuntu indent-10 whitespace-nowrap'>
                - Develop 2D / 3D Games using  Three.js | Pixi.js | Phaser | Unity ...
              </span>
            </div>
            <div>
              <span className='text-base font-light  md:text-xl text-white/50 font-ubuntu indent-10 whitespace-nowrap'>
                - Primary &nbsp; Skills  &nbsp;: &nbsp; React.js, Next.js, Node.js, Three.js, Unity, Pixi.js ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </main>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='left-0 flex justify-center w-full mb-10 text-sm font-light tracking-widest md:absolute bottom-10 text-white/70 space-x-5 font-ubuntu [&>li]:flex [&>li]:items-center [&>li]:cursor-pointer [&>li]:transition-all md:justify-start md:mb-0'>
      {/* <li className=' hover:text-white'>
        <a href='https://github.com/hyamero'>GITHUB</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.instagram.com/dale.hyamero/?hl=en'>INSTAGRAM</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.linkedin.com/in/daleban/'>LINKEDIN</a>
        <FiArrowUpRight />
      </li> */}
    </ul>
  )
}
