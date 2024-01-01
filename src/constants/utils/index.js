import {
  ThemeProvider,
  withTheme,
  useTheme,
  getAppFont,
  theme,
  hexToRGBA,
} from './theme';
import moment from 'moment-timezone'
import * as Localization from 'expo-localization';
import getNumberFormat from './getNumberFormat';
import * as config from './config';
import endpoints from './endpoints';
// import * as getFullUrl from './getFullUrl'
import strings from './strings';
import dLogin from "./dLogin.json";
import { useSelector, useDispatch } from "react-redux";
import Store from '../redux/store';

const LocalTime = Localization.timezone;




const dateMonthYearTime = (date) => {
  // return `${moment(date).format('D')} ${moment(date).format('MMMM')} ${moment(
  //   date,
  // ).format('YYYY, h:mm a')}`;
  return `${moment
    .tz(date, 'Asia/Dubai')
    .clone()
    .tz(LocalTime)
    .format('D MMMM YYYY, h:mm a')}`;
};

const getFullUrl = (endpoint, api_prefix = 'api') => {
  // let DomainData = useSelector((state) => state.generalpurpose);
  // if (__DEV__ && config.LIVE_API_TESTING === false) {
  //   return `${config.SERVER_URL_ICT}${api_prefix}${endpoint}`;
  // }
  return `${config.SERVER_URL_ICT}${api_prefix}${endpoint}`;

  // let DomainIS = Store.getState()?.generalpurpose?.domainStatus
  // DomainIS = DomainIS ? "http://apidev.ict.ae/" : "https://api.ict.realcube.estate/"
  // return `${config.SERVER_URL_ICT}${api_prefix}${endpoint}`;
  // return `${DomainIS}${api_prefix}${endpoint}`;
};

const removeAllHtmlTags = (string) => {
  return string?.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "");
};

const mmmmDateYear = (date) => {
  return date ? `${moment(date).format('MMMM D, YYYY')}` : null;
  //January 21, 2020
};
const dateMonthTime = (date) => {
  return `${moment
    .tz(date, 'Asia/Dubai')
    .clone()
    .tz(LocalTime)
    .format('D MMMM, h:mm a')}`;
};
const dateDifference = (
  date,
  type = 'SINGLE',
  prefix = '',
  postfix = null,
) => {
  if (postfix == null) {
    postfix = ' ago';
  }

  let label_types = {
    SINGLE: {
      year: 'y',
      years: 'y',
      month: 'M',
      months: 'M',
      day: 'd',
      days: 'd',
      hour: 'h',
      hours: 'h',
      min: 'm',
      mins: 'm',
      sec: 's',
    },
    FULL: {
      year: ' year',
      years: ' years',
      month: ' month',
      months: ' months',
      day: ' day',
      days: ' days',
      hour: ' hour',
      hours: ' hours',
      min: ' minute',
      mins: ' minutes',
      sec: ' s',
    },
  };

  let start_dates = moment(date);
  let end_dates = moment();
  let duration = moment.duration(end_dates.diff(start_dates));
  let year = duration.years() || 0;
  let month = duration.months() || 0;
  let day = duration.days() || 0;
  let hour = duration.hours() || 0;
  let minute = duration.minutes() || 0;
  let second = duration.seconds() || 0;
  let diffrencetime = '';

  if (year != 0 && year != 1) {
    diffrencetime = Math.abs(year) + label_types[type]['years'];
  } else if (year != 0) {
    diffrencetime = Math.abs(year) + label_types[type]['year'];
  }

  if (year == 0 && month != 0) {
    diffrencetime = Math.abs(month) + label_types[type]['months'];
  } else if (year == 0) {
    diffrencetime = Math.abs(month) + label_types[type]['month'];
  }

  if (year == 0 && month == 0 && day != 0) {
    diffrencetime = Math.abs(day) + label_types[type]['days'];
  } else if (year == 0 && month == 0) {
    diffrencetime = Math.abs(day) + label_types[type]['day'];
  }

  if (year == 0 && month == 0 && day == 0 && hour != 0) {
    diffrencetime = Math.abs(hour) + label_types[type]['hours'];
  } else if (year == 0 && month == 0 && day == 0) {
    diffrencetime = Math.abs(hour) + label_types[type]['hour'];
  }

  if (year == 0 && month == 0 && day == 0 && hour == 0 && minute != 0) {
    diffrencetime = Math.abs(minute) + label_types[type]['mins'];
  } else if (year == 0 && month == 0 && day == 0 && hour == 0) {
    diffrencetime = Math.abs(minute) + label_types[type]['min'];
  }

  if (year == 0 && month == 0 && day == 0 && hour == 0 && minute == 0) {
    diffrencetime = Math.abs(second) + label_types[type]['sec'];
  }

  return `${prefix}${diffrencetime}${postfix}`;
};
// const getFullUrl = (endpoint, apiPrefix = 'api/') => {
//   if (__DEV__ && config.LIVE_API_TESTING === false) {
//     return `${config.SERVER_URL_UAT}${apiPrefix}${endpoint}`;
//   }
//   return `${config.SERVER_URL_PRD}${apiPrefix}${endpoint}`;
// };

const fullDateAndTimeFormat = (date) => {
  if (date)
    return moment(date).format("DD-MMM-YYYY | h:mm A");
};

const dateAndTimeFormat = (date) => {
  if (date)
    return moment(date).format("DD-MM-YYYY | h:mm A");
};

const camelCaseToStarCase = (text) => {
  if (text) {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return (finalResult)
  }
}

const dateAndTimeFormate = (date) => {
  if (date)
    return moment(date).format("DD-MM-YY | h:mm A");
};

const timeFormat = (time) => {
  if (time)
    return moment(time).format("h:mm A");
};

const timeFormatPro = (time) => {
  if (time)
    return moment(time, ["HH:mm"]).format("h:mm A");
};


const fullDateFormat = (date) => {
  if (date)
    return moment(date).format("DD-MMM-YYYY");
};

const dateFormat = (date) => {
  if (date) {
    return moment(date).format("DD-MM-YYYY");
  }
  else {
    return
  }
};
const commaSeparetor = (value) => {
  if (value > 0) {
    return value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  else {
    return
  }

}

const unitNumberFormate = (data) => {
  return data?.replace(/(.*)-/, "");
};

const currencyFormat = (amount) => {
  return amount?.toString()?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

const formattedMoney = (amount) => {
  return amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

const getFormattedDate = (date = undefined) =>
  moment(date).format('YYYY-MM-DD HH:mm:ss');

export {
  ThemeProvider,
  withTheme,
  useTheme,
  fullDateAndTimeFormat,
  dateAndTimeFormat,
  camelCaseToStarCase,
  dateAndTimeFormate,
  getAppFont,
  theme,
  commaSeparetor,
  dateFormat,
  fullDateFormat,
  endpoints,
  strings,
  dateMonthYearTime,
  dateMonthTime,
  dateDifference,
  mmmmDateYear,
  getNumberFormat,
  getFullUrl,
  config,
  hexToRGBA,
  getFormattedDate,
  dLogin,
  unitNumberFormate,
  timeFormatPro,
  timeFormat,
  formattedMoney,
  removeAllHtmlTags,
  currencyFormat
};
