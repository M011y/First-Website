
//Javascript to get and display my Instagram feed
$(document).ready(function (){
    var feed = new Instafeed({
        get: 'user',
        userId: 4761411236,
        accessToken: '4761411236.58b5958.dd95e8da0e044e70869d432f83962c49',
        resolution: 'low_resolution'

    });
    feed.run();
})