interface Payload<T> {
  loading: boolean;
  value: T | null;
}