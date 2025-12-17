import { LibraryService } from './libraryData'

export interface ServiceInfo {
  id: LibraryService
  nameKey: string
  descriptionKey: string
  availability: 'most' | 'some' | 'few'
  icon: string
}

export const servicesList: ServiceInfo[] = [
  {
    id: 'wifi',
    nameKey: 'services.wifi.name',
    descriptionKey: 'services.wifi.description',
    availability: 'most',
    icon: 'wifi'
  },
  {
    id: 'printing',
    nameKey: 'services.printing.name',
    descriptionKey: 'services.printing.description',
    availability: 'most',
    icon: 'printer'
  },
  {
    id: 'computers',
    nameKey: 'services.computers.name',
    descriptionKey: 'services.computers.description',
    availability: 'most',
    icon: 'desktop'
  },
  {
    id: 'meeting-rooms',
    nameKey: 'services.meetingRooms.name',
    descriptionKey: 'services.meetingRooms.description',
    availability: 'most',
    icon: 'users'
  },
  {
    id: 'study-rooms',
    nameKey: 'services.studyRooms.name',
    descriptionKey: 'services.studyRooms.description',
    availability: 'most',
    icon: 'book-open'
  },
  {
    id: 'programs',
    nameKey: 'services.programs.name',
    descriptionKey: 'services.programs.description',
    availability: 'most',
    icon: 'calendar'
  },
  {
    id: 'children',
    nameKey: 'services.children.name',
    descriptionKey: 'services.children.description',
    availability: 'most',
    icon: 'baby'
  },
  {
    id: 'digital-resources',
    nameKey: 'services.digitalResources.name',
    descriptionKey: 'services.digitalResources.description',
    availability: 'most',
    icon: 'cloud'
  },
  {
    id: 'accessibility',
    nameKey: 'services.accessibility.name',
    descriptionKey: 'services.accessibility.description',
    availability: 'most',
    icon: 'wheelchair'
  },
  {
    id: 'makerspace',
    nameKey: 'services.makerspace.name',
    descriptionKey: 'services.makerspace.description',
    availability: 'some',
    icon: 'wrench'
  },
  {
    id: '3d-printing',
    nameKey: 'services.3dPrinting.name',
    descriptionKey: 'services.3dPrinting.description',
    availability: 'some',
    icon: 'cube'
  },
  {
    id: 'streaming',
    nameKey: 'services.streaming.name',
    descriptionKey: 'services.streaming.description',
    availability: 'some',
    icon: 'film'
  },
  {
    id: 'language-learning',
    nameKey: 'services.languageLearning.name',
    descriptionKey: 'services.languageLearning.description',
    availability: 'most',
    icon: 'globe'
  },
  {
    id: 'job-search',
    nameKey: 'services.jobSearch.name',
    descriptionKey: 'services.jobSearch.description',
    availability: 'most',
    icon: 'briefcase'
  },
  {
    id: 'parking',
    nameKey: 'services.parking.name',
    descriptionKey: 'services.parking.description',
    availability: 'some',
    icon: 'car'
  },
  {
    id: 'cafe',
    nameKey: 'services.cafe.name',
    descriptionKey: 'services.cafe.description',
    availability: 'some',
    icon: 'coffee'
  },
  {
    id: 'museum-passes',
    nameKey: 'services.museumPasses.name',
    descriptionKey: 'services.museumPasses.description',
    availability: 'some',
    icon: 'ticket'
  }
]

export function getServicesByAvailability() {
  return {
    most: servicesList.filter(s => s.availability === 'most'),
    some: servicesList.filter(s => s.availability === 'some'),
    few: servicesList.filter(s => s.availability === 'few')
  }
}
