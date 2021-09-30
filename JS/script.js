// Below is a JQuery function running when the element with the id tag "9am" is clicked. It grabs the element and navigates to it's
// first sibling element named 'textarea' and grabs it's value. It then navigate to the first sibling element named 'div' and grabs the text.
// It then saves an item to the local storage the item is given the keyword name of whatever the text of the div sibling was and the
// value of the keyword is whatever the value that is in the textarea element is. 
// This function is repeated for every button within the div that has the "container" class for a total of 9 times.
$( "#9am" ).click(function() {
  content1=$(this).siblings('textarea').val();
  name1=$(this).siblings('div').text()
  localStorage.setItem(name1, content1);
});

// The two lines of code below work to grab an item from Local Storage with the same name as what the keyword assigned to it would be named
// After grabbing the value of that item it then assigns the val of the keyword to the value of the textarea element corresponding to that keyword. 
// This is repeated for every text area within the div that has the "container" class for a total of 9 times.
  set1=localStorage.getItem($("#9am").siblings('div').text());
  text1 = $("#9amtext").val(set1);
  


$( "#10am" ).click(function() {
  content2=$(this).siblings('textarea').val();
  name2=$(this).siblings('div').text()
  localStorage.setItem(name2, content2);
});
  set2=localStorage.getItem($("#10am").siblings('div').text());
  text2 = $("#10amtext").val(set2);


$( "#11am" ).click(function() {
  content3=$(this).siblings('textarea').val();
  name3=$(this).siblings('div').text()
  localStorage.setItem(name3, content3);
});
  set3=localStorage.getItem($("#11am").siblings('div').text());
  text3 = $("#11amtext").val(set3);


$( "#12pm" ).click(function() {
  content4=$(this).siblings('textarea').val();
  name4=$(this).siblings('div').text()
  localStorage.setItem(name4, content4);
});
  set4=localStorage.getItem($("#12pm").siblings('div').text());
  text4 = $("#12pmtext").val(set4);


$( "#1pm" ).click(function() {
  content5=$(this).siblings('textarea').val();
  name5=$(this).siblings('div').text()
  localStorage.setItem(name5, content5);
});
  set5=localStorage.getItem($("#1pm").siblings('div').text());
  text5 = $("#1pmtext").val(set5);


$( "#2pm" ).click(function() {
  content6=$(this).siblings('textarea').val();
  name6=$(this).siblings('div').text()
  localStorage.setItem(name6, content6);
});
  set6=localStorage.getItem($("#2pm").siblings('div').text());
  text6 = $("#2pmtext").val(set6);


$( "#3pm" ).click(function() {
  content7=$(this).siblings('textarea').val();
  name7=$(this).siblings('div').text()
  localStorage.setItem(name7, content7); 
});
  set7=localStorage.getItem($("#3pm").siblings('div').text());
  text7 = $("#3pmtext").val(set7);


$( "#4pm" ).click(function() {
  content8=$(this).siblings('textarea').val();
  name8=$(this).siblings('div').text()
  localStorage.setItem(name8, content8);
});
  set8=localStorage.getItem($("#4pm").siblings('div').text());
  text8 = $("#4pmtext").val(set8);


$( "#5pm" ).click(function() {
  content9=$(this).siblings('textarea').val();
  name9=$(this).siblings('div').text()
  localStorage.setItem(name9, content9);
});
  set9=localStorage.getItem($("#5pm").siblings('div').text());
  text9 = $("#5pmtext").val(set9);

// The code below begins with a function that runs for everytime the class "row" exists in the html code.
// It displays the current day into the header by grabbing the element with the id "currentDay" after which it assigns the text within it,
// to the current day in a specific format.
// It grabs the text of the child 'div' element within the current "row" class.
// It grabs the child 'textarea' element within the current "row" class.
// It feeds the text of the child 'div' element into the moment function and converts it to a different format.
// It grabs the current time with moment() and converts the format which it is displayed in.
// The function then begins an if statment comparing the time in the div element to the current time.
// If the current time is ahead of the time in the div element then the text area will have the class "past" added that changes its color.
// If the current time is the sameas the time in the div element then the text area will have the class "present" added that changes its color.
// If the current time is behind of the time in the div element then the text area will have the class "future" added that changes its color.

$( ".row" ).each(function() {
  display=$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
  theone=$(this).children('div').text()
  color=$(this).children('textarea')
  time=moment(theone,"ha").format("MM/DD/YYYY H:00:00");
  now=moment().format("MM/DD/YYYY H:00:00");
  if (moment(time).isBefore(moment(now))==true){
    $(color).addClass('past')
  }
  if(moment(time).isSame(moment(now))==true){
    $(color).addClass('present')
  }
  if(moment(time).isAfter(moment(now))==true){
    $(color).addClass('future')
  }
});