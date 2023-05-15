import React, { useContext } from 'react';
import { Draggable } from 'react-nested-dnd';
import { appContext } from '../utils';

import style from './style.module.scss';
import { DroppableLists } from '../DroppebleLists';

export const DraggableItems = (props: {
    container: { id: string; items: string[] };
}) => {
    const { items, containers } = useContext(appContext);

    return (
        <>
            {props.container.items.map((itemId, index) => {
                const item = items[itemId as keyof typeof items];
                const nestedId = `nested-${itemId}`;
                const nestedContainer =
                    containers[nestedId as keyof typeof containers];
                return (
                    <Draggable
                        key={itemId}
                        droppableId={props.container.id}
                        id={itemId}
                        index={index}
                        type={item.type}
                    >
                        {(provided, snapshot) => {
                            return (
                                <div
                                    {...provided}
                                    className={`${style.item}${
                                        snapshot.isDragging
                                            ? ' ' + style.hidden
                                            : ''
                                    }`}
                                >
                                    {item.text}
                                    {nestedContainer && (
                                        <DroppableLists
                                            container={nestedContainer}
                                        />
                                    )}
                                </div>
                            );
                        }}
                    </Draggable>
                );
            })}
        </>
    );
};
