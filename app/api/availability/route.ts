import { prisma } from "@/lib/db";
import {
  buildSlotsForDate,
  substractBookedSlots,
} from "@/lib/booking/availability";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  //Use .get() method to retrieve specific values from searchParams:
  const date = searchParams.get("date"); // YYYY-MM-DD
  const serviceId = searchParams.get("serviceId");

  if (!date || !serviceId) {
    return Response.json(
      { error: "Missing date or serviceId" },
      { status: 400 },
    );
  }

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service)
    return Response.json({ error: "Service not found" }, { status: 404 });

  const dayStart = new Date(date + "T00:00:00");
  const dayEnd = new Date(date + "T23:59:59");

  const booked = await prisma.appointment.findMany({
    where: {
      startAt: { gte: dayStart, lte: dayEnd },
      status: { in: ["BOOKED"] },
    },
    select: { startAt: true, endAt: true },
  });

  const allSlots = buildSlotsForDate(date, {
    startHour: 9,
    endHour: 18,
    slotIntervalMinutes: 30,
  });

  const available = substractBookedSlots(
    allSlots,
    booked,
    service.durationMinutes,
  );

  return Response.json({ available });
}
