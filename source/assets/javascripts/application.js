import $ from 'jQuery';
import lettering from './vendor/lettering.js';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  $(".title h1").lettering();
});

