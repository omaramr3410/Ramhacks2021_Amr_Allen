console.log("running background");
// simple function to hang up code for x ms, temporary
function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let costar = async () => {
	let count = 0;//tracks current page of info pulled
	let status;//true if current fetch request was 200 level response, false otherwise
	let final_costar = [];//final JSON var containing array of dicts, where each element contains dict with keys (name,link,details)
	let promise_arr;
	do{
		console.log();
		let origin = await fetch("https://costar.wd1.myworkdayjobs.com/CoStarCareers/8/searchPagination/318c8bb6f553100021d223d9780d30be/"+(count+1)*50)
			.then(res=>{
				status = res.ok;
				console.log("res value", status);
				return res;
			});
		if(!status)
			break;
		let src = await origin.text();
		const obj = JSON.parse(src);
		console.log("object for this endpoint", obj);
		console.log("count var",count++);
		// const parser = new DOMParser();
		// const htmlDoc = parser.parseFromString(src, 'text/html');
		
		
		//got next 50 elements, each element of array is job
		promise_arr = [];//contains array of promises
		let job_arr = obj.body.children[0].children[0].listItems;
		if(!job_arr)
			continue;
		console.log("job_arr", job_arr)
		for(let i=0;i<job_arr.length-1;i++){
			let curr_promise = new Promise(async (resolve1, reject1) =>{
				let new_obj = {};
				let curr_elem = job_arr[i];
				let name = curr_elem.title.instances[0].text;//gets name
				let link = curr_elem.title.commandLink;//get link to apply 
				console.log("link", link);
				//use to fetch the next page, second level down
				const origin2 = await fetch("https://costar.wd1.myworkdayjobs.com"+link, {
					"headers": {
						"accept": "application/json,application/xml",
						"accept-language": "en-US,en;q=0.9",
						"content-type": "application/x-www-form-urlencoded",
						"sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
						"sec-ch-ua-mobile": "?0",
						"sec-ch-ua-platform": "\"Windows\"",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin",
						"x-workday-client": "2021.39.009"
					},
					"referrer": "https://costar.wd1.myworkdayjobs.com/en-US/CoStarCareers/job/CA-ON-Toronto/Sales-Associate--CoStar---CA-ON-Toronto_R23961",
					"referrerPolicy": "no-referrer-when-downgrade",
					"body": null,
					"method": "GET",
					"mode": "cors",
					"credentials": "include"
				});
				let src2 = await origin2.text();
				const obj_job = JSON.parse(src2); console.log("obj_job", obj_job, obj_job.body.children[1].children[0].children[2])
				let job_info = obj_job.body.children[1].children[0].children[2].text;//gets complete HTML string containing Job description, Responsibilties, Basic Qualifactions,

				new_obj.name = name;
				new_obj.link = link;
				new_obj.job_info = job_info;
				// const start = "RESPONSIBILITIES";
				// const end = "BASIC";
				// const responsibilties = job_info.split(start)[1]?.split(end)[0];
				// console.log("responsibilities", responsibilties);
				final_costar.push(new_obj);
				var rand_amt = getRandomIntInclusive(1,4); 

				// sleep(rand_amt * 1000);

				resolve1();
			});
			promise_arr.push(curr_promise);
		}
		

	}while(status)

	const data = await Promise.allSettled(promise_arr)

	console.log("costar JSON data",final_costar)
	
	myHeaders = new Headers();
	// myHeaders.set("Accept", "text/html, */*; q=0.01");

	let formdata = new FormData();
	formdata.append("JSON_data", JSON.stringify(final_costar));
	formdata.append("platform", "Costar");


	requestOptions = {
		method: 'POST',
		headers: myHeaders,// need to populate headers for web service will necessary info
		body: formdata,
		redirect: 'follow'
	};
	
	let send_info = await fetch("http://127.0.0.1:5000/receive", requestOptions);

	return final_costar;
};

costar();



