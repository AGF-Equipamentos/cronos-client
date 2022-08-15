import NewProductionOrders from 'templates/NewPo'

export default function productionordensNewPage({
  productionOrdersNew
}: PoNewProps) {
  return <NewProductionOrders newproductionOrders={productionOrdersNew} />
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
