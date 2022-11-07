import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'www.viliusl@gmail.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">PCPaint X</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online image editor."},
				{title: "Author:", value: 'ViliusL'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub:", html: '<a href="https://github.com/viliusle/PCPaint X">https://github.com/viliusle/PCPaint X</a>'},
				{title: "Website:", html: '<a href="https://viliusle.github.io/PCPaint X/">https://viliusle.github.io/PCPaint X/</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;