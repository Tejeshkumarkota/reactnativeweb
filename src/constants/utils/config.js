import moment from 'moment';
import { Dimensions, Platform } from 'react-native';

export const TESTING = 0;
export const COMPONENT_LIST = false;
export const LIVE_API_TESTING = false;
export const API_LOG = false;
export const DEFAULT_LANGUAGE = "en"; //English = en and Arabic = hi


//Domain For Apis Call
// export const BASEURL = "https://api.ict.realcube.estate/api/";     
// export const SERVER_URL_ICT = 'http://apidev.ict.ae/'; // <- Client

export const SERVER_URL_ICT = 'http://authdev.ict.ae/'; // <- DEV
// export const SERVER_URL_ICT = 'https://webappapi-test.ict.ae/'; // <- UAT URL
// export const SERVER_URL_ICT = 'https://webappapi.ict.ae/'; // <- Production URL


export const TERMS_AND_CONDITION_URL = "https://ictweb.ict.ae/terms-and-conditions";
export const DUMMY_LOGO = "https://logoipsum.com/logoipsum.png";
export const DUMMY_USER = "https://kamelazakafoundation.org/wp-content/uploads/2021/11/Dummy-user-new.jpg";

export const DUMMY_LOCATION_ICON = "https://cdn-icons-png.flaticon.com/128/447/447031.png";
export const DUMMY_PHONE_ICON = "https://cdn-icons-png.flaticon.com/128/597/597177.png";
export const DUMMY_CALENDAR_ICON = "https://cdn-icons-png.flaticon.com/128/2740/2740596.png";
export const DUMMY_TIME_ICON = "https://cdn-icons-png.flaticon.com/128/3416/3416094.png";
export const DUMMY_MENU_ICON = "https://cdn-icons-png.flaticon.com/128/8917/8917225.png";
export const DUMMY_WEB_ICON = "https://cdn-icons-png.flaticon.com/128/2807/2807258.png";
export const DUMMY_OFFER_ICON = "https://cdn-icons-png.flaticon.com/128/4655/4655177.png"
export const DUMMY_TYPE_ICON = "https://cdn-icons-png.flaticon.com/128/1545/1545274.png"
export const DUMMY_REDEEM_ICON = "https://cdn-icons-png.flaticon.com/128/7688/7688188.png"
export const DUMMY_BUILDING_ICON = "https://cdn-icons-png.flaticon.com/128/2882/2882328.png"


//Admin App  User Role id
export const FACILITY_CONTRACTOR_ROLE_ID = 8;
export const FACILITY_CONTRACTOR_SOFT_SERVICES_ROLE_ID = 9;
export const FACILITY_CONTRACTOR_SUPERVISOR = 10;
export const FINANCE_TEAM_ROLE_ID = 11;
export const FM_TEAM_ROLE_ID = 12;
export const FM_SECURITY_MANAGER_ROLE_ID = 13;
export const MARKETING_TEAM_ROLE_ID = 16;
export const PROPERTY_EXECUTIVE_ROLE_ID = 17;
export const PROPERTY_MANAGER_ROLE_ID = 18;

export const {
  height: DEVICE_WINDOW_HEIGHT,
  width: DEVICE_WINDOW_WIDTH,
} = Dimensions.get('window');
export const NAV_HEADER_HEIGHT = 120;

export const IMAGE_UPLOAD_ASPECT_RATIO = [4, 3];
export const IMAGE_UPLOAD_MAX_SIZE = 100;
export const IMAGE_UPLOAD_QUALITY = 0.5;

export const NO_IMAGE_AVAIABLE = "https://cdn-icons.flaticon.com/png/512/4194/premium/4194687.png?token=exp=1656330934~hmac=aa764dd748a641bc495eee207672126b";
export const PLATFORM_ANDROID = Platform.OS === 'android';
export const PLATFORM_IOS = Platform.OS === 'ios';
export const TOKEN_REGEN_TIME = 18; //hours

// !!API Token credentials, Needs decryption.
export const APPID =
  '[133,205,175,170,153,156,166,105,131,81,129,158,149,101,93]';
export const APP_SECRET =
  '[92,134,210,101,94,96,105,142,202,149,129,144,111,155,114,167,162,169,156,121,134,136,140,92,119,150,157,148,124,169,120,172,151,100,154,178,131,187,109,169,190,155,93,99,138,102,189,134,137,186,187,103,95,101,180,190,159,176,163,194]';
export const formatMoney = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

// VALIDATIONS
export const NameMaxCharLength = 20;
export const MobileNumberMaxDigitLength = 15;
export const EmailMaxCharLength = 50;
export const DescriptionMaxCharLength = 50;
export const CardNumberMaxCharLength = 16;
export const CvvNumberMaxCharLength = 3;
export const CompanyMaxCharLength = 25;

export const dateDifference = (
  date,
  type = 'FULL',
  prefix = ' ',
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
      sec: ' second',
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