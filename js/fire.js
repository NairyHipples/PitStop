var myDataRef = new Firebase('https://pitstopdata.firebaseio.com/');

$('.butt').click(function(){
  var name = $('.name').val();
  var adress = $('.adress').val();
  var phone = $('.phone').val();
  var coordinates = $('.coordinates').val();
  var food = $('.food').val();
  var husman = $('.husman').val();
  var crap = $('.crap').val();
  var chinese = $('.chinese').val();
  var fuel = $('.fuel').val();
  var bensin = $('.bensin').val();
  var diesel = $('.diesel').val();
  var el = $('.el').val();
  var gas = $('.gas').val();
  var toalett = $('.toalett').val();
  var gratis = $('.gratis').val();

  addItem(name, adress, phone, coordinates, food, husman, crap, chinese, fuel, bensin, diesel, el, gas, toalett, gratis);
});

  myDataRef.child('stops').orderByValue().on("value", function(snapshot){
      snapshot.forEach(function(data) {

      $('.showItem').append("<li>" + data.val().name + "<ul><li>" +
      "Adress: " + data.val().adress + "</li><li>" +
      "Telefon: " + data.val().phone + "</li><li>" +
      "Koordinater: " + data.val().coordinates + "</li><li>" +
      "Har de mat?: " + data.val().food + "</li><li>" +
      "Husman?: " + data.val().husman + "</li><li>" +
      "Skräpmat?: " + data.val().crap + "</li><li>" +
      "Kinesiskt?: " + data.val().chinese + "</li><li>" +
      "Kan man tanka?: " + data.val().fuel + "</li><li>" +
      "Bensin?: " + data.val().bensin + "</li><li>" +
      "Diesel?: " + data.val().diesel + "</li><li>" +
      "El?: " + data.val().el + "</li><li>" +
      "Gas: " + data.val().gas + "</li><li>" +
      "Har de toalett?: " + data.val().toalett + "</li><li>" +
      "Är den gratis?: " + data.val().gratis + "</li>" +
      "</ul></li>")
    });
  });

function addItem(name, adress, phone, coordinates, food, husman, crap, chinese, fuel, bensin, diesel, el, gas, toalett, gratis){
  myDataRef.child('stops').push({name: name, adress: adress, phone: phone, coordinates: coordinates, food: food, husman: husman, crap: crap, chinese: chinese, fuel: fuel, bensin: bensin, diesel: diesel, el: el, gas: gas, toalett: toalett, gratis: gratis})
}
