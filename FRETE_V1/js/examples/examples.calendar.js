/*
Name: 			Pages / Calendar - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:  4.0.0
*/
/*
for (let i = 0; i < teste.length; i++) {

}*/

$(document).ready(function ($) {

	'use strict';

	var initCalendarDragNDrop = function () {
		var Draggable = FullCalendar.Draggable;

		$('#external-events div.external-event').each(function () {
			new Draggable($(this)[0], {
				itemSelector: '.external-event',
				eventData: function (eventEl) {
					var eventObj = $(eventEl).data('event');
					return eventObj;
				}
			});
		});
	};

	var initCalendar = function () {
		var $calendar = $('#calendar');
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		var $calendarInstace = new FullCalendar.Calendar($calendar[0], {
			themeSystem: 'bootstrap',
			eventDisplay: 'block',
			headerToolbar: {
				start: 'title',
				center: '',
				end: 'prev,today,next,dayGridDay,dayGridWeek,dayGridMonth'
			},
			bootstrapFontAwesome: {
				close: 'fa-times',
				prev: 'fa-caret-left',
				next: 'fa-caret-right',
				prevYear: 'fa-angle-double-left',
				nextYear: 'fa-angle-double-right'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function (eventDropInfo) { // this function is called when something is dropped

				// is the "remove after drop" checkbox checked?
				if ($('#RemoveAfterDrop').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					eventDropInfo.draggedEl.parentNode.removeChild(eventDropInfo.draggedEl);
				}

			},
			events: [
				{
					id: 999,
					title: 'Click for Outlook',
					start: new Date(y, m, d, 10, 30),
					end: new Date(y, m, d + 4, 12, 30),
					//className: 'fc-event-primary',
					url: 'https://outlook.live.com/mail/0/',
					allDay: false
				}
			]
		});

		$calendarInstace.render();
	};

	$(function () {
		initCalendar();
		initCalendarDragNDrop();
	});

}).apply(this, [jQuery]);