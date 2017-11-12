$(document).ready(function() {
    $('#createStudent').click((e)=> {
        e.preventDefault();

        const student = {
            name: $('#name').val(),
            faculty: $('#faculty').val(),
            matric_no: $('#matric_no').val(),
            department: $('#department').val(),
            gender: $('#gender').val(),
            date_of_birth: $('#date_of_birth').val(),          
            level: $('#level').val(),
            phone_no: $('#phone_no').val()
        }

        axios.post('/api/student', student )

        .then( function(response){
            alert('you got here');
            console.log(response)
            if(response.data.status){
                // $('#studentDiv').html('')
                alert(response.data.message)
                //redirect
                window.location.href="/api/Student_list";
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

        const student_id = $('#student_id').val()
        
        const student = {
            name: $('#edit_name').val(),
            faculty: $('#edit_faculty').val(),
            matric_no: $('#edit_matric_no').val(),
            department: $('#edit_department').val(),
            gender: $('#edit_gender').val(),
            date_of_birth: $('#edit_date_of_birth').val(),
            level: $('#edit_level').val(),
            phone_no: $('#edit_phone_no').val()
        }

         axios.put(`/api/student/${student_id}`, student)
         .then((response) => {
            if(response.data.status){
               
                alert(response.data.message)

                // clear input fields here 
                $('#edit_name').val('');
                $('#edit_faculty').val('');
                $('#edit_matric_no').val('');
                $('#edit_department').val('');
                $('#edit_gender').val('');
                $('#edit_date_of_birth').val('');
                $('#edit_level').val('');
                $('#edit_phone_no').val('');

            } else {
                alert(response.data.message)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    });
 
    $("#deleteButton").click(function(e){
         e.preventDefault();
         console.log('object');

        const student_id = $('#student_id').val();
        axios.delete(`/api/student/${student_id}`)
            .then((response) => {
                if(response.data.status){
                    alert(response.data.message);
                }
                else
                    alert(response.data.message);
            })
            .catch((err) => {
                alert('An error occured processing your request');
            })     
    })
});

// const promise = new Promise((resolve, reject) => {
//    // done something
//    if(true)
//     resolve(1)
//     else{
//         reject('error mesga')
//     }
// })

// promise.then(() => {
// //sndsd
// })
// .catch((err) => {
//     // dfk
// })