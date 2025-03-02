'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RiMenuFill, RiUserFill } from 'react-icons/ri';
import NavItems from './NavItems';
import { INavItems } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useStorageStore } from '@/stores/storage.store';
import { useAuthStore } from '@/stores/auth.store';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';

export default function MobileNav({ items }: { items: INavItems[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, handleLogout, userName, emailOrPhone } = useStorageStore();
  const { setDialogAuth } = useAuthStore();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="lg:hidden p-2">
          <RiMenuFill size={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        {auth && (
          <DialogHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src={'/default-avatar.png'} alt={userName} />
              <AvatarFallback className="text-black font-bold text-center text-xl">
                {userName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <DialogTitle className="font-semibold">{userName}</DialogTitle>
              <DialogDescription className="text-xs">
                {emailOrPhone}
              </DialogDescription>
            </div>
          </DialogHeader>
        )}
        <div className="flex flex-col items-center gap-4 text-lg">
          <NavItems
            items={items}
            className="text-black flex flex-col gap-2 w-full text-center"
          />

          {auth ? (
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
            >
              Logout
            </Button>
          ) : (
            <div className="space-x-2 flex items-center">
              <Button
                className="bg-transparent hover:!bg-neutral-900/50 hover:text-white"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                  setDialogAuth(true);
                }}
              >
                <RiUserFill className="!text-xs" />
                <span>Log In</span>
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setDialogAuth(true);
                }}
                className="hover:bg-primary/90"
                variant="default"
              >
                Daftar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
