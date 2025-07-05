import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/**
 * Represents a service offered.
 * @interface ServiceInterface
 * @property {string} key - Unique identifier for the service
 * @property {string} title - The title of the service
 * @property {Array<number>} description - Array of identifiers that reference descriptions
 * @property {string} value - The value associated with the service
 */
export interface ServiceInterface {
  key: string,
  title: string,
  description: Array<number>,
  value: string,
}

/**
 * Represents a recommendation or testimonial from a client or colleague.
 * @interface Recommendation
 * @property {number} id - Unique identifier for the recommendation
 * @property {string} key - Key identifier for localisation or reference
 * @property {Array<string>} description - Array of description strings for the recommendation
 * @property {boolean} [isCompany] - Optional flag indicating if the recommender is a company
 * @property {boolean} [hasPosition] - Optional flag indicating if the recommender has
 * @property {string} [photo] - Optional path or URL to the recommender's photo
 */
export interface Recommendation {
  id: number,
  key: string,
  description: Array<string>,
  photo?: string,
  isCompany?: boolean,
  hasPosition?: boolean,
}

/**
 * Represents a social media platform link.
 * @interface Social
 * @property {string} id - Unique identifier for the social platform
 * @property {IconDefinition} icon - FontAwesome icon definition for the platform
 * @property {string} url - URL link to the social media profile
 */
export interface Social {
  id: string,
  icon: IconDefinition,
  url: string,
}

/**
 * Represents a professional network or community connection.
 * @interface Network
 * @property {number} id - Unique identifier for the network
 * @property {string} key - Key identifier for localisation or reference
 * @property {string} photo - Path or URL to the network's photo or logo
 * @property {Array<Social>} [socials] - Optional array of associated social media links
 * @property {string} tags - Tags or categories associated with the network
 * @property {string} [roles] - Optional roles or position within the network
 */
export interface Network {
  id: number,
  key: string,
  photo: string,
  socials?: Array<Social>,
  tags: string,
  roles?: string,
}

/**
 * Represents a filter option for networks.
 * @interface NetworkFilter
 * @property {string} title - Display title for the filter option
 * @property {string | null} value - Filter value, null represents "all" or no filter
 */
export interface NetworkFilter {
  title: string
  value: string | null
}

/**
 * Represents a commission or client project.
 * @interface Commission
 * @property {number} id - Unique identifier for the commission
 * @property {string} name - Name of the commission or client
 * @property {string} logo - Path or URL to the commission's logo
 * @property {string} [url] - Optional URL link to the commission's website or profile
 */
export interface Commission {
  id: number,
  name: string,
  logo: string,
  url?: string,
}

/**
 * Represents a workshop or training event attended.
 * @interface Workshop
 * @property {number} id - Unique identifier for the workshop
 * @property {string} title - Title or name of the workshop
 * @property {string} description - Description of the workshop content
 * @property {string} date - Date when the workshop was conducted
 * @property {string} location - Location where the workshop took place
 * @property {string} organiserLogo - Path or URL to the workshop or organiser's logo
 * @property {string} [certificate] - Optional path or URL to the completion certificate
 */
export interface Workshop {
  id: number,
  title: string,
  description: string,
  date: string,
  location: string,
  organiserLogo: string,
  certificate?: string,
}
