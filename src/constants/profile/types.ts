import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface Language {
  label: string,
  id: string,
  value: number,
}

export interface Skill {
  label: string,
  id: string,
  value: number,
  children: Array<string>,
}

export interface Social {
  id: string,
  name: string,
  icon: IconDefinition,
  url: string,
}

export interface Locale {
  label: string,
  lang: string,
  locale: string
}
