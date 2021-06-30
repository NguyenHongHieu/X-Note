import React from 'react'
import { Card } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

interface NoteItemProps {
    id: string;
    title: string;
    content: string;
    label: string;
    created_at: string;
    color: string;
    onDeleteNote: (id: string) => void;
}

export const NoteItem: React.FC<NoteItemProps> = (props: NoteItemProps) => {
    const handleDeleteClick = () => {
        props.onDeleteNote(props.id);
    }
    return (
        <Card style={{ backgroundColor: props.color, color: '#fff' }} 
        key={props.id} size="small" 
        title={<span style={{ color: '#fff' }}>{props.title}</span>} 
        extra={<CloseCircleOutlined style={{ color: '#fff' }} onClick={handleDeleteClick} />}>
            <p>{props.content}</p>
        </Card>
    )
}
