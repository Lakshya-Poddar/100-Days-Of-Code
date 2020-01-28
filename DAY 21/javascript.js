<script type="text/javascript" charset="utf-8">
	var n=1;
	while(n<=100){
		if(n%5==0&&n%3==0)
			console.log(' fizzbuzz ');
		else if(n%5==0)
			console.log(' Buzz ');
		else if(n%3==0)
			console.log(' Fizz ');
		else
			console.log(' '+n+' ');
		n++;
	} 
</script>