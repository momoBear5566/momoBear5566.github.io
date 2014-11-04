

var enumIds =
          {
              About: {
                  id: "About",
                  Animate: "",
                  Target: ""
              },


              Skills: {
                  id: "Skills",
                  Animate: "fadeInRight",
                  Target: ".skillTable"
              },

              Projects: {
                  id: "Projects",
                  Animate: "fadeIn",
                  Target: ".historyEach .rightPannel"
              },


              interest: {
                  id: "interest",
                  Animate: "",
                  Target: ""
              }

          };


var Animate = {


    AbountMeEvent: function ()
    {

        $("#AbountMe").hover(function () {
             
            $(this).find(".Name").addClass("animated bounceInRight");
            $(this).find(".Position").addClass("animated bounceInRight");

             $("#AbountMe").unbind("hover");

        });
    }

    




};


var scrollEvent = {


        init: function () {
            this.footerEvent();
        },


        footerEvent: function () {

            $(window).scroll(function () {

                var pageHeight = $(document).height();
                var screenHeight = $(window).height();
                var userHeight = $(window).scrollTop();



                if (userHeight + 300 > (pageHeight - screenHeight)) {                   
                   

                }
            });



        }








    }






$(function () {


    //$("#AbountMe").addClass("animated fadeInDown");


    Animate.AbountMeEvent();



    $('.schaduleYearWrapper').popover('show');
    $('.popoverTrigger').popover('show');

    $('body').on('activate.bs.scrollspy', function () {

        var currentItem = $(".nav li.active > a");
        var currentId = currentItem.attr("href").replace("#", "");

        switch (currentId) {
            case enumIds.Projects.id:
                setProjectAnimate();
                break;

            case enumIds.Skills.id:
                setSkillsAnimate();
                break;

            default:
                resetStyles(enumIds.About);
                break;

        }




        if (currentId == enumIds.Projects) {

        }
        else {

        }


        console.log(currentId);




    })

    function setSkillsAnimate() {
        resetStyles(enumIds.Skills.id);
        var thisEnum = enumIds.Skills;
        $(thisEnum.Target).css("opacity", "0");


        var time = 50;
        $(thisEnum.Target).each(function () {
            var innerItem = $(this);
            setTimeout(function () {
                innerItem.addClass("animated").addClass(thisEnum.Animate)
            }, time);

            time = time + 150;
        });
    }


    function setProjectAnimate() {
        var thisEnum = enumIds.Projects;
        resetStyles(enumIds.Projects.id);
        $(thisEnum.Target).css("opacity", "0");
        var time = 50;
        $(thisEnum.Target).each(function () {
            var innerItem = $(this);
            setTimeout(function () {
                innerItem.addClass("animated ").addClass(thisEnum.Animate)
            }, time);

            time = time + 100;
        });
    }


    function resetStyles(currentId) {
        if (currentId != enumIds.About.id) {

        }

        if (currentId != enumIds.interest.id) {

        }

        if (currentId != enumIds.Projects.id) {
            var thisEnum = enumIds.Projects;
            $(thisEnum.Target).css("opacity", "1");
            //$(thisEnum.Target).removeClass("animated").removeClass(thisEnum.Animate);
        }

        if (currentId != enumIds.Skills.id) {
            var thisEnum = enumIds.Skills;
            $(thisEnum.Target).css("opacity", "1");
            //$(thisEnum.Target).removeClass("animated").removeClass(thisEnum.Animate);
        }

        if (currentId != enumIds) {

        }


    }



    $(".scroll-area").scrollspy({ target: "body" })


    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var currentHeight = $(window).scrollTop() + windowHeight;
        var bodyHeight = $(document).height();
        var offsetHeight = 150;

        var minus = currentHeight - windowHeight;


        //if (minus > offsetHeight) {
        //    $(".fixedNavigation").removeClass("animated fadeOutUp");
        //    $(".fixedNavigation").addClass("animated fadeInDown");
        //}
        //else {

        //    if ($(".fixedNavigation").css("opacity") != "0") {
        //        $(".fixedNavigation").removeClass("animated fadeInDown");
        //        $(".fixedNavigation").addClass("animated fadeOutUp");
        //    }
        //}
    });



});