import {
  Box,
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
  handleStart: (process_id: number) => void
}

export type PO = {
  id: number
  attributes: {
    qty: number
    obs: string
    createdAt: Date
    updatedAt: Date
    finished: null
    process_detail: {
      data: {
        id: number
        attributes: {
          createdAt: Date
          updatedAt: Date
          part_number: string
          qty_machine: number
          description: string
          cut: true
          drilling: true
          machining: true
          cod_raw_material: string
          raw_material: string
          length_mm: number
          part_weight_kg: number
        }
      }
    }
    po_times: {
      data: [
        {
          id: number
          attributes: {
            datetime_start: Date
            datetime_end: Date
            createdAt: Date
            updatedAt: Date
            process: {
              data: {
                id: number
                attributes: {
                  name: string
                  createdAt: Date
                  updatedAt: Date
                }
              }
            }
          }
        },
        {
          id: number
          attributes: {
            datetime_start: Date
            datetime_end: null
            createdAt: Date
            updatedAt: Date
            process: {
              data: {
                id: number
                attributes: {
                  name: string
                  createdAt: Date
                  updatedAt: Date
                }
              }
            }
          }
        }
      ]
    }
  }
}

const PoTable = ({ data, handleStart }: PoTableProps) => {
  const {
    // Start Alert Dialog
    isOpen: isStartOpen,
    onOpen: onStartOpen,
    onClose: onStartClose
  } = useDisclosure()
  const cancelStartRef = useRef(null)
  const [currentPoID, setCurrrentPoID] = useState(0)

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
            <Tr key={po.id}>
              <Td>
                {po.attributes.process_detail.data.attributes.part_number}
              </Td>
              <Td>
                {po.attributes.process_detail.data.attributes.qty_machine}
              </Td>
              <Td>
                {po.attributes.process_detail.data.attributes.description}
              </Td>
              <Td>
                {
                  po.attributes.po_times.data[0].attributes.process.data
                    .attributes.name
                }
              </Td>
              <Td>
                {format(
                  new Date(
                    po.attributes.po_times.data[0].attributes.datetime_start
                  ),
                  "dd/MM '-' HH:mm'h'"
                )}
              </Td>
              <Td>
                {po.attributes.po_times.data[0].attributes.datetime_end
                  ? format(
                      new Date(
                        po.attributes.po_times.data[0].attributes.datetime_end
                      ),
                      "dd/MM '-' HH:mm'h'"
                    )
                  : '-'}
              </Td>
              <Td>
                <IconButton
                  variant="unstyled"
                  aria-label="Retornar OP"
                  onClick={() => {
                    onStartOpen(),
                      setCurrrentPoID(
                        po.attributes.po_times.data[0].attributes.process
                      )
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
