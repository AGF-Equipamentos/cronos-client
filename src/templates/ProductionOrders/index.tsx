import Base from 'templates/Base'
import PoTable, { PO } from 'components/PoTable'
import PoCard from 'components/PoCard'
import { HStack, Button, Icon, Heading } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

export type PoTableProps = {
  productionOrders: PO[]
}

export type PoCard = {
  process_id: string
  part_number: string
  description: string
  qty: number
  process: string
  previousSeconds?: number
}

export default function ProductionOrders({ productionOrders }: PoTableProps) {
  const handleStart = () => {}

  return (
    <Base name="Ronaldo" department="Usinagem">
      <PoCard
        part_number="VIXMOT0011"
        process="Usinagem"
        description="MOTOR ELETRICO TRIFASICO IP-55 75CV 8P"
        qty={25}
      />
      <HStack p={6} justify="space-between">
        <Heading size="lg" fontWeight="normal">
          Geral
        </Heading>
        <Button
          colorScheme="yellow"
          size="sm"
          fontSize="sm"
          leftIcon={<Icon as={FiPlus} fontSize="16" />}
        >
          Novo
        </Button>
      </HStack>
      <PoTable data={productionOrders} handleStart={handleStart} />
    </Base>
  )
}
