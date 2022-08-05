import { Heading } from '@chakra-ui/react'

export type HomeProps = {
  characters?: Pick<Character, 'name' | 'image'>[]
}

const Home = ({ characters }: HomeProps) => (
  <div>
    <Heading>Cronos</Heading>

    <div>
      {characters?.map(({ name, image }) => (
        <Headers />
      ))}
    </div>
  </div>
)

export default Home
