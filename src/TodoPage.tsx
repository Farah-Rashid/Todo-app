import { Button, Checkbox, Table, Text, TextField } from '@medly-components/core';
import { AddIcon, DeleteIcon } from '@medly-components/icons';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { InputWrapper, ListItem, LoginWrapper } from './App.styled';
import { TableColumnConfig } from '@medly-components/core';




const TodoPage = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const { state } = useLocation();
  const { id } = state;

  const tableData = [
    { id: 1, firstName: 'Mary', lastName: 'May', age: '19' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', age: '22' },
    { id: 3, firstName: 'Chris', lastName: 'Evans', age: '44' }
  ]
  const columns: TableColumnConfig[] = [
    { title: 'Todo', field: 'firstName' },
    { title: 'Action', field: 'id' }
  ];

  const addItem = () => {
    if (!value) {
      alert("enter item first");
    } else {
      setItems([...items, value]);
      setValue('');

    }
  }
  const deleteItem = (id: number) => {
    const updatedItems = items.filter((_, index) => {
      return index !== id
    })
    setItems(updatedItems);
  }
  const deleteAll = () => {
    setItems([]);
  }

  return (
    <LoginWrapper>
      <Text textVariant='h2' >Add your Todo`s here:</Text>
      <InputWrapper>
        <TextField value={value} size='S'
          label='add items' placeholder='Enter item first'
          onChange={e => setValue(e.currentTarget.value)} />
        <Button size='S' onClick={addItem}><AddIcon variant='flat' /> </Button>
      </InputWrapper>

      {
        items.map((item, index) => {
          return (
            <div key={index}>
              <ListItem > <Text textVariant='h3'>{item}</Text>
                <DeleteIcon style={{ marginLeft: "150px" }} onClick={() => deleteItem(index)} />
              </ListItem>
            </div>
          )
        })
      }
      <div><Button onClick={deleteAll} size='XS'>DELETE ALL</Button></div>
      <Table data={tableData} columns={columns} />
    </LoginWrapper>


  )
}

export default TodoPage;