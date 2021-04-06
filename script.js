// Initialize and add the map
function initMap() {
	const center = {
		lat: 38.57079,
		lng: -84.754112,
	};

	const location = {
		lexington: {
			lat: 38.040098,
			lng: -84.504511,
		},
		louisville: {
			lat: 38.237248,
			lng: -85.733573,
		},
		cincinnati: {
			lat: 39.103412,
			lng: -84.517511,
		},
	};

	// The map, centered between
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: center,
	});

	for (key in location) {
		new google.maps.Marker({
			position: new google.maps.LatLng(location[key]),
			map: map,
		});
	}
}

// Saying 'Message Sent' when submit is clicked
const sendMail = () => {
	console.log('Email Sending...');
	let name = $('#form_name')[0].value;
	let number = $('#form_number')[0].value;
	let email = $('#form_email')[0].value;
	let description = $('#form_description')[0].value;
	let time = $('#form_time')[0].value;

	var data = {
		service_id: 'mailgun',
		template_id: 'template_Q2Qa2Jvs_clone',
		user_id: 'user_wwxtoOkKrjAaok9xHAkYR',
		template_params: {
			to_name: 'Mr. Wilson',
			from_name: name,
			phone_number: number,
			email_address: email,
			request_description: description,
			best_time: time,
			reply_to: email,
		},
	};

	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
	})
		.done(function () {
			alert('Your mail is sent!');
			window.location.href = 'index.html';
		})
		.fail(function (error) {
			alert('Oops... ' + JSON.stringify(error));
		});
};
