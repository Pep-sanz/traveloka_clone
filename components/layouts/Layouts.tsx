import React from 'react';
import Navbar from './navbar';
import { Toaster } from '../ui/sonner';

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="transition-all ease-in-out duration-300">
        {children}
        <Toaster />
      </main>
    </div>
  );
}
