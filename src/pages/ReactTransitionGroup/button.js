import React from 'react';
import { Button } from 'antd'

export const Btn = ({ onClick }) => (
  <Button
    icon="plus"
    onClick={() => onClick()}
    type="primary"
  >
    Add Contact
  </Button>
);


export default Btn;
