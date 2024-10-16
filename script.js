function changepassword(){

    var npw = document.getElementById("npw").value;
    var cpw = document.getElementById("cpw").value;
    var vcode = document.getElementById("vcode").value;

    var form = new FormData();

        form.append("n", npw);
        form.append("c", cpw);
        form.append("v", vcode);

        var request = new XMLHttpRequest(); // Make sure to create the XMLHttpRequest object

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {

                var response = request.responseText;

                if(response=="success"){

                    window.location.reload();

                }else{
                    document.getElementById("error1").className = "d-block mt-1 mb-1 text-danger";
                    document.getElementById("error1").innerHTML=response;
                 }       


            }
        }

        

        request.open("POST", "changepwprocess.php", true);
        request.send(form);
}