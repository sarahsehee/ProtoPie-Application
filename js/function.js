
var jumbotron = {
	"lead" : "Application",
	"name" : "Sarah Sehee Lim",
	"coverletter" : "A product designer working at ProtoPie",
	"links" : [
		{
			"text" : "Check out resume",
			"link" : "resume.html"
		}
	]
};


var projects = {
	"card" : [
		{	
			"index" : "Project 1",
			"link" : "timer.html",
			"title" : "Improving Timer Experience",
			"description" : ["User Experience"," User Interface"," Product Management"]
		},
		{
			"index" : "Project 2",
			"link" : "curation.html",
			"title" : "Designing Interactive Survey",
			"description" : ["User Interface"," Interaction Design"," Prototyping"," User Testing"]
		},
		{
			"index" : "Project 3",
			"link" : "samsung.html",
			"title" : "Thinking Beyond Mobile Screen",
			"description" : ["User Experience, Interaction Design"]
		}
	]
};


var footer = {
	"label" : "Get In Touch",
	"contacts" : [
		{
			"icon" : "%",
			"text" : "+82 10 9522 7837",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee.lim@gmail.com",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "Seoul, South Korea",
			"link" : "%"
		}
	],
	"message" : "made with love and perfection and protoPie"
}

var lead = jumbotronLead.replace("%data%",jumbotron.lead);
var name = jumbotronName.replace("%data%",jumbotron.name);
var coverletter = jumbotronLetter.replace("%data%",jumbotron.coverletter);
$("#name").append(jumbotronContainer);
$('.jumbo').append(lead,name,coverletter,jumbotronList);



function displayButton(){
	for (i in jumbotron.links){
		var buttonLink = jumbotronButton.replace("%data%",jumbotron.links[i].link);
		var buttonText = jumbotronText.replace("%data%",jumbotron.links[i].text);
		$('.nav:last').append(buttonLink);
		$('.nav-link:last').append(buttonText);
	}
};

displayButton();




project.display = function(){
	for (item in projects.card){
	//concat Project and title
		var projectLink = projectCard.replace("%data%",projects.card[item].link);
		$(".card-deck").append(projectLink);
		var projectIndex = projectCardIndex.replace("%data%", projects.card[item].index);
		var projectTitle = projectCardTitle.replace("%data%", projects.card[item].title);
		var projectDescription = projectCardDes.replace("%data%", projects.card[item].description);
		$(".card-body:last").append(projectIndex,projectTitle,projectDescription);
	}
};
project.display();






