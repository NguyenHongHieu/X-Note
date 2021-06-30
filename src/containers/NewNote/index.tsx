import React from "react";

import { Card } from "antd";
// import { CloseCircleOutlined } from '@ant-design/icons';
import { Input, Select, Button, Row } from "antd";
import { Note } from "../../screens/Dashboard";
const { Option } = Select;
const { TextArea } = Input;

interface NewNoteProps {
  onAddNote: (note: Note) => void;
}

export const NewNote: React.FC<NewNoteProps> = (props: NewNoteProps) => {
  var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const [noteState, setNoteState] = React.useState<Note>({
    id: ID(),
    title: "",
    content: "",
    label: "project",
    created_at: new Date().toString(),
  });

  const handleTitleChange = (e: any) => {
    setNoteState({ ...noteState, title: e.target.value });
  };

  const handleContentChange = (e: any) => {
    setNoteState({ ...noteState, content: e.target.value });
  };

  const handleLabelChange = (e: any) => {
    console.log(e);
    
    setNoteState({ ...noteState, label: e });
  };

  const handleAddNote = () => {
    props.onAddNote({...noteState, id: ID(), created_at: new Date().toString()})
    setNoteState({
      id: ID(),
      title: "",
      content: "",
      label: "project",
      created_at: "",
    })
  }

  return (
    <div>
      <Card
        title={
          <Input
            value={noteState.title}
            onChange={handleTitleChange}
            placeholder="Enter title ..."
          />
        }
        style={{ width: 400 }}
      >
        <TextArea
          rows={4}
          value={noteState.content}
          onChange={handleContentChange}
          allowClear
          placeholder="Enter content ..."
        />
        <Row>
          <Select
            placeholder="Select:"
            allowClear
            value={noteState.label}
            onChange={handleLabelChange}
          >
            <Option value="project">project</Option>
            <Option value="business">business</Option>
            <Option value="personal">personal</Option>
          </Select>
          <Button type="primary" onClick={handleAddNote} disabled={noteState.title === '' || noteState.content === ''}>
            save
          </Button>
        </Row>
      </Card>
    </div>
  );
};
