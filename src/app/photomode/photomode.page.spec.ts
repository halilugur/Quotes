import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotomodePage } from './photomode.page';

describe('PhotomodePage', () => {
  let component: PhotomodePage;
  let fixture: ComponentFixture<PhotomodePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotomodePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotomodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
