module.exports = {
arithGeo: (value) => {
	let checkElement = (age) => {
    	return typeof(age) !== 'number';
    }
	if(!Array.isArray(value)){
		return "Invalid input"
	}
	else if(value.length === 0){
		return 0;
	}
	else if(value.find(checkElement)){
		return "only numbers are allowed"
	}
	const diff = value[1] - value[0];
    const ratio = value[1] / value[0];
	let arith = true;
	let geo = true;
	for (let i = 0; i < value.length - 1; i++){
	    if( value[i + 1] - value[i] !== diff )
	      arith = false;
	    if(value[i + 1] / ratio !== value[i])
	      geo = false;
	}
	if (arith === true){
	    return "Arithmetic";
	}
	else if (geo === true){
	    return "Geometric";
	}
	else {
	    return -1;
	}
}

}
