import Base from 'templates/Base'
import PoNew, { CreatePoNewFormData } from 'components/PoNew'

export type PoNewProps = {
  newproductionOrders: CreatePoNewFormData[]
}

export default function NewProductionOrders({
  newproductionOrders
}: PoNewProps) {
  const handleStart = () => {}
  return (
    <Base name="Ronaldo" department="Usinagem">
      <PoNew handleStart={handleStart} />
    </Base>
  )
}
