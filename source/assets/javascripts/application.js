import $ from 'jQuery';
import flowtype from './vendor/flowtype.js';
import lettering from './vendor/lettering.js';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  $('.title').flowtype({
    minFont   : 12,
    maxFont   : 500,
    fontRatio : 5
  });
  $(".title h1").lettering();
});

