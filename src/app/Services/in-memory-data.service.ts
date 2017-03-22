import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let marketingdatas = [
      { "data": {
          "yearList": ["2014","2015","2016","2017"],
          "dataYear": "2016",
          "subjectName": "销售主题",
          "subTitles":["销售主题1","销售主题2"],
          "subDatas": [
            {
              "id":"1",
              "subName":"销售主题1"
            },
            {
              "id":"2",
              "subName":"销售主题2"
            }
          ]
        },
        "id": "1"
      },{
      "data": {
        "yearList": ["2014","2015","2016","2017"],
        "dataYear": "2016",
        "subjectName": "销售主题",
        "subTitles":["销售主题1","销售主题2"],
        "subDatas": [
          {
            "id":"1",
            "subName":"销售主题1"
          },
          {
            "id":"2",
            "subName":"销售主题2"
          }
        ]
      },
      "id": "2"
    ];
    return {marketingdatas};
  }
}
