console.log("backgorund 2 running");

var myHeaders = new Headers();
myHeaders.append("Connection", "keep-alive");
myHeaders.append("sec-ch-ua", "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"");
myHeaders.append("Accept", "*/*");
myHeaders.append("csrf", "9I1Z-Q7JP-2TM1-68YZ-09ZC-JIAU-B87S-O7QT-MK8D-Q8RQ-LBDM-OREM-TEJK-JZL0-Y21Y-D51D-E8OW-54CD-U5XF-1IAS-O259-1CSH-EYOM-2AHB-5341-RGLN-KCHB-L93A-3KF3-UPQZ-YJNT-BFRY");
myHeaders.append("x-requested-with", "OWASP CSRFGuard Project");
myHeaders.append("uicomponentname", "null");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Referer", "https://itunesconnect.apple.com/trends/reports");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Cookie", "geo=US; POD=us~en; s_cc=true; s_fid=33C002F732D3FC8A-0F328B11592CC252; s_vi=[CS]v1|3063DC38DFB21884-60000C8CF401E6D8[CE]; dslang=US-EN; site=USA; at_check=true; dssid2=142cb333-01d2-4374-82ef-149942a2d9f5; dssf=1; XID=0236f6b3651176e5dfc39583732973ef; s_orientation=%5B%5BB%5D%5D; s_orientationHeight=790; s_ppvl=acs%253A%253Akb%253A%253Aht%253A%253Aht204316%253A%253AHow%2520to%2520create%2520a%2520new%2520Apple%2520ID%2520%2528en-us%2529%2C79%2C11%2C5025%2C1440%2C686%2C1440%2C900%2C1%2CP; s_ppv=acs%253A%253Akb%253A%253Aht%253A%253Aht204316%253A%253Ahow%2520to%2520create%2520a%2520new%2520apple%2520id%2520%2528en-us%2529%2C69%2C69%2C4403%2C1440%2C686%2C1440%2C900%2C1%2CP; as_pcts=OfrEuiYOyfn+nnZhmRao6BRyaUHohhgIBZPyz2o-knTQCW63hy56opf+mV:igstyf6_sD:3woLWhG; mk_epub=%7B%22btuid%22%3A%221fn66z7%22%2C%22events%22%3A%22event220%3D0.023%2Cevent221%3D0.000%2Cevent222%3D0.000%2Cevent223%3D0.000%2Cevent224%3D0.061%2Cevent225%3D0.001%2Cevent226%3D0.686%2Cevent227%3D0.007%2Cevent228%3D0.694%2Cevent229%3D1.399%2C%22%2C%22prop57%22%3A%22www.us.ibooksauthor%22%7D; s_sq=%5B%5BB%5D%5D; dc=pv; JSESSIONID=node010h67d884kfci1mbfg2nj1wlz93049.node0; acn01=KlHzKHCdpFmzFEuMRmsgfU3kQaQ5F8+jYPS2h0yHjbgvI6lwFBS8zZBNWwAAPrvL/2ja; myacinfo=DAWTKNV206d8cc7d672710a59d0fc35b7aa711ca0b16e0f11f41d5f2af412730798dd4f395ebd00303b13cdba77c106c2076d0e8bdf75ea6ec3369120f55a2ab7c633484a08fb17893b150a8e68434ce0a9ae14f4e18f94ca4025150e783c048d55b9f3510d8adbcf848999ef86831b415412f63c5bcc9410cf4d26b4d2b148fa182786251b3161cdd06cc241b57d555a6244c97d166e4fbedbdb077ec2ac863367d71c68d100746142b4e3d7f3547c3ff25657c63643ee9742f9f3911add7c6d0ceac97afdb85324f01fede31107a01b9ee553bc4d9c5dcf818fdb7b57ff48592e12a1c43857c9b36f6be6657b9f89f65be937c308350435769e860541bf581e84f34169bb3af653ab9ac041a493212a06f668f64656337666364386664623861326138313961306638326461333866346266643534383263343262MVRYV2; dqsid=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ2NDQ1MzgsImp0aSI6InVRSU1BZHpkSkZER2ZTRlZHN2FtUEEifQ.il9FPrpjXLeN-17IZZw8CRUVc-Nk9BENZbSWXRFcCSg; itctx=eyJjcCI6MTIyMDQ5NzExLCJkcyI6MjAwNDU3NjY2MzIsImV4IjoiMjAyMS02LTI2IDI6ODo1OSJ9|om96dasefq8rt3vn60a23fs0v3|DtgFiznuhvBjV0-IYTopyc7HY2w; itcdq=0; pcc-alt=39e371c7-372f-49ab-85d2-227313347e4a; wosid=9mbcizWsjCD6mBU1vlIS9M; woinst=5132; dqsid=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ2NDQ1MzgsImp0aSI6InVRSU1BZHpkSkZER2ZTRlZHN2FtUEEifQ.il9FPrpjXLeN-17IZZw8CRUVc-Nk9BENZbSWXRFcCSg");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://itunesconnect.apple.com/trends/gsf/salesTrendsApp/businessareas/InternetServices/subjectareas/iTunes/stream/report?_=1624645153017&vendorID=89772214&reportType=2A&endDate=2021%2F06%2F24&vendorType=2&CSRF=9I1Z-Q7JP-2TM1-68YZ-09ZC-JIAU-B87S-O7QT-MK8D-Q8RQ-LBDM-OREM-TEJK-JZL0-Y21Y-D51D-E8OW-54CD-U5XF-1IAS-O259-1CSH-EYOM-2AHB-5341-RGLN-KCHB-L93A-3KF3-UPQZ-YJNT-BFRY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



var myHeaders = new Headers();
myHeaders.append("Connection", "keep-alive");
myHeaders.append("sec-ch-ua", "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"");
myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
myHeaders.append("Upgrade-Insecure-Requests", "1");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Sec-Fetch-Mode", "same-origin");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Referer", "https://itunesconnect.apple.com/itc/payments_and_financial_reports");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Cookie", "geo=US; POD=us~en; s_cc=true; s_fid=33C002F732D3FC8A-0F328B11592CC252; s_vi=[CS]v1|3063DC38DFB21884-60000C8CF401E6D8[CE]; dslang=US-EN; site=USA; at_check=true; dssid2=142cb333-01d2-4374-82ef-149942a2d9f5; dssf=1; XID=0236f6b3651176e5dfc39583732973ef; s_orientation=%5B%5BB%5D%5D; s_orientationHeight=790; s_ppvl=acs%253A%253Akb%253A%253Aht%253A%253Aht204316%253A%253AHow%2520to%2520create%2520a%2520new%2520Apple%2520ID%2520%2528en-us%2529%2C79%2C11%2C5025%2C1440%2C686%2C1440%2C900%2C1%2CP; s_ppv=acs%253A%253Akb%253A%253Aht%253A%253Aht204316%253A%253Ahow%2520to%2520create%2520a%2520new%2520apple%2520id%2520%2528en-us%2529%2C69%2C69%2C4403%2C1440%2C686%2C1440%2C900%2C1%2CP; as_pcts=OfrEuiYOyfn+nnZhmRao6BRyaUHohhgIBZPyz2o-knTQCW63hy56opf+mV:igstyf6_sD:3woLWhG; mk_epub=%7B%22btuid%22%3A%221fn66z7%22%2C%22events%22%3A%22event220%3D0.023%2Cevent221%3D0.000%2Cevent222%3D0.000%2Cevent223%3D0.000%2Cevent224%3D0.061%2Cevent225%3D0.001%2Cevent226%3D0.686%2Cevent227%3D0.007%2Cevent228%3D0.694%2Cevent229%3D1.399%2C%22%2C%22prop57%22%3A%22www.us.ibooksauthor%22%7D; dc=pv; JSESSIONID=node010h67d884kfci1mbfg2nj1wlz93049.node0; acn01=KlHzKHCdpFmzFEuMRmsgfU3kQaQ5F8+jYPS2h0yHjbgvI6lwFBS8zZBNWwAAPrvL/2ja; myacinfo=DAWTKNV206d8cc7d672710a59d0fc35b7aa711ca0b16e0f11f41d5f2af412730798dd4f395ebd00303b13cdba77c106c2076d0e8bdf75ea6ec3369120f55a2ab7c633484a08fb17893b150a8e68434ce0a9ae14f4e18f94ca4025150e783c048d55b9f3510d8adbcf848999ef86831b415412f63c5bcc9410cf4d26b4d2b148fa182786251b3161cdd06cc241b57d555a6244c97d166e4fbedbdb077ec2ac863367d71c68d100746142b4e3d7f3547c3ff25657c63643ee9742f9f3911add7c6d0ceac97afdb85324f01fede31107a01b9ee553bc4d9c5dcf818fdb7b57ff48592e12a1c43857c9b36f6be6657b9f89f65be937c308350435769e860541bf581e84f34169bb3af653ab9ac041a493212a06f668f64656337666364386664623861326138313961306638326461333866346266643534383263343262MVRYV2; dqsid=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ2NDQ1MzgsImp0aSI6InVRSU1BZHpkSkZER2ZTRlZHN2FtUEEifQ.il9FPrpjXLeN-17IZZw8CRUVc-Nk9BENZbSWXRFcCSg; itctx=eyJjcCI6MTIyMDQ5NzExLCJkcyI6MjAwNDU3NjY2MzIsImV4IjoiMjAyMS02LTI2IDI6ODo1OSJ9|om96dasefq8rt3vn60a23fs0v3|DtgFiznuhvBjV0-IYTopyc7HY2w; itcdq=0; pcc-alt=39e371c7-372f-49ab-85d2-227313347e4a; wosid=9mbcizWsjCD6mBU1vlIS9M; woinst=5132; s_sq=applesuperglobal%3D%2526pid%253Dhttps%25253A%25252F%25252Fitunesconnect.apple.com%25252Fitc%25252Fpayments_and_financial_reports%252523%25252F%2526oid%253Dhttps%25253A%25252F%25252Fitunesconnect.apple.com%25252FWebObjects%25252FiTunesConnect.woa%25252Fwa%25252FdownloadFinancialReportPageCSV%25253Fconte%2526ot%253DA; dqsid=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ2NDQ1MzgsImp0aSI6InVRSU1BZHpkSkZER2ZTRlZHN2FtUEEifQ.il9FPrpjXLeN-17IZZw8CRUVc-Nk9BENZbSWXRFcCSg");

var requestOptions = {
  method: 'GET',
//   headers: myHeaders,
  redirect: 'follow'
};

fetch("https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/wa/downloadFinancialReportPageCSV?contentProviderId=122049711&sapVendorNumber=89772214&year=2021&month=05", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));