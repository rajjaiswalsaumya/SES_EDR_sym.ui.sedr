import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymUiSedrHelloWorldComponent } from './sym-ui-sedr-hello-world.component';

describe('SymUiSedrHelloWorldComponent', () => {
  let component: SymUiSedrHelloWorldComponent;
  let fixture: ComponentFixture<SymUiSedrHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymUiSedrHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymUiSedrHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
