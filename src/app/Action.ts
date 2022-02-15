export interface Action {
  id?: number;
  group: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  theme: string;
  action_title: string;
  action_text: string;
  action_state: boolean;
}
