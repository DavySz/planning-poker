export interface ITimer {
  onTimeOver?: () => void;
  onFinishMessage?: string;
  initialValue: number;
}

export interface ITimerUI {
  onFinishMessage?: string;
  count: number;
}
