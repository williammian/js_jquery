function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var total = floatToMoneyText(value);
	$("#total").text(total);
}

function calculateTotalProducts() {
	var items = $(".item");

	var totalProducts = 0;

	for(var pos = 0; pos < items.length; pos++) {
		var priceElements = items[pos];
		var priceText = $(priceElements).find(".price").text();
		var price = moneyTextToFloat(priceText);

		var qtyElements = items[pos];
		var qtyText = $(qtyElements).find(".quantity").val();
		var quantity = moneyTextToFloat(qtyText);

		var totalItem = quantity * price;

		totalProducts += totalItem;

	}

	return totalProducts;
}

function calculateTotalProductsFuncional() {
	var produtos = $(".item");
	var total = 0;
	
	$(produtos).each(function(pos, produto) {
		var $produto = $(produto);
		var quantity = moneyTextToFloat($produto.find(".quantity").val());
		var price = moneyTextToFloat($produto.find(".price").text());
		total += quantity * price;
	});
	return total;
}

$(function() {
	$(".quantity").change(function() {
		writeTotal(calculateTotalProducts());
	});
});