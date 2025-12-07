export const ordersMock = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return productsMock }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return productsMock }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return productsMock },
  }
]

export const productsMock = [
  {
    id: 1,
    serialNumber: 9781,
    isNew: 1,
    photo: 'path/to/motherboard_a.jpg',
    title: 'Gigabyte X670 AORUS Elite Gaming Motherboard with AMD AM5 Socket and Extended Warranty',
    type: 'Motherboards',
    specification: 'Chipset X670, Socket AM5, DDR5, PCIe 5.0',
    guarantee: {
      start: '2024-10-01 10:00:00',
      end: '2025-10-01 10:00:00'
    },
    price: [
      {value: 500, symbol: 'USD', isDefault: 1},
      {value: 18500, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2024-09-25 09:15:00'
  },
  
  {
    id: 2,
    serialNumber: 5422,
    isNew: 0,
    photo: 'path/to/monitor_b.jpg',
    title: 'Dell UltraSharp U2723QE Professional 4K USB-C Hub Monitor for Graphics Workstations',
    type: 'Monitors',
    specification: '27" 4K IPS, USB-C Hub, Factory Calibrated',
    guarantee: {
      start: '2023-01-15 14:30:00',
      end: '2025-01-15 14:30:00'
    },
    price: [
      {value: 450, symbol: 'USD', isDefault: 1},
      {value: 16800, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2023-01-10 11:00:00'
  },
  
  {
    id: 3,
    serialNumber: 1010,
    isNew: 1,
    photo: 'path/to/printer_c.jpg',
    title: 'Canon Pixma PRO-200 Wireless Inkjet Photo Printer with Enhanced Color Gamut',
    type: 'Printers',
    specification: 'A3+ format, 8-ink system, Wi-Fi connectivity',
    guarantee: {
      start: '2024-11-20 08:00:00',
      end: '2025-11-20 08:00:00'
    },
    price: [
      {value: 650, symbol: 'USD', isDefault: 1},
      {value: 24500, symbol: 'UAH', isDefault: 0}
    ],
    order: 2,
    date: '2024-11-15 16:20:00'
  },
  
  {
    id: 4,
    serialNumber: 2024,
    isNew: 0,
    photo: 'path/to/laptop_d.jpg',
    title: 'HP Spectre x360 Convertible Laptop with OLED Display and Core i7 Processor',
    type: 'Laptops',
    specification: '13.5" OLED Touch, Core i7-12th Gen, 16GB RAM',
    guarantee: {
      start: '2023-05-01 09:00:00',
      end: '2025-05-01 09:00:00'
    },
    price: [
      {value: 1150, symbol: 'USD', isDefault: 1},
      {value: 43000, symbol: 'UAH', isDefault: 0}
    ],
    order: 3,
    date: '2023-04-20 12:00:00'
  },

  {
    id: 5,
    serialNumber: 3030,
    isNew: 0,
    photo: 'path/to/monitor_e.jpg',
    title: 'LG 34GN850-B UltraGear High-Performance UltraWide QHD Monitor for Competitive Gamers',
    type: 'Monitors',
    specification: '34" UltraWide QHD, 144Hz, G-Sync Compatible',
    guarantee: {
      start: '2023-08-10 10:00:00',
      end: '2025-08-10 10:00:00'
    },
    price: [
      {value: 750, symbol: 'USD', isDefault: 1},
      {value: 28000, symbol: 'UAH', isDefault: 0}
    ],
    order: 2,
    date: '2023-08-05 14:00:00'
  }
];