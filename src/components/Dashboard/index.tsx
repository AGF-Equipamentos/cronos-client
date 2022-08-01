import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export type DashboardProps = {
  data: any[]
  category: string
  measure: string
}

export default function Dashboard({ data, category, measure }: DashboardProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },

    //coloca linhas de grade
    grid: {
      show: false
    },

    //adiciona os dados no grafico
    dataLabels: {
      enabled: false
    },

    //caixa de dialogo
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'category',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: data.map((item) => item[category])
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.3
      }
    }
  }

  const series = [{ name: 'series1', data: data.map((item) => item[measure]) }]

  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Produtividade
            </Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            ></Chart>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
