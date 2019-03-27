import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    // if user has made changes a popup will appear preventing data from being lost
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to leave before saving changes?');
    }
    return true;
  }
}
