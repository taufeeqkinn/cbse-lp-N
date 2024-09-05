const initiliazeForm = () => {
    document.querySelector("#Landing-query-form #Landing-parentName").value = "";
    document.querySelector("#Landing-query-form #Landing-childName").value = "";
    document.querySelector("#Landing-query-form #Landing-admissionGrade").value = "";
    // document.querySelector("#Landing-query-form #admissionType").value = "";
    // document.querySelector("#Landing-query-form #curriculum").value = "";
    document.querySelector("#Landing-query-form #Landing-mobileNumber").value = "";
    document.querySelector("#Landing-query-form #Landing-email").value = "";
    document.querySelector("#Landing-query-form #Landing-postYourQuery").value = "";
}
document.querySelector("#Landing-query-form #Landing-query-submit-btn").addEventListener("click",() => {
    const formState = {
        Landing-parentName : document.querySelector("#Landing-query-form #Landing-parentName").value,
        Landing-childName : document.querySelector("#Landing-query-form #Landing-childName").value,
        Landing-admissionGrade : document.querySelector("#Landing-query-form #Landing-admissionGrade").value,
        // admissionType : document.querySelector("#Landing-query-form #admissionType").value,
        // curriculum : document.querySelector("#Landing-query-form #curriculum").value,
        Landing-mobileNumber : document.querySelector("#Landing-query-form #Landing-mobileNumber").value,
        Landing-email : document.querySelector("#Landing-query-form #Landing-email").value,
        Landing-postYourQuery : document.querySelector("#Landing-query-form #Landing-postYourQuery").value,
    }; 
    const {Landing-parentName,Landing-childName,Landing-admissionGrade,Landing-mobileNumber,Landing-email,Landing-postYourQuery} = formState;
    function ValidateLanding-email(value) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (value.match(validRegex)) return true;
        else  return false;
    }
    if(Landing-parentName&&Landing-childName&&Landing-admissionGrade&&Landing-mobileNumber&&ValidateLanding-email(Landing-email)&&Landing-postYourQuery) {
    const data = [
            { "Attribute": "FirstName", "Value": Landing-parentName },
            { "Attribute": "mx_Child_Name", "Value": Landing-childName },
            // { "Attribute": "mx_Admission_Type", "Value": admissionType },
            // { "Attribute": "mx_Curriculum", "Value": curriculum },
            { "Attribute": "mx_Grade", "Value": Landing-admissionGrade },
            { "Attribute": "Phone", "Value": Landing-mobileNumber },
            { "Attribute": "Landing-emailAddress", "Value": Landing-email },
            { "Attribute": "Notes", "Value": Landing-postYourQuery },
            { "Attribute": "Source", "Value": "Website (Organic)" },
            { "Attribute": "mx_School_Name", "Value": "PIS Bachupally" },
            { "Attribute": "mx_UTM_Network", "Value": "" },
        ];
        fetch(' https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$rd49eb331ece0c79c22fed2552be222cd&secretKey=336ba572eb585209d713c4fb3adfd615afa7bf32', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                if (data.Status == 'Success') {
                    var msg = (data.Status);
                    setTimeout(() => {
                        Toastify({
                            text: `Your Booking Slot Save ${msg}. Contact you Soon.`,
                            duration: 5000,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "center", // `left`, `center` or `right`
                            stopOnFocus: true, // Prevents dismissing of toast on hover
                            style: {
                                // background: "linear-gradient(to right, #00b09b, #96c93d)",
                                background:"#00b09b",
                            },
                            onClick: function(){} // Callback after click
                        }).showToast();
                    }, 300)
                    initiliazeForm();
                }
                if (data.Status == 'Error') {
                    var msg = (data.ExceptionMessage);
                    setTimeout(() => {
                        Toastify({
                            text: msg,
                            duration: 5000,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "center", // `left`, `center` or `right`
                            stopOnFocus: true, // Prevents dismissing of toast on hover
                            style: {
                                // background: "linear-gradient(to right, #00b09b, #96c93d)",
                                background:"#e74c3c",
                            },
                            onClick: function(){} // Callback after click
                        }).showToast();
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
})