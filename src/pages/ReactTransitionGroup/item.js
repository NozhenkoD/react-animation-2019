import React from 'react';
import { List, Icon } from 'antd'

export const ContactsList = ({ item, keyDelete, handleRemove }) => (
  <List.Item>
    {item}
    <Icon type="cross" onClick={() => handleRemove(keyDelete)} />
  </List.Item>
);

export default ContactsList;
