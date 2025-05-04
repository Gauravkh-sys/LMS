import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from "../../../../pipes/safeurl.pipe";

@Component({
  selector: 'app-presentationviewer',
  imports: [CommonModule, FormsModule, SafeUrlPipe,],
  templateUrl: './presentationviewer.component.html',
  styleUrl: './presentationviewer.component.scss'
})
export class PresentationviewerComponent {
  pptUrl: string = 'https://github.com/Gauravkh-sys/LMS/blob/main/Web%20Portal.pptx?raw=true';
  viewerUrl: string = '';

  loadPresentation() {
    if (this.pptUrl) {
      const encodedUrl = encodeURIComponent(this.pptUrl);
      this.viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`;
    }
  }
}
