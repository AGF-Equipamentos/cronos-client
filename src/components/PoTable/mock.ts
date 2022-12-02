const posMock = [
  {
    id: 100,
    attributes: {
      datetime_start: '2022-06-03T08:30:45.333Z',
      datetime_end: '2022-06-03T13:30:25.425Z',
      production_order: {
        data: {
          id: 100,
          attributes: {
            qty: 10,
            process_detail: {
              data: {
                attributes: {
                  part_number: 'VIXMOT0011',
                  qty_machine: 5,
                  description: 'MOTOR BH05P'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 100,
          attributes: {
            name: 'Furação'
          }
        }
      }
    }
  },
  {
    id: 102,
    attributes: {
      datetime_start: '2022-06-04T08:30:45.333Z',
      datetime_end: '2022-06-04T13:30:25.425Z',
      production_order: {
        data: {
          id: 102,
          attributes: {
            qty: 10,
            process_detail: {
              data: {
                attributes: {
                  part_number: '9900001374',
                  qty_machine: 1,
                  description: 'MOTOR ELETRICO'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 102,
          attributes: {
            name: 'Soldar'
          }
        }
      }
    }
  },
  {
    id: 103,
    attributes: {
      datetime_start: '2022-04-05T13:00:00.452Z',
      datetime_end: '2022-04-05T14:00:00.452Z',
      production_order: {
        data: {
          id: 103,
          attributes: {
            qty: 1,
            process_detail: {
              data: {
                attributes: {
                  part_number: 'EPI0001',
                  qty_machine: 3,
                  description: 'TREVI BENNE S P'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 103,
          attributes: {
            name: 'Usinar'
          }
        }
      }
    }
  },
  {
    id: 104,
    attributes: {
      datetime_start: '2022-04-07T08:57:32.452Z',
      datetime_end: '2022-04-07T09:10:45.397Z',
      production_order: {
        data: {
          id: 104,
          attributes: {
            qty: 1,
            process_detail: {
              data: {
                attributes: {
                  part_number: '00002',
                  qty_machine: 2,
                  description: 'FABRICA DE OCULOS'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 104,
          attributes: {
            name: 'Furar'
          }
        }
      }
    }
  },
  {
    id: 105,
    attributes: {
      datetime_start: '2022-04-29T09:26:12.123Z',
      datetime_end: '2022-04-29T14:57:00.513Z',
      production_order: {
        data: {
          id: 105,
          attributes: {
            qty: 7,
            process_detail: {
              data: {
                attributes: {
                  part_number: 'VIXMOT0011',
                  qty_machine: 3,
                  description: 'MOTOR ELETRICO'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 105,
          attributes: {
            name: 'Montar'
          }
        }
      }
    }
  },
  {
    id: 105,
    attributes: {
      datetime_start: '2022-04-18T14:59:12.123Z',
      datetime_end: '2022-04-18T15:20:45.321Z',
      production_order: {
        data: {
          id: 105,
          attributes: {
            qty: 5,
            process_detail: {
              data: {
                attributes: {
                  part_number: '00800SDE',
                  qty_machine: 7,
                  description: 'AMORTECEDOR'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 105,
          attributes: {
            name: 'Pintar'
          }
        }
      }
    }
  },
  {
    id: 106,
    attributes: {
      datetime_start: '2022-12-02T16:59:12.123Z',
      datetime_end: '2022-12-02T17:20:45.321Z',
      production_order: {
        data: {
          id: 106,
          attributes: {
            qty: 5,
            process_detail: {
              data: {
                attributes: {
                  part_number: 'ML12P',
                  qty_machine: 8,
                  description: 'POLITRIZ'
                }
              }
            }
          }
        }
      },
      process: {
        data: {
          id: 106,
          attributes: {
            name: 'Furação'
          }
        }
      }
    }
  }
]

export default posMock
