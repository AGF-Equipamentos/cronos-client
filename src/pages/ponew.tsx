import NewProductionOrders, { PoNewProps } from 'templates/NewPo'

export default function newproductionordensPage({
  newproductionOrders
}: PoNewProps) {
  return <NewProductionOrders newproductionOrders={newproductionOrders} />
}

export const getStaticProps = async () => {
  return {
    props: {
      //efficienDataByDay: getEfficiency(po_times)
    }
  }
}
