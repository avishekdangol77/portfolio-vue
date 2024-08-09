import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/** Service Interface */
export interface ServiceInterface {
  key: string,
  title: string,
  description: Array<number>,
  value: string,
}

/** Recommendation Interface */
export interface Recommendation {
  id: number,
  key: string,
  company?: string,
  description: Array<string>,
  photo: string,
}

/** Social and Network Interface */
export interface Social {
  id: string,
  icon: IconDefinition,
  url: string,
}

export interface Network {
  id: number,
  key: string,
  photo: string,
  socials?: Array<Social>,
  tags: string,
  roles?: string,
}

/** Commission Interface */
export interface Commission {
  id: number,
  name: string,
  logo: string,
}
