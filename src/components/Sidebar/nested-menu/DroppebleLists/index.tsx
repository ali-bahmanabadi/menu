import React from 'react';
import { Droppable } from 'react-nested-dnd';
import style from './style.module.scss';
import { DraggableItems } from '../DraggebleItems';

export const DroppableLists = ({
    container,
}: {
    container: {
        id: string;
        items: string[];
    };
}) => {
    return (
        <Droppable
            key={container.id}
            id={container.id}
            accept={['even', 'odd']}
        >
            {(provided, snapshot, placeholder) => {
                return (
                    <div {...provided} className={style.container}>
                        <DraggableItems container={container} />
                        {placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
};
