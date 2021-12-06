import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit, AfterViewInit, OnDestroy {
  noOfdivs = 1;
  constructor() { }

  ngOnInit(): void {
    this.createDynamicDivs(10);
  }

  ngAfterViewInit() {
    document?.querySelector('#buttons')?.addEventListener('click', (event: any) => {
      if (event.target.className === 'buttonClass') {
        console.log(event?.target?.getInnerHTML() + "clicked");
      }
    });

    let oldValue = 0, newValue = 0;
    window.addEventListener('scroll', (e: any) => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        // console.log("down", e.currentTarget.pageYOffset);
        if (e.currentTarget.pageYOffset > 150 && this.noOfdivs < 60) {
          this.createDynamicDivs(20);
          // console.log(" createDynamicDivs", this.noOfdivs)
        }
      } else if (oldValue > newValue) {
        // console.log("up");
      }
      oldValue = newValue;
    });

  }

  private createDynamicDivs(count: number) {
    const button = document.querySelector('#buttons');
    for (let i = 1; i <= count; ++i) {
      var div = document.createElement('div');
      div.innerHTML = `<button class="buttonClass" type="button"> ${this.noOfdivs}</button>`;
      div.style.cssText = `background-color:#8bc34a;border-radius:4px;display: flex;align-items: center;justify-content: center;float:left; height:200px;width:200px;margin-left: 10px;margin-bottom: 10px;`;
      this.noOfdivs++;
      button?.appendChild(div);
    }
  }

  ngOnDestroy() {
    document?.querySelector('#buttons')?.removeEventListener("click", () => {
      console.log("onclick removed");
    });
    window.removeEventListener('scroll', () => { console.log("scroll removed") });
  }
}
