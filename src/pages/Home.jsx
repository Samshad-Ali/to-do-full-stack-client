import React from 'react';
import Note from '../components/Note.jsx';
import CreateNote from '../components/CreateNote.jsx';
const Home = () => {
  return (
    <main className='w-full flex justify-center items-center flex-col gap-4'>
    <h2 className='text-2xl'>Your Notes</h2>
    <div className='w-full p-4 flex flex-wrap gap-4 justify-center items-start'>
   <CreateNote/>
    <Note/>
    <Note/>
    <Note/>
    </div>
    </main>
  )
}

export default Home