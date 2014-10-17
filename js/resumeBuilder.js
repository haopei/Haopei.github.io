// Bio Object
var bio = {
	"name": "Haopei Yang",
	"role": "Web Developer",
	"contacts": {
		"mobile": "647-1429",
		"email": "haopeiyang@gmail.com",
		"github": "https://github.com/Haopei",
		"twitter": "@haopeiyang",
		"blog": "www.medium.com",
		"location": "Guyana"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "Welcome to my resume",
	"skills": [
		"Javascript",
		"HTML",
		"CSS",
		"Python"
	]
}
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	// var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedHTMLwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header .name-role").prepend(formattedRole);
	$("#header .name-role").prepend(formattedName);
	$("#header .name-role").prepend(formattedHTMLbioPic);
	$("#header .role").append(formattedHTMLlocation);
	$("#topContacts").append(formattedHTMLmobile);
	$("#topContacts").append(formattedHTMLemail);
	$("#topContacts").append(formattedHTMLgithub);
	$("#topContacts").append(formattedHTMLtwitter);
	// $("#topContacts").append(formattedHTMLblog);
	$(".welcome-msg").append(formattedHTMLwelcomeMsg);
	$("#footerContacts").append(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLtwitter);
	if (bio.skills.length > 0) {
		$("#header .layer").append(HTMLskillsStart);
		$("#skills").prepend("<hr>");
		for (skill in bio.skills) {
			formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
}

// Work Object
var work = {
	"jobs": [
		{
			"employer": "Richard Branson",
			"title": "Personal Assistant",
			"location": "Johannesburg, South Africa",
			"dates": "2002-2013",
			"description": "Arrange Mr. Branson's kite-surfing activities, meetings with The Elders, space trips, and events on Necker Island."
		},
		{
			"employer": "BBC Top Gear",
			"title": "The Stig",
			"location": "London, England",
			"dates": "2002-Current",
			"description": "Test drive a series of fast cars on the official Top Gear track."
		}		
	]
}
work.display = function(){
    for (i in work.jobs) {
      $("#workExperience .row").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location)
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates)
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);

    };	
}

// Projects Object
var projects = {
	"projects": [
		{
			"title": "EarthPain.org",
			"dates": "2014",
			"description": "An awareness website which is determined to highlight '<strong>Earth's biggest problem today</strong>' - seagulls. Organisers of the EarthPain movement believe that seagulls are <a class='image-popup' href='images/seagull-ungrateful.jpg' title='A sign erected to warn kind-hearted persons of the mal-intent of ungrateful seagulls'>ungrateful</a>, <a class='image-popup' href='images/seagull-opportunistic.jpg' title='One of many instances where seagulls are evident to be opportunistic and inconsiderate.'>opportunistic</a> with blatant <a class='image-popup' href='images/seagull-outlaw.jpg' title='Seagulls have no respect for even the simpliest laws.'>disregard</a> for the law.",
			"images": [
				"images/seagulls.jpg"
			]
		},	
		{
			"title": "MiniMaker.com",
			"dates": "2013",
			"description": "MiniMaker.com is rapidly growing startup incubator in Silicon Valley, for persons under 11 years old. Thousands apply each year, but only 20 are selected into the program.",
			"images": [
				"images/small-inventors.jpg"
			]
		},
		{
			"title": "G4G.COM",
			"dates": "2012",
			"description": "Gold4Granny produces luxury gold watches for senior citizens. Its founder and CEO, Gull Lee Bill, started G4G.COM after hiring a panel of psychology experts who found that the elderly, over 80 demographic, begin to value gold luxury products over intangible things like family time.",
			"images": [
				"images/gold4grandma.jpg"
			]
		}
	]
}

projects.display = function() {
	for (var i in projects.projects) {
		$("#projects .row").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		if (projects.projects[i].images.length > 0) {
			for (var img in projects.projects[i].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").prepend(formattedProjectImage);
			}
		}
	}
}

// Education Object
var education = {
	"schools": [
		{
			"name": "University of Korea",
			"location": "Soeul",
			"majors": ["Computer Science"],
			"degree": "BA",
			"dates": "2005-2009",
			"url": "www.korea.edu"
		},
		{
			"name": "University of Beijing",
			"location": "Beijing",
			"majors": ["Biology"],
			"degree": "Masters",
			"dates": "2009-2013",
			"url": "www.beijing.edu"
		}
	],
	"online_courses": [
		{
			"title": "Frontend NanoDegree",
			"school": "Udacity",
			"dates": "2014 - Current",
			"url": "www.udacity.com"
		},
		{
			"title": "Python Track",
			"school": "Codecademy",
			"dates": "2014 - Current",
			"url": "www.codecademy.com"
		},
		{
			"title": "Physics",
			"school": "Coursera",
			"dates": "2014 - Current",
			"url": "www.coursera.org"
		}						
	]
}

education.display = function(){
	for (var school in education.schools) {
		$("#education .row").append(HTMLschoolStart); // appended education-entry div
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last a").append(formattedSchoolDegree);
		for (var major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
	if (education.online_courses.length > 0) {
		$("#education .row").append(HTMLonlineClasses);
		for (var oc in education.online_courses) {
			$("#education .row").append(HTMLonlineClassesStart); // Appends online-class-entry div
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online_courses[oc].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online_courses[oc].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online_courses[oc].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online_courses[oc].url);
			$(".online-class-entry:last").append(formattedOnlineSchool);
			$(".online-class-entry:last").append(formattedOnlineTitle);
			$(".online-class-entry:last").append(formattedOnlineDates);
			$(".online-class-entry:last").append(formattedOnlineURL);
		}	
	}
}

// Nav Object (Student Added)
var nav = {
	"links": [
		{
			url: "#workExperience",
			alt: "My Work Experience",
			text: "Work Experience"
		},
		{
			url: "#projects",
			alt: "Projects I've worked on",
			text: "Projects"
		},
		{
			url: "#education",
			alt: "My Education",
			text: "Education"
		},
		{
			url: "#mapDiv",
			alt: "Where I've worked and lived",
			text: "Where I've Worked"
		}
	]
}

nav.display = function(){
	if (nav.links.length > 0) {
		for (link in nav.links) {
			var formattedHtmltopNavLink = HTMLtopNavLink.replace("%url%", nav.links[link].url);
			formattedHtmltopNavLink = formattedHtmltopNavLink.replace("%alt%", nav.links[link].alt);
			formattedHtmltopNavLink = formattedHtmltopNavLink.replace("%text%", nav.links[link].text);
			$("#topNav").append(formattedHtmltopNavLink);
		}
	}
}

// Object Display Functions
bio.display();
work.display();
projects.display();
education.display();
nav.display()
$("#mapDiv").append(googleMap);