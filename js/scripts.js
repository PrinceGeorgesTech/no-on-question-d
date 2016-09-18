
window.onload = function() {

var addthis_share = addthis_share || {}
addthis_share = {
    passthrough : {
        twitter: {
            text: "Vote NO on Question D, which adds 2 seats to the Prince George&#39;s County Council costing taxpayers $1 million/year"
        }
    }
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "_blank");

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

$('#donate-button').click(function() {
    post('https://www.paypal.com/cgi-bin/webscr', {'cmd': '_s-xclick', 'hosted_button_id': '7JE3Z4BSC72TY'})    
});

};
