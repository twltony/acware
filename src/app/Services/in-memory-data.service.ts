import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let basedatas = 
      { 
        id: 1,
        yearList: ["2014","2015","2016","2017"],
        currentDataYear: "2016",
        subjectName: "销售主题",
        subTitles: [
          // {
          //   id:"000title01",
          //   name:"销售主题1"
          // },{
          //   id:"000title02",
          //   name:"销售主题2"
          // }
          ]
      }
    ;
    return {basedatas};
  }
}