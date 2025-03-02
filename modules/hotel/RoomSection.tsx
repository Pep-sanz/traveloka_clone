'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useStorageStore } from '@/stores/storage.store';
import { useAuthStore } from '@/stores/auth.store';
import { toast } from 'sonner';

const rooms = [
  {
    id: 1,
    name: 'Kamar, 2 Tempat Tidur Twin',
    image:
      'https://ik.imagekit.io/tvlk/generic-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/1000000/70000/63400/63389/d2bfcfc8_z.jpg?_src=imagekit&tr=f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
    size: '28.0 m²',
    features: ['Bebas Asap Rokok', 'Shower', 'Kulkas'],
    options: [
      {
        id: '1a',
        type: 'Tanpa Sarapan',
        beds: '2 ranjang twin',
        price: 1130000,
        discount: 1506666,
        points: 5127,
        remaining: 5,
        bestOffer: false,
      },
      {
        id: '1b',
        type: 'Termasuk sarapan untuk 2 orang',
        beds: '2 ranjang twin',
        price: 1230000,
        discount: 1639999,
        points: 5581,
        remaining: 5,
        bestOffer: true,
      },
    ],
  },
];

const RoomList = () => {
  const { auth } = useStorageStore();
  const { setDialogAuth } = useAuthStore();

  const [selectedRoom, setSelectedRoom] = useState<{
    id: string;
    name: string;
    price: number;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBuy = (option: any) => {
    if (!auth) {
      setDialogAuth(true);
    } else {
      setSelectedRoom({
        id: option.id,
        name: option.name,
        price: option.price,
      });
      setIsDialogOpen(true);
    }
  };

  const confirmPurchase = () => {
    toast.success('Pembelian berhasil!', {
      className: '!bg-green-500 text-white',
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="container py-32 mx-auto p-6">
      <p className="font-bold text-lg ml-3">{rooms[0].name}</p>
      {rooms.map((room) => (
        <Card key={room.id} className="mb-6">
          <CardContent className="p-4 grid grid-cols-3 gap-4">
            <div>
              <img
                src={room.image}
                alt={room.name}
                className="rounded-lg w-full h-auto"
              />
              <p className="mt-2 text-sm text-gray-600">
                Luas kamar: {room.size}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {room.features.map((feature) => (
                  <Badge key={feature} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button variant="link" className="mt-2 text-blue-600">
                Lihat Detail Kamar
              </Button>
            </div>

            <div className="col-span-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pilihan Kamar</TableHead>
                    <TableHead>Tamu</TableHead>
                    <TableHead>Harga/kamar/malam</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {room.options.map((option) => (
                    <TableRow key={option.id}>
                      <TableCell>
                        <p className="font-medium">{room.name}</p>
                        <p className="text-sm text-gray-500">{option.type}</p>
                        <p className="text-sm text-gray-500">{option.beds}</p>
                        <p className="text-sm text-gray-500">
                          ✅ Kebijakan pembatalan berlaku
                        </p>
                      </TableCell>
                      <TableCell className="text-center">👥</TableCell>
                      <TableCell>
                        {option.discount && (
                          <p className="text-xs line-through text-gray-500">
                            Rp {option.discount.toLocaleString()}
                          </p>
                        )}
                        <p className="text-lg font-bold text-red-500">
                          Rp {option.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          Di luar pajak & biaya
                        </p>
                        <p className="text-xs text-yellow-500">
                          Dapatkan {option.points} Poin
                        </p>
                        {option.bestOffer && (
                          <Badge className="mt-1 bg-green-500 text-white">
                            Kamar termurah dengan sarapan
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            handleBuy({ ...option, name: rooms[0].name })
                          }
                          variant="default"
                        >
                          Beli
                        </Button>
                        <p className="text-xs text-red-500">
                          Sisa {option.remaining} kamar!
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ))}

      {selectedRoom && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Konfirmasi Pembelian</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>Anda akan membeli:</p>
              <p className="font-semibold">{selectedRoom.name}</p>
              <p className="text-lg font-bold text-red-500">
                Rp {selectedRoom.price.toLocaleString()}
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Batal
              </Button>
              <Button onClick={confirmPurchase}>Konfirmasi & Bayar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RoomList;
