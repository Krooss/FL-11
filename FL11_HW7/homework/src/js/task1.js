let email = prompt('Enter your email');
let minEmailLength = 6;
let minPassLength = 5;

if (email) {
	if (email.length < minEmailLength) {
		alert('I don’t know any emails having name length less than 6 symbols');
	} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
		let pass = prompt('Enter your password');
		if (pass) {
			if (email==='user@gmail.com' && pass === 'UserPass' || email==='admin@gmail.com' && pass==='AdminPass') {
				let changePassword = confirm('Do you want to change your password?');
				if (changePassword) {
					let oldPassword = prompt('Enter your password');
					if (oldPassword) {
						if (oldPassword === pass) {
							let newPass = prompt('Enter your new password');
							if (newPass.length < minPassLength) {
								alert('It’s too short password. Sorry.');
							} else {
								let newPassConfirm = prompt('Confirm your new password');
								if (newPass === newPassConfirm) {
									alert('You have successfully changed your password.');
								} else {
									alert('You wrote the wrong password.');
								}
							}
						} else {
							alert('Wrong password');
						}
					} else {
						alert('Canceled.');
					}
				} else {
					alert('You have failed the change.');
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('Canceled.');
		}
	} else {
		alert('I don’t know you');
	}
} else {
	alert('Canceled.')
}

//