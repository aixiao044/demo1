app.controller('MailCtrl', function($scope) {
    $scope.load = function() {
      
        function showPic(whichpic) {
            if (!document.getElementById("placeholder")) return false;
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
            if (placeholder.nodeName != "IMG") return false;
            placeholder.setAttribute("src", source);
            if (document.getElementById("description")) {
                var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
                var description = document.getElementById("description");

                if (description.firstChild.nodeType == 3) {
                    description.firstChild.nodeValue = text;
                }
            }
            return true;
        }

        function imageGallery() {
            if (!document.getElementsByTagName) return false;
            if (!document.getElementById) return false;
            if (!document.getElementById("imagegallery")) return false;
            var gallery = document.getElementById("imagegallery");
            var links = gallery.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++) {
                links[i].onmouseover = function() {
                    return showPic(this) ? false : true;
                }
                links[i].onclick = function() {
                    return showPic(this) ? false : true;
                }
            }
        }


        /**
         * [popUp description]弹出窗口
         * @param  {[type]} winURL [description]
         * @return {[type]}        [description]
         */
        function popUp(winURL) {

            window.open(winURL, "popup", "width=400,height=400")
        }


        function baidu() {
            if (!document.getElementsByTagName) return false;
            var lnks = document.getElementsByClassName("baidu");
            for (var i = 0; i < lnks.length; i++) {
                lnks[i].onclick = function() {
                    popUp(this.getAttribute("href"));
                    return false;
                }
            }
        }

        imageGallery();
        baidu();
    }
});
