$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });
    $(document).ready(function () {$('.a_d_b').click(function (e) { $('#about_id').toggle('show');});
$('.p_d_d').click(function (e) { $('#papers_id').toggle('show');});
$('.c_d_b').click(function (e) { $('#committee_id').toggle('show');});
});
function openSidebar(){document.getElementById('sidebar').style.marginLeft = "250px";
    document.getElementById('logo_header').style.marginLeft = "250px";
    document.getElementById('navigation_bar').style.marginLeft = "250px";
    document.getElementById('inside_content').style.marginLeft = "250px";
    document.getElementById('footer_main').style.marginLeft = "250px";
    document.getElementById('content_wrapper').style.position = 'fixed';
}
function closeSideBar() {
    document.getElementById('sidebar').style.marginLeft = "-250px";
    document.getElementById('logo_header').style.marginLeft = "0";
    document.getElementById('navigation_bar').style.marginLeft = "0px";
    document.getElementById('inside_content').style.marginLeft = "0px";
    document.getElementById('footer_main').style.marginLeft = "0px";
    document.getElementById('content_wrapper').style.position = 'static';
}

var images = ['red','blue','green','grey','yellow','teal']
const firebaseConfig = {
    apiKey: "AIzaSyCG_Ht66keBaN4ttuKrANQlKLksSnV6Lcg",
    authDomain: "testing-c284c.firebaseapp.com",
    databaseURL: "https://testing-c284c.firebaseio.com",
    projectId: "testing-c284c",
    storageBucket: "testing-c284c.appspot.com",
    messagingSenderId: "846626966526",
    appId: "1:846626966526:web:739cb20c4f889a8c480eaf"
  };
  
  
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
  
    var ref = firebase.database().ref('docs');
    ref.on("value", insertDataToDom);
  
    function insertDataToDom(data) {
      var valueOfLink = data.val();
      var keys = Object.keys(valueOfLink);
      var i = 0;
      for (let index = keys.length - 1; index >= 0 && i <= 2; index--) {
        var key = keys[index];
        console.log(i)
        console.log(valueOfLink[key].link);
        var s = '<a' +' '+  'href=' +'"' + valueOfLink[key].link +'"' + ' '  + 'target="_blank">' + "download link" +'</a>';
        $(document).ready(function () {
          $('#downloads_marquee').append('<p class="list-group-item active">' +s + '</p>');
        });
        i += 1;
      }
      
      }