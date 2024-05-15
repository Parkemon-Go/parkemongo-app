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
