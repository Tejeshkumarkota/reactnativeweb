/* 
*numberFormat
-numberFormat(number:Number,type:String) 
-Function to get default formated price format
*/

export default (number, type = 'en-AE') =>
  number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
