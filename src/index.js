'use strict';

import calculator from './modules/calculator';
import checkInputs from './modules/checkInputs';
import commandChangePhoto from './modules/commandChangePhoto';
import countTimer from './modules/countTimer';
import togglePopup from './modules/popup';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';

const now = new Date().getTime();
const date = new Date(now + 86400000);

sendForm();
countTimer(date);
toggleMenu();
togglePopup();
tabs();
slider();
commandChangePhoto();
checkInputs(...document.querySelectorAll('form'));
calculator(100);