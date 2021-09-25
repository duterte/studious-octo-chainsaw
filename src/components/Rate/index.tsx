import React, { useState } from 'react';

interface Props {
  callback: (n: number) => void;
}

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState<number>(5);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(Number(e.currentTarget.value))
        }
      />
      {value}
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </div>
  );
};

export default Rate;
