//Global Variables//
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var total = 6;
var secondsLeft = 60;
var intervalId;
var timerRunning = false;

$(function() {



//Starts on clicking the button initially displayed//
$("#triviaStart").on("click", function() {

    $("#triviaStart").hide();    
    //makes it so the results function is exectued 30 seconds after the intial button is clicked
    //setTimeout(results, 1000 * 30);//

    $("#timer").append("<h3>Time Remaining: " + secondsLeft + "</h3");

    //creates a new h2 element which will be unique to this question//
    var question1 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question1).attr('id', 'question1', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question1).text("Roughly, what was the percentage of public support for the United States of America entering World War II before Pearl Harbor, and what was it afterwards?");

   //appending the question to the #main-section div//
    $("#main-section").append(question1);

    //Now the form for the buttons is created//
    var form1 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form1).attr('id', 'form1', 'class', 'form');

    //adding the buttons to the form//
    $(form1).append('<input type="radio" name="public-support" value="wrong" /> 60% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="wrong" /> 80% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="right" /> 20% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="wrong" /> 20% before, 80% afterwards <br />');

    //appending the form to the <h2> div//
    $(form1).insertAfter(question1);

    //this will repeat for... quite a bit. There HAS to be someway of making this DRY. I'll ruminate on it after I get something to turn in.//


//----------------------------------------------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question2 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question2).attr('id', 'question2', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question2).text("How old were the ships that were bombed in Pearl Harbor? How long since they had been commissioned?");

   //appending the question to the #main-section div//
    $("#main-section").append(question2);

    //adding the buttons to the form//
    var answers2 = '<input type="radio" name="fleet-age" value="wrong" /> 2 years or newer' +
                    '<input type="radio" name="fleet-age" value="wrong" /> 2 - 5 years old' +
                    '<input type="radio" name="fleet-age" value="wrong" /> 5 - 20 years old' +
                    '<input type="radio" name="fleet-age" value="right" /> 20 years or older <br />';

    //appending the form to the <h2> div//
    $(answers2).insertAfter(question2);

    //-----------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question3 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question3).attr('id', 'question3', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question3).text("Which leading power had been vying to be the prime authority of a newly-envisioned world government 25 years before the culmination of World War II?");

   //appending the question to the #main-section div//
    $("#main-section").append(question3);

    //adding the buttons to the form//
    var answers3 =  '<input type="radio" name="world-power" value="wrong" /> Japan' +
                    '<input type="radio" name="world-power" value="wrong" /> Russia' +
                    '<input type="radio" name="world-power" value="wrong" /> Germany' +
                    '<input type="radio" name="world-power" value="right" /> U.S.A. <br />';

    //appending the form to the <h2> div//
    $(answers3).insertAfter(question3);

    //--------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question4 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question4).attr('id', 'question4', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question4).text("How often did the major actors of the Axis fight together with each other?");

   //appending the question to the #main-section div//
    $("#main-section").append(question4);

    //adding the buttons to the form//
    var answers4 =  '<input type="radio" name="axis-in-name" value="right" /> Never' +
                    '<input type="radio" name="axis-in-name" value="wrong" /> Rarely' +
                    '<input type="radio" name="axis-in-name" value="wrong" /> Often' +
                    '<input type="radio" name="axis-in-name" value="wrong" /> All of the time <br />';

    //appending the form to the <h2> div//
    $(answers4).insertAfter(question4);

    //------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question5 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question5).attr('id', 'question5', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question5).text("Which leader of the primary powers in World War II committed the most numerous human atrocities?");

   //appending the question to the #main-section div//
    $("#main-section").append(question5);

    //adding the buttons to the form//
    var answers5 =  '<input type="radio" name="leader" value="wrong" /> Franklin D. Roosevelt' +
                    '<input type="radio" name="leader" value="right" /> Joseph Stalin' +
                    '<input type="radio" name="leader" value="wrong" /> Winston Churchill' +
                    '<input type="radio" name="leader" value="wrong" /> Hideki Tojo' +
                    '<input type="radio" name="leader" value="wrong" /> Adolf Hitler' +
                    '<input type="radio" name="leader" value="wrong" /> Benito Mussolini <br />';

    //appending the form to the <h2> div//
    $(answers5).insertAfter(question5);

    //----------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question6 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question6).attr('id', 'question6', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question6).text("Which major denomination created and spread the influence of the United Nations during and after World War II?");

   //appending the question to the #main-section div//
    $("#main-section").append(question6);

    //adding the buttons to the form//
    var answers6 =  '<input type="radio" name="religious-influence value="right" /> Non-Denominational Protestantism' +
                    '<input type="radio" name="religious-influence value="wrong" /> Baptism' +
                    '<input type="radio" name="religious-influence value="wrong" /> Pentecostalism' +
                    '<input type="radio" name="religious-influence value="wrong" /> Methodism' +
                    '<input type="radio" name="religious-influence value="wrong" /> Catholicism <br />';

    //appending the form to the <h2> div//
    $(answers6).insertAfter(question6);

    //-----------------------------------------------------------------------------------------------------------------//

    //Finally done! definitely needs to be DRY though.//

    //Creating the "Submit button"
    //var submitForm = $("<form></form>");
    var finalSubmitBtn = $('<input type="submit" value="How did you do?" id="submitBtn"  />');
    $("#main-section").append(finalSubmitBtn);

    //Conditional statements//

    console.log("Is this working?");

    timerStart();
});

//----------------------------------------------------------------------------------//

//On-click Function for the Submit button//
$(document).on("click", "#submitBtn",  function (finish) {

    finish.preventDefault(); 
    
    $("#main-section").empty();
    
    timerStop();
    
    console.log(this);

    //if no button is selected for a field, the unanswered score increases by one.
    //"this" here ought to be referencing whichever form was chosen.
    //Was entirely unable to properly grab the values here?
   // if (($(".form")['public-support']).val() //|| (!$(".form")['fleet-age']).val() || (!$(".form")['world-power']).val() ||
        // (!$(".form")['axis-in-name']).val() || (!$(".form")['leader']).val() || (!$(".form")['religious-influence']).val()) {

    console.log("working?")
    console.log($('input[value="right"]').prop("checked", true))
        //increments unanswered variable by 1; not displaying here yet!//
        // unanswered++;
    

    //if a button with the value of "wrong" is checked on submission, the incorrect score increases by one.//
    if ($('input[value="wrong"]').prop("checked", true)) {
        incorrect++;
    }

    //if a button with the value of "right" is checked on submission, correct score increases by one.
    else if ($('input[value="right"]').prop("checked", true)) {
        correct++;
    }

    //Otherwise, calculates the number of unanswered questions//
    else {
        unanswered = total - correct - incorrect;
    }

    //all of the above values are to be displayed on the Web browser now.

    //We create a new H3 div telling the person they're done.//
    var finalDiv = $("<h3>");

    //give this div a unique ID//
    finalDiv.attr('id', 'finalDiv')

    //Add text to the H3 about how they're done taking the quiz.//
    $(finalDiv).text("Now, let's see how well you know your World War II trivia...");

    //Appends this to the #main-section div//
    $("#main-section").append(finalDiv);

    //create a variable holding the final results//
    var finalHTML = 
        "<p>Correct Answers: " + correct + "</p>" +
        "<p>Incorrect Answers: " + incorrect + "</p>" +
        "<p>Unanswered: " + unanswered + "</p>";
    
    //Append the results to the #finalDiv//
    $(finalDiv).append(finalHTML);

});

//Function to start timer//
function timerStart() {
    //if timer isn't running, invokes the timerDecrease function every second and sets the running value to true//
	if (!timerRunning) {
		intervalId = setInterval(timerDecrease, 1000);
		running = true;
	}
}
//Function to decrease timer//
//decrease secondsLeft by 1, and inserts it into the #timer section of HTML//
function timerDecrease() {
    secondsLeft--;
    $("#timer").html("<h3>Time remaining: " + secondsLeft + "</h3>");

    //Unable to invoke the onclick event when timer reaches 0, keeps on saying finish is undefined//
    if (secondsLeft === 0) {
        stop();
        //finish();//
    }
    
}
//Function to stop timer//
function timerStop() {
	running = false;
	clearInterval(intervalId);
	$("#timer").empty()
}

});