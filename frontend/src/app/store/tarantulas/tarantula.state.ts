import { Tarantula } from "src/app/model/tarantula.model";

export interface TarantulaState {
  tarantulas: Tarantula[];
  active: Tarantula | null;
  error: string;
}

export const initialState: TarantulaState =
{
  tarantulas: [],
  active: null,
  error: ""
}

