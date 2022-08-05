import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
//import { Character } from 'graphql/generated/graphql'

export type BaseProps = {
  characters?: Pick<Character, 'name' | 'image'>[]
}

const Base = ({ characters }: BaseProps) => (
  <div>
    <Header name={''} department={''} />
    <Sidebar menuItems={[]} />
  </div>
)

export default Base
