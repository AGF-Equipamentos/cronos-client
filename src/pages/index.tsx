import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
