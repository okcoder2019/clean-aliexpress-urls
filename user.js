// ==UserScript==
// @name         Clean Aliexpress URLs
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Clean up Aliexpress URLs to remove unnecessary parameters, allowing links to be clicked by other people
// @author       Orion Kanat
// @match        https://www.aliexpress.us/item/*.html?algo_exp_id=*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var url = window.location.href;
    var part_number = url.match(/\/(\d+)\.html/)[1];
    var new_url = 'https://www.aliexpress.com/item/' + part_number + '.html';
    window.location.replace(new_url);
   var url_check = window.location.href;
  if (url_check === new_url + '?gatewayAdapt=glo2usa&_randl_shipto=US');
   console.log('url has been replaced')

})();
