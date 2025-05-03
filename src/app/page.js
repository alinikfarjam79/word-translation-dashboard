'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useContext } from 'react';
import TranslationContext from '@/context/TranslationContext';
import LanguageSelector from '@/components/LanguageSelector';
import KeywordItem from '@/components/KeyWrodItem';
import AddKeywordButton from '@/components/AddKeyWordButton';

const ManagementDashboard = () => {
  const { keywords, onDragEnd } = useContext(TranslationContext);
  return (
    <div className="p-4">
      <div className='w-full flex justify-between px-2 my-3 '>
        <h1 className="text-2xl font-bold mb-4">Translation Management</h1>
        <LanguageSelector />
      </div>
      <div className='h-[550px] overflow-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {keywords.map((kw, index) => (
                  <KeywordItem key={kw.id} keyword={kw} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <AddKeywordButton />
    </div>
  );
};

export default ManagementDashboard;