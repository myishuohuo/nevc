import './init'

import '../components/header'
import '../components/footer'
import '../components/carousel'
import '../components/case'
import '../components/team'
import '../components/partner'


// import '../components/footer'
import '../components/range'
// import '../components/information'
import {isPC} from '../util/tools'
import { isThisISOYear } from 'date-fns';
// import '../components/header/headers'

// 导航条hover
$('li.dropdown').mouseenter(function() {
	$(this).addClass('open show'); $(this).find('.dropdown-menu').addClass('show')   })
.mouseleave(function() {
		$(this).removeClass('open show'); $(this).find('.dropdown-menu').removeClass('show')    
});
if (isPC()) {
	$('.dropdown').click(function(e) {
		e.stopPropagation();
		if ($(this).find('open show')) {
			$(this).addClass('open show');
		}
	})
}

