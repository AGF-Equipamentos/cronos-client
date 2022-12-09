const posMock = [
  {
    id: 2,
    attributes: {
      qty: 2,
      obs: 'Teste',
      createdAt: '2022-10-28T15:03:24.387Z',
      updatedAt: '2022-12-05T15:26:46.478Z',
      finished: null,
      process_detail: {
        data: {
          id: 867,
          attributes: {
            createdAt: '2022-11-23T18:06:03.976Z',
            updatedAt: '2022-11-23T18:06:03.976Z',
            part_number: 'VIXMOT0011',
            qty_machine: 20,
            description: 'MOTOR 75CV',
            cut: true,
            drilling: true,
            machining: true,
            cod_raw_material: 'COD0001',
            raw_material: 'DESCRIÇÃO',
            length_mm: 10,
            part_weight_kg: 20
          }
        }
      },
      po_times: {
        data: [
          {
            id: 25,
            attributes: {
              datetime_start: '2022-11-22T20:42:01.063Z',
              datetime_end: '2022-12-01T17:37:00.000Z',
              createdAt: '2022-11-22T20:42:01.095Z',
              updatedAt: '2022-12-05T15:26:42.144Z',
              process: {
                data: {
                  id: 2,
                  attributes: {
                    name: 'Usinagem',
                    createdAt: '2022-11-22T20:26:26.371Z',
                    updatedAt: '2022-11-22T20:26:26.371Z'
                  }
                }
              }
            }
          },
          {
            id: 27,
            attributes: {
              datetime_start: '2022-11-23T10:21:43.189Z',
              datetime_end: null,
              createdAt: '2022-11-23T10:21:43.568Z',
              updatedAt: '2022-11-23T10:21:43.568Z',
              process: {
                data: {
                  id: 1,
                  attributes: {
                    name: 'Pintura',
                    createdAt: '2022-11-22T20:25:25.842Z',
                    updatedAt: '2022-11-22T20:26:15.035Z'
                  }
                }
              }
            }
          }
        ]
      }
    }
    // },
    // {
    //   id: 102,
    //   attributes: {
    //     datetime_start: '2022-06-04T08:30:45.333Z',
    //     datetime_end: '2022-06-04T13:30:25.425Z',
    //     production_order: {
    //       data: {
    //         id: 102,
    //         attributes: {
    //           qty: 10,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: '9900001374',
    //                 qty_machine: 1,
    //                 description: 'MOTOR ELETRICO'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 102,
    //         attributes: {
    //           name: 'Soldar'
    //         }
    //       }
    //     }
    //   }
    // },
    // {
    //   id: 103,
    //   attributes: {
    //     datetime_start: '2022-04-05T13:00:00.452Z',
    //     datetime_end: '2022-04-05T14:00:00.452Z',
    //     production_order: {
    //       data: {
    //         id: 103,
    //         attributes: {
    //           qty: 1,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: 'EPI0001',
    //                 qty_machine: 3,
    //                 description: 'TREVI BENNE S P'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 103,
    //         attributes: {
    //           name: 'Usinar'
    //         }
    //       }
    //     }
    //   }
    // },
    // {
    //   id: 104,
    //   attributes: {
    //     datetime_start: '2022-04-07T08:57:32.452Z',
    //     datetime_end: '2022-04-07T09:10:45.397Z',
    //     production_order: {
    //       data: {
    //         id: 104,
    //         attributes: {
    //           qty: 1,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: '00002',
    //                 qty_machine: 2,
    //                 description: 'FABRICA DE OCULOS'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 104,
    //         attributes: {
    //           name: 'Furar'
    //         }
    //       }
    //     }
    //   }
    // },
    // {
    //   id: 105,
    //   attributes: {
    //     datetime_start: '2022-04-29T09:26:12.123Z',
    //     datetime_end: '2022-04-29T14:57:00.513Z',
    //     production_order: {
    //       data: {
    //         id: 105,
    //         attributes: {
    //           qty: 7,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: 'VIXMOT0011',
    //                 qty_machine: 3,
    //                 description: 'MOTOR ELETRICO'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 105,
    //         attributes: {
    //           name: 'Montar'
    //         }
    //       }
    //     }
    //   }
    // },
    // {
    //   id: 105,
    //   attributes: {
    //     datetime_start: '2022-04-18T14:59:12.123Z',
    //     datetime_end: '2022-04-18T15:20:45.321Z',
    //     production_order: {
    //       data: {
    //         id: 105,
    //         attributes: {
    //           qty: 5,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: '00800SDE',
    //                 qty_machine: 7,
    //                 description: 'AMORTECEDOR'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 105,
    //         attributes: {
    //           name: 'Pintar'
    //         }
    //       }
    //     }
    //   }
    // },
    // {
    //   id: 106,
    //   attributes: {
    //     datetime_start: '2022-12-02T16:59:12.123Z',
    //     datetime_end: '2022-12-02T17:20:45.321Z',
    //     production_order: {
    //       data: {
    //         id: 106,
    //         attributes: {
    //           qty: 5,
    //           process_detail: {
    //             data: {
    //               attributes: {
    //                 part_number: 'ML12P',
    //                 qty_machine: 8,
    //                 description: 'POLITRIZ'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     process: {
    //       data: {
    //         id: 106,
    //         attributes: {
    //           name: 'Furação'
    //         }
    //       }
    //     }
    //   }
  }
]

export default posMock
