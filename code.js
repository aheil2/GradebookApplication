$(document).ready(function () {
    $("form").submit(createStudent);

    function createStudent (event) {
        event.preventDefault();

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var pointsEarned = $("#pointsEarned").val();
        var pointsPossible = $("#pointsPossible").val();


        var percent = ((pointsEarned / pointsPossible) * 100).toFixed(2);
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

        $("#firstNameOutput").text(student.firstN);
        $("#lastNameOutput").text(student.lastN);
        $("#percentOutput").text(`${student.percentage}%`);
        $("#gradeOutput").text(student.letterGrade);
    }
});