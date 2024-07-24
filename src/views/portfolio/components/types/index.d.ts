import type { Project } from '@/constants/portfolio/types'

/** Snapshot Interface */
export interface Snapshot {
  src: string;
  caption: string;
}

/** Snapshot Prop Interface */
export interface SnapshotProp {
  snapshots: Array<Snapshot>
}

/** Project Prop Interface */
export interface ProjectProp {
  project: Project
}
