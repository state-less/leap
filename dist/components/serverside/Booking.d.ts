import { FunctionComponent } from 'react';
export declare const AvailabilityPicker: (props: any) => JSX.Element;
export declare const AppointmentsCard: (props: any) => JSX.Element;
export declare const AppointmentsList: ({ appointments, bookings, bookers, flags, cancel, confirm, isAdmin, }: {
    appointments?: any[];
    bookings?: any[];
    bookers?: {};
    flags: any;
    cancel: any;
    confirm: any;
    isAdmin: any;
}) => JSX.Element;
export declare const AppointmentCalendar: (props: any) => JSX.Element;
export declare const AppointmentSwitch: (props: any) => JSX.Element;
export declare const BookingDatePicker: (props: any) => JSX.Element;
export declare const Booking: ({ View }: {
    View?: (props: any) => JSX.Element;
}) => JSX.Element;
declare type Identity = {
    picture: string;
    email: string;
    name?: string;
};
export declare const IdentityChip: FunctionComponent<Identity>;
export {};
