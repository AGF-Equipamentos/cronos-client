import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Icon,
  IconButton
} from '@chakra-ui/react'
import format from 'date-fns/format'
import { useRef, useState } from 'react'
import { FiPlay, FiX } from 'react-icons/fi'

export type PoTableProps = {
  data: PO[]
  handleStart: (process_id: string) => void
}

export type PO = {
  process_id: string
  part_number: string
  quantity: number
  description: string
  process: string
  begin: string
  end: string
}

const PoTable = ({ data, handleStart }: PoTableProps) => {
  const {
    // Start Alert Dialog
    isOpen: isStartOpen,
    onOpen: onStartOpen,
    onClose: onStartClose
  } = useDisclosure()
  const cancelStartRef = useRef(null)
  const [currentPoID, setCurrrentPoID] = useState('')

  return (
    <Box bg="gray.800" p="6">
      <AlertDialog
        isOpen={isStartOpen}
        leastDestructiveRef={cancelStartRef}
        onClose={onStartClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="gray.900">
            <AlertDialogHeader fontSize="x-large" fontWeight="bold">
              Retornar OP
            </AlertDialogHeader>

            <AlertDialogBody>
              Deseja realmente retornar ao processo?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelStartRef}
                onClick={onStartClose}
                textColor="gray.800"
                leftIcon={<Icon as={FiX} fontSize="16" />}
              >
                Cancelar
              </Button>
              <Button
                alignContent="center"
                colorScheme="yellow"
                onClick={() => handleStart(currentPoID)}
                ml={3}
                leftIcon={<Icon as={FiPlay} fontSize="16" />}
              >
                Retornar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Table>
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Quantidade</Th>
            <Th>Descrição</Th>
            <Th>Processo</Th>
            <Th>Inicio</Th>
            <Th>Fim</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(0, 6).map((po) => (
            <Tr key={po.process_id}>
              <Td>{po.part_number}</Td>
              <Td>{po.quantity}</Td>
              <Td>{po.description}</Td>
              <Td>{po.process}</Td>
              <Td>{format(new Date(po.begin), "dd/MM '-' HH:mm'h'")}</Td>
              <Td>{format(new Date(po.end), "dd/MM '-' HH:mm'h'")}</Td>
              <Td>
                <IconButton
                  variant="unstyled"
                  aria-label="Retornar OP"
                  onClick={() => {
                    onStartOpen(), setCurrrentPoID(po.process_id)
                  }}
                  colorScheme="yellow"
                  size="sm"
                  p="3"
                  icon={<Icon as={FiPlay} boxSize={4} />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
export default PoTable
