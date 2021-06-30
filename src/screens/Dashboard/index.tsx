import { Layout, Radio } from "antd";
import React from "react";
import { Button } from "antd";
import { Header, NewNote, NoteList, SideBar } from "../../containers";
export interface Note {
  id: string;
  title: string;
  content: string;
  label: string;
  created_at: string;
}

export const Dashboard = () => {
  let notes = [
    {
      id: "1",
      title: "Di hoc",
      content: "baosdoasdsadoasd",
      label: "project",
      created_at: "2020-11-30",
    },
    {
      id: "2",
      title: "Di Lam",
      content: "baosdoasdsadoasd",
      label: "business",
      created_at: "2020-11-30",
    },
    {
      id: "3",
      title: "Mua sam",
      content: "baosdoasdsadoasd",
      label: "business",
      created_at: "2020-11-30",
    },
    {
      id: "4",
      title: "Du lich",
      content: "baosdoasdsadoasd",
      label: "personal",
      created_at: "2020-11-30",
    },
  ];

  const [noteListState, setNoteListState] = React.useState<Note[]>([]);
  React.useEffect(() => {
    setNoteListState(notes);
  }, []);

  const handleAddNote = (note: Note) => {
    let newNotes = noteListState.concat(note);
    setNoteListState(newNotes);
  };

  const handleDeleteNote = (id: string) => {
    const selectedNoteIndex = noteListState.findIndex((note) => note.id === id);
    if (selectedNoteIndex > -1) {
      let newNotes = noteListState.filter((note) => note.id !== id);
      setNoteListState(newNotes);
    }
  };

  const handleSelectLabel = (e: any) => {
    noteListState.filter(note => note.label === e.target.value);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <Radio.Group onChange={handleSelectLabel}>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="project">Project</Radio.Button>
                <Radio.Button value="business">Business</Radio.Button>
                <Radio.Button value="personal">Personal</Radio.Button>
              </Radio.Group>
            </div>
            <div className="col-3">
              <Button type="primary">Add note button</Button>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-9">
              <NoteList
                notes={noteListState}
                handleDeleteNote={handleDeleteNote}
              />
            </div>
            <div className="col-3">
              <NewNote onAddNote={handleAddNote} />
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};
