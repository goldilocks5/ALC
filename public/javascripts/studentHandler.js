$(document).ready(function() {
    $('#createStudent').click((e)=> {
        e.preventDefault();

        const student = {
            name: $('#first_name').val(),
            faculty: $('#faculty').val(),
            matric_no: $('#matric_no').val(),
            department: $('#department').val(),
            gender: $('gender').val(),
            date_of_birth: $('#date_of_birth').val(),
           
            level: $('#level').val(),
            phone_no: $('#phone_no').val()
        }
        alert("you got this far girl");

        axios.post('http://localhost:3000/api/student', student )

        .then( function(response){
            
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

        const edit_student = {
            name: $('#edit_name').val(),
            faculty: $('#edit_faculty').val(),
            matric_no: $('#edit_matric_no').val(),
            department: $('#edit_department').val(),
            gender: $('edit_gender').val(),
            date_of_birth: $('#edit_date_of_birth').val(),
            
            level: $('#edit_level').val(),
            phone_no: $('#edi_phone_no').val()
        }

         axios.put("'http://localhost:3000/api/student", edit_student)
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
