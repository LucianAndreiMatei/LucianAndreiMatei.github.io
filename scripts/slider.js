// jQuery(document).ready(function ($) {

//   var jssor_1_options = {
//     $AutoPlay: 1,
//     $ArrowNavigatorOptions: {
//       $Class: $JssorArrowNavigator$
//     },
//     $BulletNavigatorOptions: {
//       $Class: $JssorBulletNavigator$
//     }
//   };

//   var jssor_2_options = {
//     $AutoPlay: 1,
//     $ArrowNavigatorOptions: {
//       $Class: $JssorArrowNavigator$
//     },
//     $BulletNavigatorOptions: {
//       $Class: $JssorBulletNavigator$
//     }
//   };

//   var jssor_3_options = {
//     $AutoPlay: 1,
//     $ArrowNavigatorOptions: {
//       $Class: $JssorArrowNavigator$
//     },
//     $BulletNavigatorOptions: {
//       $Class: $JssorBulletNavigator$
//     }
//   };

//   var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
//   var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
//   var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

//   /*#region responsive code begin*/

//   var MAX_WIDTH = 1980;

//   function ScaleSlider(maxWidth) {

//     //slider 1
//     var containerElement = jssor_1_slider.$Elmt.parentNode;
//     var containerWidth = containerElement.clientWidth;

//     if (containerWidth) {

//       var expectedWidth = Math.min(maxWidth || containerWidth, containerWidth);

//       jssor_1_slider.$ScaleWidth(expectedWidth);
//     }
//     else {
//       window.setTimeout(ScaleSlider, 30);
//     }

//     //slider 2
//     var containerElement = jssor_2_slider.$Elmt.parentNode;
//     var containerWidth = containerElement.clientWidth;

//     if (containerWidth) {

//       var expectedWidth = Math.min(maxWidth || containerWidth, containerWidth);

//       jssor_2_slider.$ScaleWidth(expectedWidth);
//     }
//     else {
//       window.setTimeout(ScaleSlider, 30);
//     }

//     //slider 3
//     var containerElement = jssor_3_slider.$Elmt.parentNode;
//     var containerWidth = containerElement.clientWidth;

//     if (containerWidth) {

//       var expectedWidth = Math.min(maxWidth || containerWidth, containerWidth);

//       jssor_3_slider.$ScaleWidth(expectedWidth);
//     }
//     else {
//       window.setTimeout(ScaleSlider, 30);
//     }
//   }

//   ScaleSlider(MAX_WIDTH);

//   window.onload = function (event) {
//     ScaleSlider(window.innerWidth);
//   };
//   window.onresize = function (event) {
//     ScaleSlider(window.innerWidth);
//   };

//   $(window).bind("orientationchange", ScaleSlider($(window).width()));
//   /*#endregion responsive code end*/
// });