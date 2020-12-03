$(document).ready(function () {
    $("form").submit(createStudent);

    var gradeBook = [];

    $("#sortByName").click(function(){
        gradeBook.sort(sortByName);
        var output = ""
        for (var x of gradeBook) {
            output += (`${x.lastN}, ${x.firstN} Percent: ${x.percentage}% Grade: ${x.letterGrade} <br>`);
        }
        $("#gradeBookOutput").html(output);
    });

    $("#sortByPercent").click(function(){
        gradeBook.sort(sortByPercent);
        var output = ""
        for (var x of gradeBook) {
            output += (`${x.lastN}, ${x.firstN} Percent: ${x.percentage.toFixed(2)}% Grade: ${x.letterGrade} <br>`);
        }
        $("#gradeBookOutput").html(output);
    });

    function createStudent (event) {
        event.preventDefault();

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var pointsEarned = $("#pointsEarned").val();
        var pointsPossible = $("#pointsPossible").val();

        var percent = ((pointsEarned / pointsPossible) * 100);
        var grade;

        if (percent >= 90) {
            grade = "A";
        }
        else if (percent >= 80) {
            grade = "B";
        }
        else if (percent >= 70) {
            grade = "C";
        }
        else if (percent >= 60) {
            grade = "D";
        }
        else {
            grade = "F";
        }

        var student = {};

        student.firstN = firstName;
        student.lastN = lastName;
        student.percentage = percent;
        student.letterGrade = grade;

        //add student(object) to gradebook
        gradeBook.push(student);
        var output = ""
        for (var x of gradeBook) {
            output += (`${x.lastN}, ${x.firstN} Percent: ${x.percentage}% Grade: ${x.letterGrade} <br>`);
        }
        $("#gradeBookOutput").html(output);
        //console.log(gradeBook);
    }

    function sortByName(a,b) {
        if (a.lastN < b.lastN) {
            return -1;
        }
        else if (a.lastN > b.lastN) {
            return 1;
        }
        else {
            return 0;
        }
        //console.log(gradeBook);
    }

    function sortByPercent(a,b) {
        if (a.percentage > b.percentage) {
            return -1;
        }
        else if (a.percentage < b.percentage) {
            return 1;
        }
        else {
            return 0;
        }
        //console.log(gradeBook);
    }

});