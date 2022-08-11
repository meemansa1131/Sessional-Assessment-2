fetch("https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09").then((data)=>{

	//console.log(data);
	return data.json();
	
	
}).then((objectData)=>{
	console.log(objectData[0].title);
	let tableData="";
	objectData.map((values)=>{
		tableData+= `<tr>
		<td>${values.userId}</td>
		<td>${values.id}</td>
		<td>${values.title}</td>
		<td>${values.body}</td>
	</tr>`;
		
	});
	document.getElementById("table_body").
	innerHTML=tableData;
}).catch((err)=>{
	console.log(err);
})