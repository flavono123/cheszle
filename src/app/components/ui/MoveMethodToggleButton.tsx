import React, { ReactNode } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { PiHandGrabbing, PiCursorClick } from "react-icons/pi";


import { store } from '@/app/store/useStore';

export default function MoveMethodToggleButton(): ReactNode {

  const { moveMethod, setMoveMethod } = store();
  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newMoveMethod: 'dnd' | 'click',
  ) => {
    setMoveMethod(newMoveMethod);
  };

  return (
    <ToggleButtonGroup
      value={moveMethod}
      exclusive
      onChange={handleToggle}
      aria-label="text alignment"
    >
      <ToggleButton value="dnd">
        <PiHandGrabbing />
      </ToggleButton>
      <ToggleButton value="click">
        <PiCursorClick />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

