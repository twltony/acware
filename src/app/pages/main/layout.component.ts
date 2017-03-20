/**
 * Created by Tony on 2017/3/8.
 */
import { Component } from '@angular/core';
//import {ClrResponsiveNavigationService} from 'clarity-angular'


@Component({
    selector: '[ac-layout]',
    styles: ['.content-container {overflow: scroll;}clr-main-container { overflow: hidden;}'],
    templateUrl: 'layout.component.html'
})
export class Layout {
  rootDirectory:  Object[] = [
    {
      name: "第一类-1",
      icon: "folder",
      expanded: true,
      files: [
        {
          icon: "calendar",
          name: "第二类-1",
          active: true,
          files: [
            {
              icon : "calendar",
              name : "第三类-1",
              active: true
            }
          ]
        },
        {
          icon: "line-chart",
          name: "第二类-2",
          active: false
        },
        {
          icon: "dashboard",
          name: "第二类-3",
          active: false
        },
        {
          icon: "map",
          name: "第二类-4",
          active: false
        },
      ]
    },
    {
      name: "第一类-2",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "file",
          name: "第二类-1",
          active: false
        },
      ]
    },
    {
      name: "第一类-3",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "image",
          name: "第二类-1",
          active: false
        }
      ]
    }
  ];
  constructor(){



  }

}
