import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar1 from './RightSidebar1';
import Navbar from './Navbar';

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <RightSidebar1 />
      </div>
    </>
  );
}

export default Page;
