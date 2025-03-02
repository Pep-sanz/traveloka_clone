'use client';

import React from 'react';
import { Button } from '../../ui/button';
import Image from 'next/image';
import { RiUserFill } from 'react-icons/ri';
import NavItems from './NavItems';
import { INavItems } from '@/types';
import { SignInForm } from '@/modules/auth/SignInForm';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import MobileNav from './MobileNav';
import SelectLanguage from '@/components/elements/SelectLanguage';
import useScrollDetect from '@/hooks/useScrollDetect';
import { usePathname, useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useStorageStore } from '@/stores/storage.store';
import { useAuthStore } from '@/stores/auth.store';

const items: INavItems[] = [
  { title: 'Birthday Sale', logo: 'test', href: '/' },
  { title: 'Jadi Mitra', logo: 'test', href: '/' },
  { title: 'For Corporates', logo: 'test', href: '/' },
  { title: 'Pesanan', logo: 'test', href: '/' },
];

const subNavItems: INavItems[] = [
  { title: 'Hotel', logo: 'test', href: '/hotel' },
  { title: 'Tiket Pesawat', logo: 'test', href: '/' },
  { title: 'Tiket Kreta Api', logo: 'test', href: '/' },
  { title: 'Tiket Bus & Travel', logo: 'test', href: '/' },
  { title: 'Antar Jemput Bandara', logo: 'test', href: '/' },
  { title: 'Rental Mobil', logo: 'test', href: '/' },
  { title: 'Atraksi dan Aktivitas', logo: 'test', href: '/' },
];

export default function Navbar() {
  const router = useRouter();
  const { auth, handleLogout, userName, emailOrPhone } = useStorageStore();
  const { dialogAuth, setDialogAuth } = useAuthStore();
  const isScrolling = useScrollDetect();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const onLogOut = () => {
    handleLogout();
    window.location.reload();
  };

  return (
    <nav
      className={`fixed text-sm top-0 w-full flex flex-col items-center gap-3 py-2 px-4 md:px-24 xl:px-32 backdrop-blur-md shadow-md z-50 transition-all duration-300 ease-in 
        ${
          isHomePage
            ? isScrolling
              ? 'bg-white text-black'
              : 'bg-transparent text-white'
            : 'bg-white text-black'
        }`}
    >
      <div className="w-full flex items-center justify-between">
        <div onClick={() => router.push('/')} className="cursor-pointer">
          <Image
            src={
              isHomePage && !isScrolling
                ? '/logo/treveloka-white.svg'
                : '/logo/treveloka-blue.svg'
            }
            alt="logo"
            width={130}
            height={130}
          />
        </div>
        <div className="flex items-center gap-2">
          <SelectLanguage />

          <div className="hidden lg:flex items-center gap-6">
            <NavItems items={items} />
            {auth ? (
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <Avatar>
                      <AvatarImage src={'/default-avatar.png'} alt={userName} />
                      <AvatarFallback className="text-black font-bold text-center text-xl">
                        {userName?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{userName}</p>
                      <p className="text-xs">{emailOrPhone}</p>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={onLogOut}
                  >
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="space-x-2 flex items-center">
                <Button
                  className="bg-transparent hover:!bg-neutral-900/50 hover:text-white"
                  variant="outline"
                  onClick={() => setDialogAuth(true)}
                >
                  <RiUserFill className="!text-xs" />
                  <span>Log In</span>
                </Button>
                <Button
                  onClick={() => setDialogAuth(true)}
                  className="hover:bg-primary/90"
                  variant="default"
                >
                  Daftar
                </Button>
              </div>
            )}
          </div>

          <MobileNav items={items} />
        </div>
        <SignInForm
          isOpen={dialogAuth}
          onClose={() => setDialogAuth(!dialogAuth)}
        />
      </div>

      <ScrollArea className="w-[80vw] xl:w-full whitespace-nowrap">
        <div className="flex space-x-4 py-2 items-center justify-center">
          <NavItems items={subNavItems} />
        </div>
        <ScrollBar orientation="horizontal" hidden />
      </ScrollArea>
    </nav>
  );
}
