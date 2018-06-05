/*
  This script contains define  the interactions of the elements and buttons that are part of the app.
  It defines the interaction of the next elements:

              1- Switch layer menu/accordion menu (#accordion)
              2- Slide container (#slides_container)
              3- Navigation buttons
              4- Navigation dots (.carousel-indicators)

*/


  /* 1 - Switch layer menu */

  // Define interactivity of the JQuery widget accordion
  $(function(){
    $("#accordion").accordion({
      collapsible:true,
      heightStyle: "content"
    });
  });

    // when click the hide/show option it toggles the menu
    $("#hide_menu").bind('mouseup',function(){
      if ($('#accordion').css('display') != 'none'){
        $('#accordion').css({
          display: 'none'
        })
      } else{
        $('#accordion').css({
          display:'block'
        });
      }
    });
    // make the "#hide_menu" element visible
    function show(){
      $("#hide_menu")
      .css({
        "opacity": 1
      })
      .mouseleave(function(){
        $(this).css({
          "opacity":1
        })
      })
    }

    // hide "#hide_menu" button. Show it when mouse hover on it.
    function hide(){
      $("#hide_menu")
      .css({
        opacity: 0
      })
      .mouseover(function(){
        $(this).css({
          "opacity": 1
        })
      })
      .mouseleave(function(){
        $(this).css({
          "opacity":0
        })
      })
    }

  /* 2- Slide container */

  // If there is scroll, the scroll up to the y = 0 position of the slides_containers when click the nav buttons.
    $("#navButtons").click(function() {
      $('#slides_container #slides').scrollTop(0);
    });

  // when click the hide/show option it toggles the slides_container
  $("#hide_story span").bind('mouseup',function(){
    if ($('#slides').css('display') != 'none'){
      $('#slides').css({
        display: 'none'
      }),
      $("#hide_story").css({
        align : "center",
        "margin-top" : 10,
        "margin-left": -5
      });
      heightSmall();
      widthSmall();
    } else{
      $('#slides').css({
        display:'block'
      });
      heightNormal();
      widthNormal();
    }
  });

    // A group of functions to resize the slide_container
    function heightSmall(){
      $('#slides_container').height('6%')
    };
    function widthSmall(){

      $('#slides_container')
      .width('80')
      .css({
        'padding-left' : '15px',
        'padding-top' : '0px',
        'padding-bottom' : '0px'
      })
    }
    function heightNormal(){
      $('#slides_container').height('auto')
    };
    function widthNormal(){
      $('#slides_container')
      .width('270px')
      .css({
        'padding-top': '5px',
        'padding-left': '25px'
      })
    };

    // buttons inside slide container
      $('.button').click(function() {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        el.LayerActions[$(this).attr('id')]();
      }); // end of click event



  /* 3- Navigation buttons */
  // when the user move the mouse on the navButtons it changes the opacity of the button itself
  $("#navButtons .prev")
  .mouseover(function(){
    $("#circlePrev").css({
      "background-color": "#F4F4F4", //"#EFC481",
      "opacity": 1
    })
  })
  .mouseleave(function(){
    $("#circlePrev").css({
      "background-color": "#fff", //"#EFC481",
      "opacity": 0.7
    })
  });
  $("#navButtons .next")
    .mouseover(function(){
      $("#circleNext").css({
        "background-color": "#F4F4F4", //"#EFC481",
        "opacity": 1
      })
    })
    .mouseleave(function(){
      $("#circleNext").css({
        "background-color": "#fff", //"#EFC481",
        "opacity": 0.7
      })
    });


/* 4- Navigation dots */
  //when the user click the dots, the odyssey moves to the slide/Story that corresponds to each dot

    $("li#0").click(function(){
      el.story.go(0,seq.step(0));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#1").click(function(){
      el.story.go(1,seq.step(1));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#2").click(function(){
      el.story.go(2,seq.step(2));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#3").click(function(){
      el.story.go(3,seq.step(3));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#4").click(function(){
      el.story.go(4,seq.step(4));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#5").click(function(){
      el.story.go(5,seq.step(5));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#6").click(function(){
      el.story.go(6,seq.step(6));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#7").click(function(){
      el.story.go(7,seq.step(7));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

    $("li#8").click(function(){
      el.story.go(8,seq.step(8));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
