import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GatewayTestModule } from '../../../../test.module';
import { FacturaDeleteDialogComponent } from 'app/entities/facturacao/factura/factura-delete-dialog.component';
import { FacturaService } from 'app/entities/facturacao/factura/factura.service';

describe('Component Tests', () => {
  describe('Factura Management Delete Component', () => {
    let comp: FacturaDeleteDialogComponent;
    let fixture: ComponentFixture<FacturaDeleteDialogComponent>;
    let service: FacturaService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewayTestModule],
        declarations: [FacturaDeleteDialogComponent]
      })
        .overrideTemplate(FacturaDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FacturaDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FacturaService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
