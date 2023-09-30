window.onload = function (e) {
  $(document).ready(function () {
    $('.jumbotron').append(`
      <div class="row row-content">
        <div class="mb-0 text-center col-12 col-sm col-md">
          <span id="jumbo-images1">
          <i id="two"><img src="kiit images/KIIT.jpg" alt="KIITlogo" class="img-fluid jumbotron-img-top"></i>
          </span>
        </div>
        <div class="col-12 col-sm col-md mb-0 text-center">
          <h1 class="jumbotron-top-heading">INTERNATIONAL CONFERENCE ON COMPUTING AND COMMUNICATION SYSTEMS FOR INDUSTRIAL AAUTOMATION AND CONTROL ComSAI</h1>
          <h1 style="font-family: 'Merriweather', serif;font-size: x-large;">15-16 March 2024</h1>
          <h2 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase">ComSIA 2024 will be organsied by KIIT Deemed to be University <br>KIIT Road, Patia, Bhubaneswar, Odisha, India</h2>
          <h3 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase"> In Association With </h3>
          <hr id="hrr">
          <h3 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase">World Leadership Academy</h3>
          <p id="demo" style="font-family: 'Merriweather', serif;font-size:1.4rem">15-16 MARCH 2024</p>
        </div>
        <div class="col-12 col-sm text-center">
          <img src="kiit images/KIIT.jpg" alt="" class="img-fluid jumbotron-img-bottom">
        </div>
      </div>
      `);

    $('.footer').append(`
      <div class="container">
                <div class="row">
                    <div class="col-4 offset-1 col-sm-2">
                        <h5> <span class="fa fa-link"></span> Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html" style="font-family: 'Merriweather', serif;font-size:1.0rem;">Home</a></li>
                            <li><a href="Registrations.html">Registrations</a></li>
                            <li><a href="spon_sorship.html">Sponsorship</a></li>
                            <li><a href="#">Accommodate</a></li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5> <span class="fa fa-map-marker"></span> Address</h5>
                        <address class="address">
                        KALINGA INSTITUTE OF TECHNOLOGY, KIIT ROAD, PATIA, BHUBANESWAR, ODISHA
                      <br>
                      <!-- <i class="fa fa-phone"> </i> &nbsp;: +9888767262<br>
          <i class="fa fa-fax"> </i> : +9888767262<br> -->
                      <i class="fa fa-envelope"> </i> : <a href="mailto:comisac.conf@gmail.com">comisac.conf@gmail.com</a>
                   </address>
                    </div>
                    <div class="col-12 col-sm-4 align-self-center">
                        <div class="text-center">
                            <h5 class="text-center">Social Media</h5>
                            <hr style="border-top: 1px dashed #327FBF">
                            <a class="btn btn-social-icon btn-facebook" href="#"><i class="fa fa-facebook fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="#"><i class="fa fa-twitter fa-lg"></i></a>
                            <a class="btn btn-social-icon bg-light" href="mailto:comisac.conf@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                        </div>
                    </div>
               </div>
               <div class="row justify-content-center">
                    <div class="col-auto">
                      <section class="sec Copyright">
                      <!-- <p class="footer_p_i_h2_a footer_p_i_a">Copyright © Intelligent Communication and Computational Research Laboratory| All Rights Reserved | <a href="https://www.linkedin.com/in/sunnam-sai-jyothi-swaroop" target="_blank" style="color: teal;cursor: pointer;">Website Developed By S Sai Jyothi Swaroop</a> <a style="color: teal;cursor: pointer;" href="https://www.linkedin.com/in/manavarthi-venkat-rao?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi%2B9dH7EqRVKLiciXidLBRg%3D%3D" target="_blank">and M Venkat Rao </a><a href="https://www.linkedin.com/in/karan-singh227" target="_blank" style="color: teal;cursor: pointer;">and Karan Singh</a>|</p>
                      -->
                </section>
                    </div>
               </div>
            </div>
      `);


    $('.navbar').append(`
      <button type="button"class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                  <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="nav navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <!-- <li class="nav-item">
                      <a class="nav-link text-white" href="##">E-adhaya</a>
                    </li> -->
                      <li class="nav-item dropdown dmenu">
                          <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            About
                          </a>
                          <div class="dropdown-menu sm-menu text-white">
                          <!-- <a class="dropdown-item text-white" href="about_iccr_lab.html">About ICCRLAB</a> -->
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-white" href="about_institute.html">About Institute</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown dmenu">
                          <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            Papers
                          </a>
                          <div class="dropdown-menu sm-menu">
                            <a class="dropdown-item text-white" href="call_for_papers.html">Call For Papers</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-white" href="paper_submission.html">Paper Submission</a>
                          </div>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="Registrations.html">Registrations</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="important_dates.html">Important Dates</a>
                      </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="publications.html">Publications</a>
                        </li>
                      <li class="nav-item dropdown dmenu">
                      <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                        Committee
                      </a>
                      <div class="dropdown-menu sm-menu">
                        <a class="dropdown-item text-white" href="steering_committee.html">Steering Committee</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="Advisory_and_technical_committee.html">Advisory And Technical committee</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white " href="conference_venue.html">Conference Venue</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="downloads.html">Downloads</a>
                    </li>
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="Gallary.html">Gallery</a>
                  </li> -->
                    <li class="nav-item">
                      <a class="nav-link text-white" href="spon_sorship.html">Sponsorship</a>
                    </li>
                    
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="#">Accommodation</a>
                  </li> -->
                    <!-- <li class="nav-item dropdown dmenu">
                  <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                    Sessions
                  </a>
                  <div class="dropdown-menu sm-menu">
                    <a class="dropdown-item text-white" href="session-1.html">Session 1</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 2</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 3</a>
            
                  </div>
                </li> -->
                    </ul>
                  </div>
      `);
  });
}



// me commented
// Set the date we're counting down to
var countDownDate = new Date("mar 15, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days " + ":" + hours + "Hours " + ": "
    + minutes + "Min" + ": " + seconds + "Sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
document.getElementById('demo').innerHTML = '15-16 MARCH 2024';