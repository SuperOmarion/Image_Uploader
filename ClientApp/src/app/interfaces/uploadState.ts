export interface UploadState {
  progress: number
  state: 'PENDING' | 'IN_PROGRESS' | 'DONE'
}
