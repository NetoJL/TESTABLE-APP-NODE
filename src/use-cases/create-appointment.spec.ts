import { Appointment } from '../entitites/appointment';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const sut = new CreateAppointment()

        const startsAt = new Date()
        const endsAt = new Date()

        endsAt.setDate(endsAt.getDate() + 1)
        
        expect(sut.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})