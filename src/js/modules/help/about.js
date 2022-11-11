import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'info@parcoil.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">PCPaint X</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "PCPaint X image editor. Edit. Create. Post."},
				{title: "Author:", value: 'Parcoil Inc'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub:", html: '<a href="https://parcoil.com">https://parcoil.com</a>'},
				{title: "Website:", html: '<a href="https://parcoil.com">https://parcoil.com</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
