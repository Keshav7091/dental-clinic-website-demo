const STORAGE_KEY = 'ivory_clinic_appointments';

export function getAppointments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load appointments from localStorage', e);
    return [];
  }
}

export function saveAppointment(appointment) {
  try {
    const appointments = getAppointments();
    const updated = [
      {
        ...appointment,
        status: appointment.status || 'pending', // 'pending' | 'confirmed' | 'rejected'
        createdAt: appointment.createdAt || new Date().toISOString(),
      },
      ...appointments.filter((a) => a.ref !== appointment.ref),
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save appointment', e);
    return [];
  }
}

export function updateAppointmentStatus(ref, status, doctorNote = '') {
  try {
    const appointments = getAppointments();
    const updated = appointments.map((item) => {
      if (item.ref === ref) {
        return {
          ...item,
          status,
          doctorNote,
          updatedAt: new Date().toISOString(),
        };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update appointment status', e);
    return [];
  }
}

export function getAppointmentByRef(ref) {
  const appointments = getAppointments();
  return appointments.find((a) => a.ref === ref) || null;
}
