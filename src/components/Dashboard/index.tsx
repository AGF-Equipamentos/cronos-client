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
  measureTitle: string
}

export default function Dashboard({
  data,
  category,
  measure,
  measureTitle
}: DashboardProps) {
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

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%'
      }
    },

    //adiciona os dados no grafico
    dataLabels: {
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
    yaxis: {
      title: {
        text: measureTitle
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return val + '%'
        }
      }
    },
    fill: {
      opacity: 0.6
    }
  }

  const series = [
    { name: measureTitle, data: data.map((item) => item[measure]) }
  ]

  return (
    <Flex direction="column" /*h="100vh"*/>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid
          w="100%"
          maxWidth={{
            base: 1480,
            '2xl': 1032
          }}
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p={['6', '8']} pb="4">
            <Text fontSize="lg" mb="4">
              {measureTitle}
            </Text>
            <Chart options={options} series={series} type="bar" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
