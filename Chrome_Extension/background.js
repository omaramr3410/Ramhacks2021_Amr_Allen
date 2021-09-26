console.log("running background");

let costar = async () => {
	let count = 0;//tracks current page of info pulled
	let status;//true if current fetch request was 200 level response, false otherwise
	let final_costar = [];//final JSON var containing array of dicts, where each element contains dict with keys (name,link,details)
	do{
		let origin = await fetch("https://costar.wd1.myworkdayjobs.com/CoStarCareers/8/searchPagination/318c8bb6f553100021d223d9780d30be/"+(count+1)*50)
			.then(res=>{
				status = res.ok;
				console.log("res value", status);
				return res;
			});
		let src = await origin.text();
		const obj = JSON.parse(src);
		console.log("object for this endpoint", obj);
		console.log("count var",count++);
		// const parser = new DOMParser();
		// const htmlDoc = parser.parseFromString(src, 'text/html');
		
		
		//got next 50 elements, each element of array is job
		let promise_arr = [];//contains array of promises
		let job_arr = obj.body.children[0]..listitems;
		for(let i=0;i<job_arr.length-1;i++){
			let curr_promise = new Promise(async (resolve1, reject1) =>{
				let new_obj = {};
				let curr_elem = jobs_arr[i];
				let name = curr_elem.title.instances.text;//gets name
				let link = curr_elem.title.commandLink;//get link to apply 

				//use to fetch the next page, second level down
				const origin2 = await fetch("https://costar.wd1.myworkdayjobs.com/"+link);
				let src2 = await origin2.text();
				const obj_job = JSON.parse(src2);
				let job_info = obj_job.body.children[1].children[2].text;//gets complete HTML string containing Job description, Responsibilties, Basic Qualifactions, 

				new_obj.name = name;
				new_obj.link = link;
				new_obj.job_info = job_info;
				const start = "RESPONSIBILITIES";
				const end = "BASIC";
				const responsibilties = job_info.split(start)[1]?.split(end)[0];
				console.log("")
				final_costar.push(new_obj);
			});
			promise_arr.push(curr_promise);
		}
		const data = await Promise.allSettled(promise_arr)

	}while(status)

	return;
};

costar();

