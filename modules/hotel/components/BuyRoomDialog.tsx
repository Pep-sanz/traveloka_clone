import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BuyRoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (roomId: string, quantity: number) => void;
}

export function BuyRoomDialog({
  isOpen,
  onClose,
  onConfirm,
}: BuyRoomDialogProps) {
  const [roomId, setRoomId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    if (!roomId || quantity <= 0) return;
    onConfirm(roomId, quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Beli Room</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="room-id">Room ID</Label>
            <Input
              id="room-id"
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Masukkan Room ID"
            />
          </div>

          <div>
            <Label htmlFor="quantity">Jumlah</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Masukkan jumlah"
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={handleConfirm} disabled={!roomId || quantity <= 0}>
            Beli Sekarang
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
