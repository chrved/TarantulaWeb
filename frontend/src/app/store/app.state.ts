import { Tarantula } from "../model/tarantula.model";


export interface AppState {
  tarantula: Array<Tarantula>;
  active: Tarantula | null;
}
