import Base from 'templates/Base'

export type PoNewPrpps = {
  part_number: string
  qty: number
  department: string
  workstation: string
  process: string
}

export default function NewProductionOrders({ productionOrders }: PoNewProps) {
  return (
    <Base name="Ronaldo" department="Usinagem">
      <PoNew />
    </Base>
  )
}
