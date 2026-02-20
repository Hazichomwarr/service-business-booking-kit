// ./lib/booking/availability.ts

type WorkingHours = {
  startHour: number;
  endHour: number;
  slotIntervalMinutes: number;
};

export function buildSlotsForDate(dateISO: string, hours: WorkingHours) {
  // Generate all possible time slots for a day
  // - Day starts at 9am, ends at 18pm. slot are 30mns
  const day = new Date(dateISO + "T00:00:00");
  const slots: string[] = [];

  const start = new Date(day);
  start.setHours(hours.startHour, 0, 0, 0);

  const end = new Date(day);
  end.setHours(hours.endHour, 0, 0, 0);

  for (let t = new Date(start); t < end; ) {
    slots.push(t.toISOString());
    t = new Date(t.getTime() + hours.slotIntervalMinutes * 60_000);
  }

  return slots;
}

export function substractBookedSlots(
  allSlotISOs: string[],
  bookedRanges: { startAt: Date; endAt: Date }[],
  serviceDurationMinutes: number,
) {
  return allSlotISOs.filter((slotISO) => {
    const slotStart = new Date(slotISO);
    const slotEnd = new Date(
      slotStart.getTime() + serviceDurationMinutes * 60_000,
    );
    return bookedRanges.every((b) => {
      const overlap = slotStart < b.endAt && slotEnd > b.startAt;
      return !overlap;
    });
  });
}
