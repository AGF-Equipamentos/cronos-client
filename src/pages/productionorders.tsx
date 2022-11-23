import posMock from 'components/PoTable/mock'
import * as qs from 'qs'
import { api } from 'services/api'
import ProductionOrders, { PoTableProps } from 'templates/ProductionOrders'

export default function productionordensPage({
  productionOrders
}: PoTableProps) {
  return <ProductionOrders productionOrders={productionOrders} />
}

export const getServerSideProps = async () => {
  // chamda no strapi GET production orders
  const query = qs.stringify(
    {
      populate: ['production_order.process_detail', 'process']
    },
    {
      encodeValuesOnly: true // prettify URL
    }
  )

  const { data: productionOrders } = await api.get(`po-times?${query}`)

  // const productionOrders = await api.get(`po-times`, {
  //   params: {
  //     'populate[0]': 'production_order.process_detail',
  //     'populate[1]': 'process'
  //   }
  // })

  // console.log(productionOrders.data)
  return {
    props: {
      productionOrders: posMock
    }
  }
}
