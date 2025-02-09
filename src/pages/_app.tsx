import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

const CCanvas = dynamic(() => import('@/components/layout/ccanvas'), {
  ssr: false,
})

function App({ Component, pageProps = { title: 'index', page: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f &&
        <>
          {pageProps.page == 'project' ?
            <CCanvas>{Component.r3f(pageProps)}</CCanvas>
            :
            <LCanvas>{Component.r3f(pageProps)}</LCanvas>
          }
        </>
      }
    </>
  )
}

export default App
