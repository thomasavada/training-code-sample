import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, LegacyCard, Modal, Page, ResourceItem, ResourceList, LegacyStack, Text } from '@shopify/polaris';
import ModalSection from "../../components/ModalSection";
import useFetchTodoes from "../../hooks/useFetchTodoes";
import {ChecklistMajor, DeleteMajor} from "@shopify/polaris-icons";
// import makeRequest from "./helpers/api/makeRequest";

export default function TodoList() {
  const {todos, loading: fetchLoading, setTodos} = useFetchTodoes();
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const addTodo = async text => {
    try {
      setLoading(true);
      const resp = await fetch("http://localhost:5001/api/todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": 1, //find()
          "title": text,
          "completed": true
        }),
      });

      const data = await resp.json();
      if (data.success) {
        setTodos(prev => {
          return [...prev, {
            "id": 1,
            "title": text,
            "completed": false
          }]
        })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  };

  const handleSubmit = async (e) => {
    if (!value) return;
    await addTodo(value);
    setValue("");
  };

  const handleInputChange = val => {
    setValue(val)
  }

  const completeTodo = async ({id, todo}) => {
    try {
      setLoading(true);
      const resp = await fetch({
        url: `http://localhost:5001/api/todo/${id}`,
        body: JSON.stringify({
          ...todo,
          completed: true
        }),
        method: 'PUT'
      });
      const data = await resp.json();

      if (data.success) {
        setTodos(currentTodoList => {
          return currentTodoList.map(todo => {
            if (todo.id === parseInt(id)) {
              return {
                ...todo,
                completed: true
              }
            }
            return todo;
          })
        });
      }
    } catch
      (e) {
      console.error(e)
      setLoading(false);

    } finally {
      setLoading(false)
    }
  }

  const removeTodo = async (id) => {
    try {
      setLoading(true);
      const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
      });
      const data = await resp.json();
      if (data.success) {
        const newTodo = todos.filter(todo => todo.id !== parseInt(id));
        setTodos(newTodo);
      }
    } catch (e) {
      console.error(e)
      setLoading(false);

    } finally {
      setLoading(false)
    }
  };

  return (
    <Page
      title={'Todoes'}
      primaryAction={{
      content: "New",
      onAction: handleChange
    }}>
      <LegacyCard>
        <Modal
          open={active}
          onClose={handleChange}
          title="Add new Todo"
          primaryAction={{
            content: 'Add ',
            onAction: async () => {
              await handleSubmit();
              setActive(false)
            },
            loading: loading
          }}
          secondaryActions={[
            {
              content: 'Cancel',
              onAction: () => setActive(false),
            },
          ]}
        >
          <ModalSection
            value={value}
            onChange={handleInputChange}
          />
        </Modal>
        <ResourceList
          loading={fetchLoading}
          resourceName={{singular: 'todo', plural: 'todoes'}}
          items={todos}
          renderItem={(todo) => {
            const {id, title} = todo;

            return (
              <ResourceItem
                id={id}
              >
                <LegacyStack>
                  <LegacyStack.Item fill>
                    <h3>
                      <Text variant="bodyLg" as="p" fontWeight={600} >{title}</Text>
                    </h3>
                  </LegacyStack.Item>
                  <LegacyStack.Item>
                    <ButtonGroup>
                      <Button
                        icon={ChecklistMajor}
                        onClick={() => completeTodo({id, todo})}
                      />
                      <Button
                        destructive
                        icon={DeleteMajor}
                        onClick={() => removeTodo(id)}
                      />
                    </ButtonGroup>
                  </LegacyStack.Item>
                </LegacyStack>
              </ResourceItem>
            );
          }}
        />
      </LegacyCard>
    </Page>
  );
}


