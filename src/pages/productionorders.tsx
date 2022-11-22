import posMock from 'components/PoTable/mock'
import ProductionOrders, { PoTableProps } from 'templates/ProductionOrders'

export default function productionordensPage({
  productionOrders
}: PoTableProps) {
  return <ProductionOrders productionOrders={productionOrders} />
}

export const getServerSideProps = async () => {
  // chamda no strapi GET production orders
  return {
    props: {
      productionOrders: posMock
    }
  }
}
