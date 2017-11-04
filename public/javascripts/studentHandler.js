$(document).ready(function() {
    $('#createStudent').click((e)=> {
        e.preventDefault();

        const student = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            matric_no: $('#matric_no').val(),
            department: $('#department').val(),
            gender: $('gender').val(),
            date_of_birth: $('#date_of_birth').val(),
           
            level: $('#level').val(),
            phone_no: $('#phone_no').val()
        }

        axios.post('http://localhost:3000/api/student', student )

        .then( function(response){
            alert("you got this far girl");
            console.log(response)
            if(response.data.status){
                // $('#studentDiv').html('')
                alert(response.data.message)
                //redirect
                window.location.href="/Student_list";
            } else {
                //blah blah
                alert(response.data.message)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    });

    $("#editStudent").click(function(e){
        e.preventDefault();

        const student = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            matric_no: $('#matric_no').val(),
            department: $('#department').val(),
            gender: $('gender').val(),
            date_of_birth: $('#date_of_birth').val(),
            
            level: $('#level').val(),
            phone_no: $('#phone_no').val()
        }

         axios.put("'http://localhost:3000/api/student", student)
         .then((response) => {
            console.log(response)
            if(response.data.status){
                // $('#studentDiv').html('')
                alert(response.data.message)
                //redirect
                window.location.href="/Student_list";
            } else {
                //blah blah
                alert(response.data.message)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    });
 
     
});
