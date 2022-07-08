import {
  Box,
  Button,
  Text,
  Flex,
  HStack,
  useDisclosure,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  Icon
} from '@chakra-ui/react'
import { addSeconds, intervalToDuration } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { FiPause, FiXOctagon, FiX } from 'react-icons/fi'

export type PoCardProps = {
  process_id: string
  part_number: string
  description: string
  qty: number
  process: string
  previousSeconds?: number
  handlePause: (process_id: string) => void
  handleFinish: (process_id: string) => void
}

const PoCard = ({
  process_id,
  part_number,
  description,
  qty,
  process,
  previousSeconds = 0,
  handlePause,
  handleFinish
}: PoCardProps) => {
  // Pause Alert Dialog
  const {
    isOpen: isPauseOpen,
    onOpen: onPauseOpen,
    onClose: onPauseClose
  } = useDisclosure()
  const cancelPauseRef = useRef(null)

  // Finish Alert Dialog
  const {
    isOpen: isFinishOpen,
    onOpen: onFinishOpen,
    onClose: onFinishClose
  } = useDisclosure()
  const cancelFinishRef = useRef(null)

  // Timer
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)

    return () => clearInterval(timer)
  })

  const interval = intervalToDuration({
    start: new Date(),
    end: addSeconds(new Date(), seconds + previousSeconds)
  })

  return (
    <Box bg="gray.900" p="6" boxShadow="dark-lg">
      <AlertDialog
        isOpen={isPauseOpen}
        leastDestructiveRef={cancelPauseRef}
        onClose={onPauseClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="gray.900">
            <AlertDialogHeader fontSize="x-large" fontWeight="bold">
              Pausar
            </AlertDialogHeader>

            <AlertDialogBody>
              Deseja realmente pausar o processo?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelPauseRef}
                onClick={onPauseClose}
                textColor="gray.800"
                leftIcon={<Icon as={FiX} fontSize="16" />}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="yellow"
                onClick={() => handlePause(process_id)}
                ml={3}
                leftIcon={<Icon as={FiPause} fontSize="16" />}
              >
                Pausar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog
        isOpen={isFinishOpen}
        leastDestructiveRef={cancelFinishRef}
        onClose={onFinishClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="gray.900">
            <AlertDialogHeader fontSize="x-large" fontWeight="bold">
              Finalizar
            </AlertDialogHeader>

            <AlertDialogBody>
              Deseja realmente finalizar o processo?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelFinishRef}
                onClick={onFinishClose}
                textColor="gray.800"
                leftIcon={<Icon as={FiX} fontSize="16" />}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleFinish(process_id)}
                ml={3}
                leftIcon={<Icon as={FiXOctagon} fontSize="16" />}
              >
                Finalizar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Box>
        <Text fontWeight="bold" fontSize="20">
          {part_number}
        </Text>
        <Text fontWeight="bold" fontSize="14" color="gray.200">
          {description}
        </Text>
        <Text fontSize="16">Quantidade: {qty}</Text>
      </Box>
      <Flex
        direction={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="start"
        mt="6"
      >
        <Box>
          <Text fontSize="18">
            {process}:{' '}
            <Text as="strong" fontWeight="bold" color="yellow.200">
              {interval.hours && interval.hours < 10
                ? '0' + interval.hours
                : interval.hours}
              :
              {interval.minutes && interval.minutes < 10
                ? '0' + interval.minutes
                : interval.minutes}
              :
              {interval.seconds && interval.seconds < 10
                ? '0' + interval.seconds
                : interval.seconds}
            </Text>
          </Text>
        </Box>
        <HStack ml="auto">
          <Button
            onClick={onPauseOpen}
            colorScheme="yellow"
            size="sm"
            fontSize="sm"
            leftIcon={<Icon as={FiPause} fontSize="16" />}
          >
            Pausar
          </Button>
          <Button
            onClick={onFinishOpen}
            colorScheme="red"
            size="sm"
            fontSize="sm"
            leftIcon={<Icon as={FiXOctagon} fontSize="16" />}
          >
            Finalizar
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default PoCard
