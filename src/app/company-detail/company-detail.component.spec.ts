import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailComponent } from './company-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;

  let mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => {
          return 1;
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponent ],
      imports: [HttpClientModule],
      providers: [{provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
