import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createDynamicDivs(20);   
  }

  ngAfterViewInit() {
    document?.querySelector('#buttons')?.addEventListener('click', (event:any) => {
      if(event.target.className === 'buttonClass'){
      console.log(event?.target?.getInnerHTML() + "clicked");
      }
    });
    let oldValue = 0;
    window.addEventListener('scroll', (event:any) => {
      // console.log(event);
       // Get the new Value
   let  newValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldValue - newValue < 0){
        console.log("Up");
    } else if(oldValue - newValue > 0){
        console.log("Down");
    }

    // Update the old value
    oldValue = newValue;

    });

  }

  private createDynamicDivs(count:number){
    for (let i = 1;i < count;++i)
    {
      const button=document.querySelector('#buttons')
      var div = document.createElement('div');
      div.innerHTML = `<button class="buttonClass" type="button"> ${i}</button>`; 
      div.style.cssText = `height:200px;width:200px;background-color:#8bc34a;border-radius:4px;display: flex;align-items: center;justify-content: center;float:left;margin-left: 10px;margin-bottom: 10px;`;

     button?.appendChild(div);
    }
  }

}
