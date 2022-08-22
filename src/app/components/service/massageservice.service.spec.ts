/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MassageserviceService } from './massageservice.service';

describe('Service: Massageservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassageserviceService]
    });
  });

  it('should ...', inject([MassageserviceService], (service: MassageserviceService) => {
    expect(service).toBeTruthy();
  }));
});
