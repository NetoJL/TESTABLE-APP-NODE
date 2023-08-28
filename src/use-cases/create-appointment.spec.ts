import { Appointment } from '../entitites/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const startsAt = getFutureDate('2023-08-10')
        const endsAt = getFutureDate('2023-08-11')

        const createAppointment = new CreateAppointment()

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})