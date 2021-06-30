import { Col, Row } from "antd";
import React from "react";
import { NoteItem } from "../../components";
import { Note } from "../../screens/Dashboard";

interface NoteListProps {
  notes: Note[];
  handleDeleteNote: (id: string) => void;
}

export const NoteList: React.FC<NoteListProps> = (props: NoteListProps) => {
  const colors = ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#264653'];
  const notesList = props.notes.map((note) => (<Col span={6}>
    <NoteItem
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
      created_at={note.created_at}
      label={note.label}
      color={colors[Math.floor(Math.random() * 5)]}
      onDeleteNote={() => props.handleDeleteNote(note.id)}
    />
  </Col>));
  return (
    <Row gutter={[8, 16]}>
      {notesList}
    </Row>
  );
};
