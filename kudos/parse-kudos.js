/* 
    TODO:
        - use Parse' AnonymousUser instead of local storage
            : more reliable
            : less dependency
        - concat/minify js
*/ 

$(function(){
    Parse.initialize("YYCsBd7uZRCSr0pqtS8VUU8F526mjOsYFCcLe7GD", "YUA1WJpeA0XxnS4YbAmCtJuuSu7FPjNLXZrIc5He");
    
    var key = document.location.pathname;
    $("figure.kudoable").kudoable();

    var Kudos = Parse.Object.extend("Kudos");
    var query = new Parse.Query(Kudos);

    var kudo;

    query.equalTo("url", key);
    query.first({
        success: function (result) {
            kudo = result;
            if (kudo == null) 
            {
                kudo = new Kudos();
                kudo.set("url", key);
                kudo.set("score", 0);
                kudo.save();                
            }
            $(".num").html(kudo.get("score"));
        }, 
        error: function (error) {
            kudo = new Kudos();
            kudo.set("url", key);
            kudo.set("score", 0);
            kudo.save();
        }
    });

    if ($.jStorage.get(key))
    {
        $("figure.kudoable").removeClass("animate").addClass("complete");
    }

    $("figure.kudo").bind("kudo:added", function(e)
    {
        kudo.increment("score");
        $.jStorage.set(key, true);
        kudo.save(null, {success: function(k) {
            $(".num").html(k.get("score"));
        }});
    });

    $("figure.kudo").bind("kudo:removed", function(e)
    {
        kudo.increment("score", -1);
        $.jStorage.set(key, false);
        kudo.save(null, {success: function(k) {
            $(".num").html(k.get("score"));
        }});
    });

});
