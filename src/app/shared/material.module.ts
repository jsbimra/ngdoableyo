import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatDialogModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule( {
    imports: [
    ],
    declarations: [
    ],
    exports: [
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatMenuModule,
        MatDividerModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
    ]
})

export class MaterialModule {}