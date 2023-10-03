function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'eb3603dd17ea45ec956c07ffbf84706f'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog({width: 300, height: 200});
        })
        .fail(function () {
            alert('error');
        });
}
function onAPISearchClick() {
    document.getElementById("searchResults").innerHTML = apiSearch();
    document.getElementById("searchResults").style.visibility = "visible";
    //apiSearch()

}
function onTimeButtonClick() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    if (minutes < 10) {
        var currentTime = "The current time is: " + hours + ":" + '0' + minutes;
    } else {
        var currentTime = "The current time is: " + hours + ":" + minutes;
    }
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("time").style.visibility = "visible";
    $('#time').html(currentTime);
    $('#time').dialog();
}

var imgIndex = 1;

function changeBackGroundImage() {
    let ele = document.getElementById("background_image");

    if (imgIndex % 2 == 1) {
        ele.style.backgroundImage = "url('Fall_leaves.jpg')";
    } else {
        ele.style.backgroundImage = "url('fall_time.jpg')";
    }
    imgIndex = imgIndex + 1;
    //ele.style.backgroundImage = "url('Fall_leaves.jpg')";

    // Code that works for changing the background image a single time
    //let ele = document.getElementById("background_image");
    //ele.style.backgroundImage = "url('Fall_leaves.jpg')";
}
