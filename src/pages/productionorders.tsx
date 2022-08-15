import posMock from 'components/PoTable/mock'
import ProductionOrders, { PoTableProps } from 'templates/ProductionOrders'

export default function productionordensPage({
  productionOrders
}: PoTableProps) {
  return <ProductionOrders productionOrders={productionOrders} />
}

export const getStaticProps = async () => {
  return {
    props: {
      productionOrders: posMock
    }
  }
}
