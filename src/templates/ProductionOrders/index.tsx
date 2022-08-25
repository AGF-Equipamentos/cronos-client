import Base from 'templates/Base'
import PoCard from 'components/PoCard'
import PoTable, { PO } from 'components/PoTable'
import { HStack, Button, Icon, Heading } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import Link from 'next/link'

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
  const handlePause = () => {}
  const handleFinish = () => {}

  return (
    <Base name="Ronaldo" department="Usinagem">
      <PoCard
        process_id="001"
        part_number="VIXMOT0011"
        process="Usinagem"
        description="MOTOR ELETRICO TRIFASICO IP-55 75CV 8P"
        qty={25}
        handlePause={handlePause}
        handleFinish={handleFinish}
      />
      <HStack p={6} mt={6} justify="space-between">
        <Heading size="lg" fontWeight="normal">
          Geral
        </Heading>
        <Link href="/ponew" passHref>
          <Button
            as="a"
            colorScheme="yellow"
            size="sm"
            fontSize="sm"
            leftIcon={<Icon as={FiPlus} fontSize="16" />}
          >
            Novo
          </Button>
        </Link>
      </HStack>
      <PoTable data={productionOrders} handleStart={handleStart} />
    </Base>
  )
}
