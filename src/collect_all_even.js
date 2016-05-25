
function collect_same_elements(collection_a, object_b) {
	var arr = [];
	for(var i=0;i<collection_a.length;i++){
		var index = object_b.value.indexOf(collection_a[i].key);
		if(index>=0){
			arr.push(collection_a[i].key); 
		}
	}
	return arr;
}

module.exports = collect_same_elements;
