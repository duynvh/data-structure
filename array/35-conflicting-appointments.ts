// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

// Appointments: [[6,7], [2,4], [8,12]]
// Output: true
// Explanation: None of the appointments overlap, therefore a person can attend all of them.

// Appointments: [[4,5], [2,3], [3,6]]
// Output: false
// Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

class Appointment {
    start: number;
    end: number;
   
    constructor(start: number, end: number) {
      this.start = start;
      this.end = end;
    }
}

function conflictAppointment(appointments: Appointment[]): boolean {
    appointments = appointments.sort((n1, n2) => {
        return n1.start - n2.start;
    });

    for (let i = 1; i < appointments.length; i++) {
        if (appointments[i].start < appointments[i - 1].end) return false;
    }
    
    return true;
}

let appointments: Appointment[] = [];
appointments.push(new Appointment(1, 4));
appointments.push(new Appointment(2, 5));
appointments.push(new Appointment(7, 9));

console.log(conflictAppointment(appointments));

appointments = [];
appointments.push(new Appointment(6, 7));
appointments.push(new Appointment(2, 4));
appointments.push(new Appointment(8, 12));

console.log(conflictAppointment(appointments));

appointments = [];
appointments.push(new Appointment(4, 5));
appointments.push(new Appointment(2, 3));
appointments.push(new Appointment(3, 6));

console.log(conflictAppointment(appointments));