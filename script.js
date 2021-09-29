$( "#9am" ).click(function() {
  content1=$(this).siblings('textarea').val();
  name1=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name1, content1);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set1=localStorage.getItem($("#9am").siblings('div').text());
  text1 = $("#9amtext").val(set1);
  


$( "#10am" ).click(function() {
  content2=$(this).siblings('textarea').val();
  name2=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name2, content2);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set2=localStorage.getItem($("#10am").siblings('div').text());
  text2 = $("#10amtext").val(set2);


$( "#11am" ).click(function() {
  content3=$(this).siblings('textarea').val();
  name3=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name3, content3);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set3=localStorage.getItem($("#11am").siblings('div').text());
  text3 = $("#11amtext").val(set3);


$( "#12pm" ).click(function() {
  content4=$(this).siblings('textarea').val();
  name4=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name4, content4);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set4=localStorage.getItem($("#12pm").siblings('div').text());
  text4 = $("#12pmtext").val(set4);


$( "#1pm" ).click(function() {
  content5=$(this).siblings('textarea').val();
  name5=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name5, content5);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set5=localStorage.getItem($("#1pm").siblings('div').text());
  text5 = $("#1pmtext").val(set5);


$( "#2pm" ).click(function() {
  content6=$(this).siblings('textarea').val();
  name6=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name6, content6);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set6=localStorage.getItem($("#2pm").siblings('div').text());
  text6 = $("#2pmtext").val(set6);


$( "#3pm" ).click(function() {
  content7=$(this).siblings('textarea').val();
  name7=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name7, content7);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set7=localStorage.getItem($("3pm").siblings('div').text());
  text7 = $("#3pmtext").val(set7);


$( "#4pm" ).click(function() {
  content8=$(this).siblings('textarea').val();
  name8=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name8, content8);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set8=localStorage.getItem($("#4pm").siblings('div').text());
  text8 = $("#4pmtext").val(set8);


$( "#5pm" ).click(function() {
  content9=$(this).siblings('textarea').val();
  name9=$(this).siblings('div').text()
  // content=$( "#9amtext").val();
  // text2 = $("#9amtext").val();
  localStorage.setItem(name9, content9);  // Creates a item named 'nameOfItem' and stores a value of 'value'
    
  });
  set9=localStorage.getItem($("#5pm").siblings('div').text());
  text9 = $("#5pmtext").val(set9);


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