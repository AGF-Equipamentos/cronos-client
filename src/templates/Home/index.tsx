import Header from 'components/Header'

export type HeaderProps = {
  name: string
  department: string
}

const Home = () => (
  <div>
    <div>
      <Header name="Ronaldo" department="Usinagem" />
    </div>
  </div>
)

export default Home
