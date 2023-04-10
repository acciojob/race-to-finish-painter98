let promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolved1");
	},Math.random()*5000);
});

let promise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolved2");
	},Math.random()*5000);
});

let promise3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolved3");
	},Math.random()*5000);
});

let promise4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolved4");
	},Math.random()*5000);
});

let promise5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolved5");
	},Math.random()*5000);
});
window.promises = [];
promises.push(promise1,promise2,promise3,promise4,promise5);


Promise.any(promises).then((data)=>{
	document.getElementById('output').innerText=data;
});
