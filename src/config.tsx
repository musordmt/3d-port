import Head from 'next/head'

const titleDefault = 'MusorDMT'
const url = 'https://daleban3d.vercel.app/'
const description =
  'MusorDMT is a Creative Developer with 8 years of professional experience. He is an autodidact with a passion for building beautiful and interactive websites.'
const author = 'MusorDMT'

const Header = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Software Engineer, Creative Developer, React Developer, Filipino Developer, 3D Develper'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />

        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />

        <meta name='og:image' content={'/icons/thumbnail.jpg'} />
        <meta name='og:site_name' content='3D Portfolio' />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href='/icons/safari-pinned-tab.svg'
        />
        <link rel='apple-touch-startup-image' href='/startup.png' />

        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@hyamero' />
      </Head>
    </>
  )
}

export default Header
