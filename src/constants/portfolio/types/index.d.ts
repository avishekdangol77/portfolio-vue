import type { Snapshot } from '@/views/portfolio/components/types'

export interface NetworkWithRoles {
  id: number,
  roles: string,
}

export interface Project {
  id: number,
  key: string,
  thumbnail: string,
  clientAbbr?: boolean,
  clientUrl?: string,
  googleMapUrl?: string,
  snapshots: Array<Snapshot>,
  networks: Array<NetworkWithRoles>,
  description: Array<number>,
  features: Array<string>,
  url?: string,
  skills: Array<string>,
}

export interface ProjectSnapshot {
  thumbnail: string,
  snapshots: Array<Snapshot>
}
