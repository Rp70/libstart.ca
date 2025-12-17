export type LibraryType = 'public' | 'private' | 'little'

export type Province = 
  | 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NS' | 'NT' | 'NU' 
  | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'

export interface Library {
  id: string
  name: string
  type: LibraryType
  province: Province
  region: string
  address: string
  city: string
  postalCode: string
  phone: string
  website: string
  latitude: number
  longitude: number
}

export const provinceNames: Record<Province, string> = {
  'AB': 'Alberta',
  'BC': 'British Columbia',
  'MB': 'Manitoba',
  'NB': 'New Brunswick',
  'NL': 'Newfoundland and Labrador',
  'NS': 'Nova Scotia',
  'NT': 'Northwest Territories',
  'NU': 'Nunavut',
  'ON': 'Ontario',
  'PE': 'Prince Edward Island',
  'QC': 'Quebec',
  'SK': 'Saskatchewan',
  'YT': 'Yukon'
}

export const libraries: Library[] = [
  {
    id: 'fvrl-abbotsford',
    name: 'Abbotsford Library',
    type: 'public',
    province: 'BC',
    region: 'Fraser Valley',
    address: '33660 South Fraser Way',
    city: 'Abbotsford',
    postalCode: 'V2S 2C5',
    phone: '604-859-7814',
    website: 'https://www.fvrl.bc.ca/branches/abbotsford',
    latitude: 49.0504,
    longitude: -122.2988
  },
  {
    id: 'fvrl-agassiz',
    name: 'Agassiz Library',
    type: 'public',
    province: 'BC',
    region: 'Fraser Valley',
    address: '7111 Cheam Avenue',
    city: 'Agassiz',
    postalCode: 'V0M 1A0',
    phone: '604-796-9756',
    website: 'https://www.fvrl.bc.ca/branches/agassiz',
    latitude: 49.2378,
    longitude: -121.7617
  },
  {
    id: 'fvrl-chilliwack',
    name: 'Chilliwack Library',
    type: 'public',
    province: 'BC',
    region: 'Fraser Valley',
    address: '45860 First Avenue',
    city: 'Chilliwack',
    postalCode: 'V2P 7K1',
    phone: '604-792-4450',
    website: 'https://www.fvrl.bc.ca/branches/chilliwack',
    latitude: 49.1577,
    longitude: -121.9509
  },
  {
    id: 'vpl-central',
    name: 'Vancouver Central Library',
    type: 'public',
    province: 'BC',
    region: 'Metro Vancouver',
    address: '350 West Georgia Street',
    city: 'Vancouver',
    postalCode: 'V6B 6B1',
    phone: '604-331-3603',
    website: 'https://www.vpl.ca/branches/central-library',
    latitude: 49.2799,
    longitude: -123.1158
  },
  {
    id: 'tpl-reference',
    name: 'Toronto Reference Library',
    type: 'public',
    province: 'ON',
    region: 'Greater Toronto Area',
    address: '789 Yonge Street',
    city: 'Toronto',
    postalCode: 'M4W 2G8',
    phone: '416-395-5577',
    website: 'https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC&R=LIB002',
    latitude: 43.6719,
    longitude: -79.3863
  },
  {
    id: 'epl-stanley-milner',
    name: 'Stanley A. Milner Library',
    type: 'public',
    province: 'AB',
    region: 'Edmonton',
    address: '7 Sir Winston Churchill Square',
    city: 'Edmonton',
    postalCode: 'T5J 2V4',
    phone: '780-496-7000',
    website: 'https://www.epl.ca/stanley-milner/',
    latitude: 53.5444,
    longitude: -113.4909
  },
  {
    id: 'cpl-central',
    name: 'Calgary Central Library',
    type: 'public',
    province: 'AB',
    region: 'Calgary',
    address: '800 3 Street SE',
    city: 'Calgary',
    postalCode: 'T2G 2E7',
    phone: '403-260-2600',
    website: 'https://calgarylibrary.ca/visit/our-locations/central-library/',
    latitude: 51.0447,
    longitude: -114.0545
  },
  {
    id: 'bpl-millennium',
    name: 'Bibliothèque et Archives nationales du Québec',
    type: 'public',
    province: 'QC',
    region: 'Montreal',
    address: '475 Boulevard De Maisonneuve E',
    city: 'Montreal',
    postalCode: 'H2L 5C4',
    phone: '514-873-1100',
    website: 'https://www.banq.qc.ca/',
    latitude: 45.5155,
    longitude: -73.5615
  },
  {
    id: 'wpl-central',
    name: 'Winnipeg Millennium Library',
    type: 'public',
    province: 'MB',
    region: 'Winnipeg',
    address: '251 Donald Street',
    city: 'Winnipeg',
    postalCode: 'R3C 3P5',
    phone: '204-986-6450',
    website: 'https://wpl.winnipeg.ca/library/branches/millennium.asp',
    latitude: 49.8880,
    longitude: -97.1395
  },
  {
    id: 'hpl-central',
    name: 'Halifax Central Library',
    type: 'public',
    province: 'NS',
    region: 'Halifax',
    address: '5440 Spring Garden Road',
    city: 'Halifax',
    postalCode: 'B3J 1E9',
    phone: '902-490-5700',
    website: 'https://www.halifaxpubliclibraries.ca/locations/central-library/',
    latitude: 44.6434,
    longitude: -63.5797
  },
  {
    id: 'opl-main',
    name: 'Ottawa Public Library Main Branch',
    type: 'public',
    province: 'ON',
    region: 'Ottawa',
    address: '120 Metcalfe Street',
    city: 'Ottawa',
    postalCode: 'K1P 5M2',
    phone: '613-580-2940',
    website: 'https://biblioottawalibrary.ca/en/main',
    latitude: 45.4215,
    longitude: -75.6972
  },
  {
    id: 'spl-central',
    name: 'Saskatoon Public Library - Frances Morrison',
    type: 'public',
    province: 'SK',
    region: 'Saskatoon',
    address: '311 23rd Street East',
    city: 'Saskatoon',
    postalCode: 'S7K 0J6',
    phone: '306-975-7558',
    website: 'https://saskatoonlibrary.ca/locations/frances-morrison-central-library',
    latitude: 52.1279,
    longitude: -106.6702
  },
  {
    id: 'rpl-central',
    name: 'Regina Public Library - Central Branch',
    type: 'public',
    province: 'SK',
    region: 'Regina',
    address: '2311 12th Avenue',
    city: 'Regina',
    postalCode: 'S4P 3Z5',
    phone: '306-777-6000',
    website: 'https://www.reginalibrary.ca/visit/locations/central',
    latitude: 50.4501,
    longitude: -104.6178
  },
  {
    id: 'little-vancouver-1',
    name: 'Little Free Library - Kitsilano Beach',
    type: 'little',
    province: 'BC',
    region: 'Metro Vancouver',
    address: 'Cornwall Avenue at Yew Street',
    city: 'Vancouver',
    postalCode: 'V6K 2E9',
    phone: 'N/A',
    website: 'https://littlefreelibrary.org/',
    latitude: 49.2734,
    longitude: -123.1534
  },
  {
    id: 'little-toronto-1',
    name: 'Little Free Library - High Park',
    type: 'little',
    province: 'ON',
    region: 'Greater Toronto Area',
    address: 'High Park Avenue near Bloor Street',
    city: 'Toronto',
    postalCode: 'M6P 2S3',
    phone: 'N/A',
    website: 'https://littlefreelibrary.org/',
    latitude: 43.6532,
    longitude: -79.4636
  },
  {
    id: 'uvic-library',
    name: 'University of Victoria Libraries',
    type: 'private',
    province: 'BC',
    region: 'Victoria',
    address: '3800 Finnerty Road',
    city: 'Victoria',
    postalCode: 'V8P 5C2',
    phone: '250-721-6673',
    website: 'https://www.uvic.ca/library/',
    latitude: 48.4634,
    longitude: -123.3117
  },
  {
    id: 'ubc-library',
    name: 'UBC Library',
    type: 'private',
    province: 'BC',
    region: 'Metro Vancouver',
    address: '1961 East Mall',
    city: 'Vancouver',
    postalCode: 'V6T 1Z1',
    phone: '604-822-3200',
    website: 'https://www.library.ubc.ca/',
    latitude: 49.2676,
    longitude: -123.2532
  },
  {
    id: 'mcgill-library',
    name: 'McGill University Library',
    type: 'private',
    province: 'QC',
    region: 'Montreal',
    address: '845 Sherbrooke Street West',
    city: 'Montreal',
    postalCode: 'H3A 0G4',
    phone: '514-398-4734',
    website: 'https://www.mcgill.ca/library/',
    latitude: 45.5048,
    longitude: -73.5772
  },
  {
    id: 'uoft-robarts',
    name: 'Robarts Library - University of Toronto',
    type: 'private',
    province: 'ON',
    region: 'Greater Toronto Area',
    address: '130 St. George Street',
    city: 'Toronto',
    postalCode: 'M5S 1A5',
    phone: '416-978-7344',
    website: 'https://onesearch.library.utoronto.ca/robarts',
    latitude: 43.6644,
    longitude: -79.3997
  }
]

export function getLibraryStats() {
  const totalLibraries = libraries.length
  
  const byProvince = libraries.reduce((acc, lib) => {
    acc[lib.province] = (acc[lib.province] || 0) + 1
    return acc
  }, {} as Record<Province, number>)
  
  const byType = libraries.reduce((acc, lib) => {
    acc[lib.type] = (acc[lib.type] || 0) + 1
    return acc
  }, {} as Record<LibraryType, number>)
  
  return {
    total: totalLibraries,
    byProvince,
    byType
  }
}
