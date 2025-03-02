'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  FaUsers,
  FaSearchLocation,
  FaCalendarAlt,
  FaSearch,
} from 'react-icons/fa';
import { addDays, format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';
import CounterInput from './CounterInput';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  location: z.string().min(3, 'Minimal 3 karakter'),
  dateRange: z
    .object({
      from: z.date(),
      to: z.date().optional(),
    })
    .optional(),
  adultGuests: z.number().min(1),
  childGuests: z.number().min(0),
  rooms: z.number().min(1),
});

interface FormFilterProps {
  onSearch: (filters: {
    location: string;
    dateRange?: DateRange;
    adultGuests: number;
    childGuests: number;
    rooms: number;
  }) => void;
}

const FormFilter: React.FC<FormFilterProps> = ({ onSearch }) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      dateRange: { from: today, to: tomorrow },
      adultGuests: 1,
      childGuests: 0,
      rooms: 1,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSearch)}
        className="w-full flex justify-center mx-auto p-4 sm:p-6 rounded-lg shadow-md bg-white"
      >
        <div className="flex flex-wrap w-full gap-4">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col min-w-[250px]">
                <label className="text-sm font-medium mb-1 flex items-center gap-2">
                  <FaSearchLocation /> Lokasi
                </label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Masukkan lokasi..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col min-w-[250px]">
                <label className="text-sm font-medium mb-1 flex items-center gap-2">
                  <FaCalendarAlt /> Tanggal Check-in & Check-out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon />
                      {field.value?.from ? (
                        field.value.to ? (
                          `${format(field.value.from, 'LLL dd, y')} - ${format(
                            field.value.to,
                            'LLL dd, y',
                          )}`
                        ) : (
                          format(field.value.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="adultGuests"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col min-w-[250px]">
                <label className="text-sm font-medium mb-1 flex items-center gap-2">
                  <FaUsers /> Tamu & Kamar
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {field.value} Dewasa, {form.watch('childGuests')} Anak,{' '}
                      {form.watch('rooms')} Kamar
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Dewasa</span>
                        <CounterInput
                          value={field.value}
                          onChange={field.onChange}
                          min={1}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Anak-anak</span>
                        <CounterInput
                          value={form.watch('childGuests')}
                          onChange={(v) => form.setValue('childGuests', v)}
                          min={0}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kamar</span>
                        <CounterInput
                          value={form.watch('rooms')}
                          onChange={(v) => form.setValue('rooms', v)}
                          min={1}
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <div className="flex items-end w-full sm:w-auto">
            <Button
              type="submit"
              className="px-6 py-5 text-lg bg-orange-500 hover:bg-orange-500/90 w-full sm:w-auto"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormFilter;
