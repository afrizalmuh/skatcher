export type IconType = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export interface SearchProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  className?: string;
}
