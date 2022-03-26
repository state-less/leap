/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
// @ts-nocheck

import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Chip,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Tooltip,
    Typography,
    LinearProgress,
} from '@mui/material';
import TimePicker from '@mui/lab/TimePicker';
import React, { FunctionComponent, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as DateFns from 'date-fns';
import moment from 'moment';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import PickersDay from '@mui/lab/PickersDay';
import {
    ServerComponent,
    useAction,
    useClientContext,
    useProps,
} from '@state-less/react-client';

import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {
    Scheduler,
    DayView,
    Appointments,
    AppointmentTooltip,
    MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
    CalendarMonthIcon,
    CalendarViewDayIcon,
    CheckIcon,
    CloseIcon,
    ErrorIcon,
    MoreIcon,
} from '../Icons';
import { TranslatedTooltip } from '../translated/Tooltip';

import { TranslatedAlert } from '../translated/Alert';
import { TranslatedCardHeader } from '../translated/CardHeader';
import { TranslatedFormControlLabel } from '../translated/FormControlLabel';
import { useTranslation } from 'react-i18next';
import { DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT } from '../../lib/static/const';

const getHostLabel = (address) => {
    return address?.name || address?.email;
};

const dateEquals = (dateA, dateB) => {
    return DateFns.isEqual(new Date(dateA), new Date(dateB));
};

const hasAppointment = (appointments, date) => {
    if (!Array.isArray(appointments)) return false;
    return appointments.some((apt) => {
        const { startDate } = apt;
        return dateEquals(startDate, date);
    });
};
export const AvailabilityPicker = (props) => {
    const {
        availableDays = [],
        loading: dataLoading,
        startDate,
        endDate,
        toggleDay,
        setStartDate,
        setEndDate,
        duration = 15,
        setDuration,
        isAdmin = false,
        flags,
        toggleFlag,
    } = props;

    const [value, setValue] = React.useState(new Date());
    const handleChange = (newValue) => {
        console.log('TIMEPICKER', newValue);
        setValue(newValue);
    };
    const loading = !availableDays.length || dataLoading;
    if (!isAdmin) {
        return (
            <Card>
                <TranslatedAlert severity="error">
                    UNEXPECTED_NO_ADMIN
                </TranslatedAlert>
            </Card>
        );
    }
    return (
        <Card>
            <TranslatedAlert severity="info">ALERT_SET_LATER</TranslatedAlert>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TranslatedCardHeader
                    title="TITLE_AVAILABILITY"
                    subheader="SUB_AVAILABILITY"
                />
                <Divider />
                <TranslatedCardHeader title="TITLE_HOURS" />
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TimePicker
                                label="From"
                                value={startDate}
                                onChange={(v) => setStartDate(+v)}
                                renderInput={(params) => (
                                    <TextField {...params} fullWidth />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TimePicker
                                label="To"
                                value={endDate}
                                onChange={(v) => setEndDate(+v)}
                                renderInput={(params) => (
                                    <TextField {...params} fullWidth />
                                )}
                            />
                        </Grid>
                    </Grid>

                    <FormGroup>
                        <Stack direction="row">
                            {Array.from({ length: 7 }).map((e, i) => {
                                const date = new Date();
                                const date2 = DateFns.setDay(date, i, {
                                    weekStartsOn: 0,
                                });
                                return (
                                    <FormControlLabel
                                        key={`day-${i}`}
                                        control={
                                            <Checkbox
                                                onClick={() => toggleDay(i)}
                                                key={`day-${loading}${availableDays[i]}`}
                                                disabled={loading}
                                                checked={availableDays[i]}
                                            />
                                        }
                                        label={DateFns.format(date2, 'iiii')}
                                    />
                                );
                            })}

                            <div className="grow" />
                            <Select
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <MenuItem value={5}>5m</MenuItem>
                                <MenuItem value={10}>10m</MenuItem>
                                <MenuItem value={15}>15m</MenuItem>
                                <MenuItem value={30}>30m</MenuItem>
                                <MenuItem value={45}>45m</MenuItem>
                                <MenuItem value={60}>60m</MenuItem>
                            </Select>
                        </Stack>
                    </FormGroup>
                    {false && (
                        <>
                            <TranslatedFormControlLabel
                                key="showdemo"
                                label="SHOW_PROMO"
                                control={
                                    <Checkbox
                                        onClick={() => toggleFlag('showDemo')}
                                        disabled={loading}
                                        checked={flags.showDemo}
                                    />
                                }
                            />
                            <TranslatedFormControlLabel
                                key="showdemo"
                                label="SHOW_RECURRING"
                                control={
                                    <Checkbox
                                        onClick={() =>
                                            toggleFlag('showRecurring')
                                        }
                                        disabled={loading}
                                        checked={flags.showRecurring}
                                    />
                                }
                            />
                        </>
                    )}
                </CardContent>
            </LocalizationProvider>
            {loading && <LinearProgress />}
        </Card>
    );
};

export const AppointmentsCard = (props) => {
    return (
        <Card>
            <CardHeader title="" />
            <CardContent>
                <AppointmentsList {...props} />
            </CardContent>
        </Card>
    );
};

const MoreMenu = ({ anchorEl }) => {
    const confirm = useAction('confirm', 'onClick');
    const cancel = useAction('cancel', 'onClick');
    const del = useAction('delete', 'onClick');

    return (
        <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchor(null)}
        >
            <MenuItem onClick={() => confirm()}>Confirm</MenuItem>
            <MenuItem onClick={() => cancel()}>Cancel</MenuItem>
            <MenuItem onClick={() => del()}>Delete</MenuItem>
        </Menu>
    );
};

const Appointment = (props) => {
    const { id, startDate, booker, flags } = props;
    const dt = new Date(startDate);
    const fromNow = moment(dt).fromNow();
    const [anchorEl, setAnchor] = useState(null);

    const { confirmed, canceled } = useProps();

    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <TranslatedTooltip
                        title={
                            canceled
                                ? 'TITLE_CANCELED'
                                : confirmed
                                ? 'TITLE_CONFIRMED'
                                : ''
                        }
                    >
                        <Avatar
                            sx={{
                                backgroundColor: canceled
                                    ? 'error.main'
                                    : confirmed
                                    ? 'primary.main'
                                    : 'info.main',
                            }}
                        >
                            {canceled ? (
                                <ErrorIcon />
                            ) : confirmed ? (
                                <CheckIcon />
                            ) : (
                                <CloseIcon />
                            )}
                        </Avatar>
                    </TranslatedTooltip>
                </ListItemIcon>

                <ListItemText
                    primary={booker?.name || id}
                    secondary={
                        <Tooltip
                            title={DateFns.format(dt, DEFAULT_DATE_FORMAT)}
                            placement="top-start"
                        >
                            <span>{fromNow}</span>
                        </Tooltip>
                    }
                />

                {Object.keys(flags).map((flag) => {
                    return (
                        <ListItemIcon>
                            <Chip label={flag} />
                        </ListItemIcon>
                    );
                })}

                <ListItemSecondaryAction>
                    <IconButton onClick={(e) => setAnchor(e.target)}>
                        <MoreIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <MoreMenu id={id} anchorEl={anchorEl} />
        </>
    );
};

export const AppointmentsList = ({
    appointments = [],
    bookings = [],
    bookers = {},
    flags,
    cancel,
    confirm,
    isAdmin,
}) => {
    return (
        <>
            {!appointments.length && (
                <TranslatedAlert severity="info">ALERT_NO_DATA</TranslatedAlert>
            )}
            <List>
                {!isAdmin &&
                    bookings &&
                    bookings.map(({ id, ...a }) => (
                        <ServerComponent name={`appointment-${id}`}>
                            <Appointment
                                {...a}
                                id={id}
                                booker={bookers[id]}
                                flags={flags}
                            />
                        </ServerComponent>
                    ))}
                {isAdmin &&
                    appointments &&
                    appointments.map(({ id, ...a }) => (
                        <ServerComponent name={`appointment-${id}`}>
                            <Appointment
                                {...a}
                                id={id}
                                booker={bookers[id]}
                                flags={flags}
                            />
                        </ServerComponent>
                    ))}
            </List>
        </>
    );
};

const id = 0;
export const AppointmentCalendar = (props) => {
    const {
        appointments = [],
        bookings = [],
        bookers = {},
        startDate,
        endDate,
        duration,
    } = props;
    const start = startDate || new Date();
    const end = endDate || new Date();
    const apts = (bookings || []).map(({ id, startDate, endDate }) => {
        const booker = bookers[id];
        return {
            title: booker?.name,
            id,
            startDate: new Date(startDate),
            endDate: DateFns.addMinutes(new Date(startDate), duration),
        };
    });

    return (
        <Scheduler data={apts || []}>
            <MonthView />
            <Appointments />
            <AppointmentTooltip />
        </Scheduler>
    );
};

export const AppointmentSwitch = (props) => {
    const { appointments } = props;
    const [tab, setTab] = useState(0);
    const Switch = (
        <ButtonGroup>
            <IconButton
                onClick={() => setTab(0)}
                color={tab === 0 ? 'primary' : 'default'}
            >
                <CalendarViewDayIcon />
            </IconButton>
            <IconButton
                onClick={() => setTab(1)}
                color={tab === 1 ? 'primary' : 'default'}
            >
                <CalendarMonthIcon />
            </IconButton>
        </ButtonGroup>
    );

    const Comp = tab === 0 ? AppointmentsList : AppointmentCalendar;
    return (
        <Card>
            <TranslatedCardHeader title="TITLE_APPOINTMENTS" action={Switch} />
            <CardMedia>
                <Comp {...props} />
            </CardMedia>
        </Card>
    );
};
export const BookingDatePicker = (props) => {
    const {
        startDate,
        endDate,
        duration = 15,
        usedDemo = false,
        availableDays = [],
        appointments = [],
        hostIdentity = null,
        book,
        flags: { showRecurring, showDemo } = {},
    } = props;
    const { t } = useTranslation();
    const [value, setValue] = React.useState([null, null]);
    const [from, to] = value;
    const [time, setTime] = useState(null);
    const hoursAvailable = DateFns.differenceInHours(endDate, startDate);
    const steps = (hoursAvailable * 60) / duration;
    const stepsArr = Array.from({ length: steps }).map((e, i) => {
        const dt = new Date(from);
        const dt2 = DateFns.setHours(dt, DateFns.getHours(startDate));
        const dt3 = DateFns.setMilliseconds(
            DateFns.setSeconds(DateFns.setMinutes(dt2, i * duration), 0),
            0
        );
        return dt3;
    });
    const { identity } = useClientContext();
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [weekly, setWeekly] = useState(false);
    const [useDemo, setUseDemo] = useState(true);

    const numT = DateFns.differenceInCalendarDays(to, from) + 1;
    const numA = Math.ceil(numT / 7);

    const bookingTitle = !identity?.address
        ? 'TITLE_LOGIN_REQUIRED'
        : 'TITLE_BOOK';

    const bookingDate = DateFns.setDate(
        time || new Date(),
        DateFns.getDate(from)
    );
    const bookingDateTo = DateFns.setDate(
        time || new Date(),
        DateFns.getDate(to)
    );
    return (
        <Card>
            {!identity?.google && (
                <TranslatedAlert severity="info">
                    ALERT_LOGIN_REQUIRED
                </TranslatedAlert>
            )}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container className="fh" sx={{ overflow: 'hidden' }}>
                    <Grid item xs={12} md={showRecurring || showDemo ? 4 : 6}>
                        <Card>
                            <CardHeader
                                title={t('APT_DURATION', { duration })}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {t('APT_PARTICIPANTS')}
                                </Typography>
                                {hostIdentity && (
                                    <IdentityChip {...hostIdentity} />
                                )}
                                {identity?.address?.name && (
                                    <IdentityChip {...identity?.address} />
                                )}
                                <Typography variant="h6">
                                    {t('APT_APPOINTMENTS', {
                                        n: appointments?.length,
                                    })}
                                </Typography>
                                {!numA
                                    ? ''
                                    : Array.from({ length: numA }).map(
                                          (e, i) => {
                                              const appointment =
                                                  DateFns.addDays(
                                                      bookingDate || new Date(),
                                                      7 * i
                                                  );

                                              return (
                                                  <Chip
                                                      label={DateFns.format(
                                                          appointment,
                                                          DEFAULT_TIME_FORMAT
                                                      )}
                                                  />
                                              );
                                          }
                                      )}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} container>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            // className="sdrp-fix"
                        >
                            <Paper>
                                {!weekly ? (
                                    <StaticDatePicker
                                        // className="sdp-fix"
                                        disablePast
                                        displayStaticWrapperAs="desktop"
                                        value={value}
                                        renderDay={(date, sel, dayProps) => {
                                            const isPast = DateFns.isBefore(
                                                date,
                                                new Date()
                                            );
                                            const day = DateFns.getDay(date);

                                            return (
                                                <PickersDay
                                                    day={date}
                                                    {...dayProps}
                                                    disabled={
                                                        isPast ||
                                                        !availableDays[day]
                                                    }
                                                />
                                            );
                                        }}
                                        onChange={(newValue) => {
                                            setValue([newValue, newValue]);
                                        }}
                                    />
                                ) : (
                                    <StaticDateRangePicker
                                        className="sdrp-fix"
                                        calendars={1}
                                        disablePast
                                        displayStaticWrapperAs="desktop"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                            <>
                                                <TextField {...startProps} />
                                                <Box sx={{ mx: 2 }}> to </Box>
                                                <TextField {...endProps} />
                                            </>
                                        )}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Paper
                                square
                                sx={{ padding: 1, width: '100%' }}
                                elevation={0}
                                className="fh"
                            >
                                {stepsArr.map((date) => {
                                    return (
                                        <TranslatedTooltip
                                            title={
                                                hasAppointment(
                                                    appointments,
                                                    date
                                                )
                                                    ? 'TITLE_BOOKED'
                                                    : 'TITLE_AVAILABLE'
                                            }
                                        >
                                            <span>
                                                <Chip
                                                    disabled={hasAppointment(
                                                        appointments,
                                                        date
                                                    )}
                                                    color={
                                                        dateEquals(date, time)
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                    onClick={() =>
                                                        setTime(date)
                                                    }
                                                    label={DateFns.format(
                                                        date,
                                                        DEFAULT_TIME_FORMAT
                                                    )}
                                                    sx={{ mt: 1 }}
                                                />
                                            </span>
                                        </TranslatedTooltip>
                                    );
                                })}
                            </Paper>
                        </Grid>
                    </Grid>
                    {(showRecurring || showDemo) && (
                        <Grid item xs={12} md={2}>
                            <Paper
                                className="fh"
                                sx={{ padding: 1, width: '100%' }}
                            >
                                {showDemo && (
                                    <TranslatedTooltip
                                        title="APT_BOOK_PROMO"
                                        placement="top"
                                    >
                                        <TranslatedFormControlLabel
                                            disabled={weekly}
                                            onChange={() =>
                                                setUseDemo(!useDemo)
                                            }
                                            control={
                                                <Checkbox
                                                    defaultChecked={!usedDemo}
                                                    disabled={usedDemo}
                                                />
                                            }
                                            label="APT_USE_PROMO"
                                        />
                                    </TranslatedTooltip>
                                )}

                                {showRecurring && (
                                    <Tooltip
                                        title={
                                            useDemo
                                                ? 'APT_NA_PROMO'
                                                : 'APT_BOOK_RECURRING'
                                        }
                                    >
                                        <TranslatedFormControlLabel
                                            control={
                                                <Checkbox
                                                    disabled={
                                                        showDemo && useDemo
                                                    }
                                                    onChange={() =>
                                                        setWeekly(!weekly)
                                                    }
                                                    checked={weekly}
                                                />
                                            }
                                            label="APT_WEEKLY"
                                        />
                                    </Tooltip>
                                )}
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </LocalizationProvider>
            <CardActions>
                <TranslatedTooltip title={bookingTitle}>
                    <span>
                        <Button
                            disabled={!bookingDate || !to || !identity?.address}
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                if (!from || !to || !time)
                                    throw new Error('Missing required fields');

                                book({
                                    startDate: bookingDate,
                                    endDate: bookingDateTo,
                                    duration,
                                    interval: 'weekly',
                                    booker: identity?.address,
                                });
                            }}
                        >
                            BOOK
                        </Button>
                    </span>
                </TranslatedTooltip>
            </CardActions>
        </Card>
    );
};

const BookingView = (props) => {
    return <>{JSON.stringify(props)}</>;
};

const BookingModel = ({ Component }) => {
    const props = useProps();
    const toggleDay = useAction('toggleDay', 'onClick');
    const toggleFlag = useAction('toggleFlag', 'onClick');
    const setStartDate = useAction('setStartDate', 'onChange');
    const setEndDate = useAction('setEndDate', 'onChange');
    const setDuration = useAction('setDuration', 'onChange');
    const book = useAction('book', 'onClick');
    const confirm = useAction('confirm', 'onClick');
    const cancel = useAction('cancel', 'onClick');

    return (
        <Component
            {...props}
            toggleDay={toggleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setDuration={setDuration}
            confirm={confirm}
            cancel={cancel}
            book={book}
            toggleFlag={toggleFlag}
        />
    );
};
export const Booking = ({ View = BookingView }) => {
    return (
        <ServerComponent name="booking">
            <BookingModel Component={View} />
        </ServerComponent>
    );
};

type Identity = {
    picture: string;
    email: string;
    name?: string;
};
export const IdentityChip: FunctionComponent<Identity> = (props) => {
    const { picture, email, name } = props;
    return (
        <Chip
            avatar={picture && <Avatar src={picture} />}
            label={name || email}
        />
    );
};
