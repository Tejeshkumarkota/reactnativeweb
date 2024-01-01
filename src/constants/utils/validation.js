// rules is a js object
export default (val, rules) => {

  let isValid = true;
  let errorMessage = '';
  for (const rule in rules) {
    if (val === null) {
      return {
        isValid: false,
        errorMessage: 'This field is required',
      }
      // if (rule !== 'isRequired') {
      //   return {
      //     isValid: false,
      //     errorMessage: 'This field is required',
      //   }
      // } else {
      //   return {
      //     isValid: true,
      //     errorMessage: '',
      //   }
      // }
    }
    // console.log('whbwlqdkcjbnwed', val, rules)
    switch (rules.rule) {
      case 'isEmail':
        isValid = isValid && emailValidate(val);
        errorMessage = `Please enter valid email Id`;
        break;
      case 'isAlphabet':
        isValid = isValid && alphabetValidate(val);
        errorMessage = `Please enter only alphabets`;
        break;
      case 'isEmiratesID':
        isValid = isValid && emirateslValidate(val);
        errorMessage = `Please enter valid Emirates Id`;
        break;
      case 'minLengthDigit':
        // isValid = isValid && minLengthValidate(val, rules[rule]);
        isValid = isValid && minLengthValidate(val, rules.index);
        errorMessage = `Please enter atleast ${rules.index} number`;
        break;
      case 'adharNo':
        // isValid = isValid && minLengthValidate(val, rules[rule]);
        isValid = isValid && minLengthValidate(val, rules.index);
        errorMessage = `Please enter ${rules.index} digit number`;
        break;
      case 'adharNoValidation':
        // isValid = isValid && minLengthValidate(val, rules[rule]);
        isValid = isValid && adharValidate(val, 12);
        errorMessage = `Please enter ${rules.index} digit number`;
        break;
      case 'maxLengthDigit':
        isValid = isValid && maxLengthValidate(val, rule.index);
        errorMessage = `maximum allowed ${rules.index} number`;
        break;
      case 'minLengthLetter':
        isValid = isValid && minLengthValidate(val, rules.index);
        errorMessage = `Please enter atleast ${rules.index} letters`;
        break;
      case 'minLengthLetters':
        isValid = isValid && minLengthValidate(val, rules.index);
        errorMessage = val == "" ? `Please enter a valid password` : `Please enter atleast ${rules.index} letters`;
        break;
      case 'maxLengthLetter':
        isValid = isValid && maxLengthValidate(val, rules.index);
        errorMessage = `maximum allowed ${rules.index} letters`;
        break;
      case 'phone':
        isValid = isValid && phoneValidate(val, 10);
        errorMessage = `Please enter valid phone number`;
        break;
      case 'isRequired':
        isValid = isValid && requireValidate(val);
        errorMessage = 'This field is required';
        break;
      case 'upperLimit':
        isValid = isValid && upperLimit(val, rules.index);
        errorMessage = `Please enter a value less than or equal to ${rules.index}`;
        break;
      case 'accessPass':
        isValid = isValid && accessPass(val);
        errorMessage = 'Please enter a value between 1 and 9';
        break;
      case 'isName':
        isValid = isValid && is_nameType(val);
        // errorMessage = '3 to 25 chars required';
        errorMessage = 'Please enter valid name';
        break;
      default:
        isValid = true;
    }
    if (!isValid) {
      return {
        isValid,
        errorMessage,
      };
    }
  }
  return {
    isValid,
    errorMessage: '',
  };
};
const emailValidate = (value = '') => {
  // return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  return /^(?=[^@]{2,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{2,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/.test(
    value,
  );
};
const alphabetValidate = (value = '') => {
  // return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  return /^[A-Za-z]+$/.test(
    value,
  );
};
const emirateslValidate = (value = '') => {
  // return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  // return /^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/.test(
  return /^[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}$/.test(
    value,
  );
  // return /^[0-9]{3}[0-9]{4}[0-9]{7}[0-9]{1}$/.test(
  //   value,
  // );
};
const minLengthValidate = (value = '', minLength) => {
  return value.length >= minLength;
};
const phoneValidate = (value = '', minLength) => {
  return value.length == minLength;
};
const adharValidate = (value = '', minLength) => {
  return value.length == minLength;
};
const requireValidate = (value = '') => {
  return minLengthValidate(value, 1);
};
const maxLengthValidate = (value = '', maxLength) => {
  return value.length <= maxLength;
};
const upperLimit = (value = '', maxValue) => {
  return value <= maxValue;
};
const accessPass = (val = '') => {
  return parseInt(val) >= 1 && parseInt(val) < 10;
};
const is_nameType = (val = '') => {
  return val.length >= 3 && val.length <= 25;
};
