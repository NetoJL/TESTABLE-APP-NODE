import { Appointment } from '../entitites/appointment';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const sut = new CreateAppointment()

        const startsAt = new Date()
        const endsAt = new Date()

        startsAt.setDate(startsAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)
        
        expect(sut.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})