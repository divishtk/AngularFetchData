import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    posts=[
        {
          title:"No Way Home",
          imgUrl:'https://images.hindustantimes.com/img/2021/11/09/1600x900/spider-man_no_way_home_1636451315678_1636451323010.png',
          userName:'NYC',
          content:'With great power comes great responsibility.'
        },
        {
          title:"Home Coming",
          imgUrl:'https://media.newyorker.com/photos/5d1a103e9709c80009c52f73/2:2/w_1671,h_1671,c_limit/Brody-Spider-Man.jpghttps://media.newyorker.com/photos/5d1a103e9709c80009c52f73/2:2/w_1671,h_1671,c_limit/Brody-Spider-Man.jpg',

          userName:'NYC',
          content:'With great power comes great responsibility.'
        },
        {
          title:"Far From Home",
          imgUrl:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/spider-man_1200x768.jpeg?SpnOVlVe2hJIcXO5KPX_uypxoUPZ1DDJ&size=770:433',
          userName:'NYC',
          content:'With great power comes great responsibility.'
        }

    ]

}
