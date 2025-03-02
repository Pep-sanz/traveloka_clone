import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface CounterInputProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  value,
  min = 0,
  max,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <Minus />
      </Button>
      <span>{value}</span>
      <Button
        size="icon"
        variant="outline"
        onClick={() => onChange(max ? Math.min(max, value + 1) : value + 1)}
        disabled={max !== undefined && value >= max}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CounterInput;
