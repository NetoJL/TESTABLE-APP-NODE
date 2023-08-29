import { Appointment } from '../entitites/appointment';
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointment-repository';
import { getFutureDate } from '../tests/utils/get-future-date';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const startsAt = getFutureDate('2023-08-30')
        const endsAt = getFutureDate('2023-08-31')

        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(
            appointmentsRepository
        )

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })

    it('should not be able to create an appointment with overlapping dates', async () => {
        const startsAt = getFutureDate('2023-08-30')
        const endsAt = getFutureDate('2023-09-04')

        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(
            appointmentsRepository
        )

        await createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })

        expect(createAppointment.execute({
            customer: "John Doe",
            startsAt: getFutureDate('2023-09-03'),
            endsAt: getFutureDate('2023-09-08')
        })).rejects.toBeInstanceOf(Error)
    })
})