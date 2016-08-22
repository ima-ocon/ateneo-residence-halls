$(document).ready(function() {
  var navWidth = $("#navigation").width();
  centerNavBar();

  $(document).on("click", ".nav_link", function() {
    var container = "";
    var link = $(this).text();

    if (link === "HOME")
      container = "gallery";
    else if (link === "ABOUT")
      container = "mission_vision";
    else if (link === "STAFF")
      container = "staff";
    else if (link === "LIFE")
      container = "student_life";
    else if (link === "FACILITIES")
      container = "facilities";
    else if (link === "APPLY")
      container = "apply";
    else if (link === "CONTACT")
      container = "contact";
    $(window).scrollTop($('#' + container + '_container').offset().top - $("#navigation_container").height());
  });

  $(window).scroll(function(){
    var height = $(window).scrollTop();


    var sections = $('section')
  , nav = $('#navigation_container')
  , nav_height = nav.outerHeight();

    var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top - 3 && cur_pos <= bottom) {
      var sectionID = $(this).attr("id");
      var sectionLink = "";
      switch(sectionID) {
        case "gallery_container":
          sectionLink = "home_link";
          break;
         case "mission_vision_container":
          sectionLink = "about_link";
          break;
         case "student_life_container":
          sectionLink ="life_link";
          break;
          case "staff_container":
          sectionLink = "staff_link";
          break;
          case "facilities_container":
          sectionLink = "facilities_link";
          break;
          case "apply_container":
          sectionLink = "apply_link";
          break;
          case "contact_container":
          sectionLink = "contact_link";
          break;
      }

      $(".nav_link").removeClass("active");
      $("#" + sectionLink).addClass("active");
    }
  });

        if (height > 10) {
          $('#navigation_container').css('background-color', '#263238');
                      if (!$("#about_link").hasClass("active")){
 $(".nav_link.active#home_link").css("background-color", "#E84E40");
                      }
                      if (!$("#home_link").hasClass("active")){
                        $("#home_link").css("background-color", "#263238");
                     }}
    else { $('#navigation_container').css('background-color', 'rgba(38,50,56, 0.2)');
          $("#home_link").css("background-color", "rgba(232,78,64,0.2)");
         }
});

  $("#scroll_button").click(function() {
    $(window).scrollTop($('#mission_vision_container').offset().top - $("#navigation_container").height() + 2);
  });

    $("#album_carousel").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    adaptiveHeight: true,
    arrows: true,
  });


var image_button = "<button class=\"album_carousel_button\">CLICK</button>";

   $(".album_carousel_container").append(image_button);

 $("#staff_carousel").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    adaptiveHeight: true,
    arrows: true,
  });

/*  addStaff("#staff_col1", "TG");
  addStaff("#staff_col2", "TD");
  addStaff("#staff_col2", "PD");
  addStaff("#staff_col2", "EP");

  var tabs = ["#RA_tab", "#office_tab", "#maintenance_tab"];
  for (var i = 0; i < tabs.length; i++) {
    for (var j = 0; j < 5; j++) {
      addStaff(tabs[i], "Name");
    }
  }
   $("#staff_col1").css("padding-top", (($("#staff_col2").height() - $("#staff_col1").height()) / 2).toString() + "px");

   $("#staff_tab_contents").css("max-height", $("#staff_col2").height());

/*  var resident_col3_margin = $("#staff_TD").height() - 30;

  $(".residents_col3").height(resident_col3_margin);

 $(".residents_col3").css("line-height", resident_col3_margin + "px");*/

  //alert($("#RA_residents").css("padding"));

/*  var student_album_text = "<div class=\"student_album_div col-sm-4\">\
    <div class=\"staff_img_container\"><img class=\"img-responsive student_album_photo\" src=\"http://ls.ateneo.edu/global//UserFiles/Image/DSC01528(1).jpg\"></div>\
    <p class=\"album_name\">Album Name</p>\
    <p class=\"album_description\">short description</p>\
    </div>";

  for (var i = 0; i < 2; i++) {
    $("#student_life_photos_row").append("<div class=\"student_album_row\">");

    for (var j = 0; j < 3; j++) {
      $("#student_life_photos_row").append(student_album_text);
    }

    $("#student_life_photos_row").append("</div>");
  }

  var load_more_button = "<button type=\"button\" id=\"load_more_button\" class=\"btn\">LOAD MORE</button>";
  $("#student_life_photos_row").append(load_more_button);*/

/*  var facilities = ["HOT AND COLD SHOWERS", "FUNCTION ROOMS", "HOT AND COLD WATER"];

  for (var i = 0; i < 3; i++) {
    var facilities_line = "<div class=\"facilities_line row\" id=\"facilities_line" + (i + 1) + "\"></div>";

    $("#facilities_container").append(facilities_line);

    for (var j = 0; j < 2; j++) {
      var facility = "<div class=\"facility col-sm-6\">\
          <img class=\" facility_icon img-responsive\" src=\"http://www.iconsdb.com/icons/preview/gray/circle-xxl.png\">\
          <div class=\"facility_text\">\
            <p class=\"facility_title\">" + facilities[i] + "</p>\
            <p class=\"facility_description\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\
          </div>\
          </p>\
        </div>";

      $("#facilities_line" + (i + 1)).append(facility);
    }*/

    //      $("#facilities_row").append("</div");
  //}

  /*$('.square').mouseover(function() {
  $(this).find('.facility_title').css("visibility","visible");
    //$(this).find('.facility_description').css("visibility","visible");
//    $(this).css("background-image", "none");
});

$('.square').mouseout(function() {
$(this).find('.facility_title').css("visibility","hidden");
    //$(this).find('.facility_description').css("visibility","hidden");
  //  $(this).css("background-image", "url(\"https://cdn0.iconfinder.com/data/icons/recreation/200/shower-512.png\")");

});*/

  function centerNavBar() {
    var windowWidth = $(window).width();
    var navMargin = (windowWidth - navWidth) / 2;
    $("#navigation").css("cssText", "margin-left: " + navMargin.toString() + "px !important;");
  }

  function addStaff(appendTo, name) {
    var staff_text = "<div class=\"indiv_staff_container\" id=\"staff_" + name + "\"><img src=\"http://cliparts.co/cliparts/Bcg/rng/Bcgrngy7i.png\" class=\"resident_img img-circle img-responsive\">\
    <div class=\"resident_text\"><p class=\"resident_name\">" + name + "</p>\
    <p class=\"resident_position\">Position</p>\
    <p class=\"resident_description\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>\
    </div></div>";

    $(appendTo).append(staff_text);
  }
});
