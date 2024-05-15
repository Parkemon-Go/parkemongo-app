// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
export interface Project {
  id: string;
  projectName: string;
  distance: string;
  pathLength: string;
  url: string;
}

export interface Scan {
  id: string;
  lat: number;
  long: number;
  project_id: number;
  created_at: string;
  vehicle_type: number;
  vehicle_plate: number;
  vehicle_color: string;
  vehicle_make: string;
  vehicle_model: string;
}
