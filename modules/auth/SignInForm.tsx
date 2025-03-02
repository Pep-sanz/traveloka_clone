import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useStorageStore } from '@/stores/storage.store';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const existingUsers = ['pepcode@example.com', '081234567890'];
const validPassword = 'Test123';

const loginSchema = z.object({
  loginInput: z.string().min(1, 'Email/No. Handphone wajib diisi'),
  password: z.string().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function SignInForm({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { handleLogin } = useStorageStore();

  const loginInputValue = watch('loginInput');
  const showPassword = existingUsers.includes(loginInputValue);

  const onSubmit = (data: LoginFormValues) => {
    if (!showPassword) return;

    if (
      data.password === validPassword &&
      existingUsers.includes(data.loginInput)
    ) {
      handleLogin({
        emailOrPhone: data.loginInput,
        userName: 'pepcode',
      });
      console.log('Login berhasil');
      onClose();
      window.location.reload();
    } else {
      setValue('password', '', { shouldValidate: true });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="text-black max-w-[90vw] sm:w-[80vw] md:w-[50vw]">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl">Login/Daftar</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
          <div className="space-y-3">
            <Label htmlFor="loginInput">Email/No. Handphone</Label>
            <Input
              id="loginInput"
              {...register('loginInput')}
              placeholder="Masukkan email atau no. handphone-mu"
              className="h-11"
            />
            {errors.loginInput && (
              <p className="text-red-500 text-sm">
                {errors.loginInput.message}
              </p>
            )}
          </div>

          {showPassword && (
            <div className="space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', { required: 'Password wajib diisi' })}
                placeholder="Masukkan password"
                className="h-11"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full text-base"
          >
            {showPassword ? 'Login' : 'Lanjutkan'}
          </Button>
        </form>

        <DialogFooter className="flex !flex-col gap-6">
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] w-[15%] md:w-[25%] bg-neutral-400"></div>
            <span className="text-xs font-semibold text-neutral-500">
              atau login/daftar dengan
            </span>
            <div className="h-[1px] w-[15%] md:w-[25%] bg-neutral-400"></div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {[
              { name: 'Google', icon: '/logo/Google_Icons.webp' },
              { name: 'Apple', icon: '/logo/Apple_Icon.png' },
              { name: 'Facebook', icon: '/logo/Facebook_Icon.webp' },
            ].map((provider) => (
              <Button
                key={provider.name}
                className="bg-primary/25 hover:bg-primary/50 py-3 rounded-full relative text-blue-900 font-semibold flex items-center justify-center"
              >
                {provider.name}
                <Image
                  src={provider.icon}
                  alt={`${provider.name}-icon`}
                  width={24}
                  height={24}
                  className="absolute right-3"
                />
              </Button>
            ))}
          </div>

          <p className="text-xs text-center font-semibold text-neutral-500 px-4">
            Dengan melanjutkan, kamu menyetujui{' '}
            <Link href="/" className="text-blue-500">
              Syarat & Ketentuan
            </Link>{' '}
            ini dan kamu sudah diberitahu mengenai{' '}
            <Link href="/" className="text-blue-500">
              Pemberitahuan Privasi
            </Link>{' '}
            kami.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
