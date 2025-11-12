import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-production-order-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Production Orders</h1>
        <button mat-raised-button color="primary" routerLink="/production-orders/create">
          <mat-icon>add</mat-icon>
          New Order
        </button>
      </div>
      
      <mat-card>
        <mat-card-content>
          <p>Production orders will be displayed here.</p>
          <p>This is a demo interface showing the application structure.</p>
          
          <!-- TEST ENHANCEMENT: Notes display functionality -->
          <div class="demo-notes-section">
            <h3>Enhanced Notes Display (Test Feature)</h3>
            <div class="notes-demo">
              <p><strong>Sample Order Notes:</strong></p>
              <div class="notes-display">
                <span class="notes-text" [class.expanded]="notesExpanded">
                  {{ sampleNotes }}
                </span>
                <button mat-button color="primary" 
                        (click)="toggleNotesExpansion()" 
                        class="notes-toggle">
                  {{ notesExpanded ? 'Show less' : 'Show more' }}
                </button>
              </div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .page-header h1 {
      margin: 0;
      color: #333;
    }
    
    mat-card {
      margin-bottom: 20px;
    }
    
    /* Test Enhancement: Notes display styling */
    .demo-notes-section {
      margin-top: 20px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    .notes-demo h3 {
      margin: 0 0 12px 0;
      color: #666;
      font-size: 14px;
    }
    
    .notes-display {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    
    .notes-text {
      flex: 1;
      line-height: 1.4;
      color: #333;
    }
    
    .notes-text:not(.expanded) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .notes-toggle {
      min-width: 80px;
      flex-shrink: 0;
    }
    
    /* Responsive design for mobile */
    @media (max-width: 768px) {
      .demo-notes-section {
        padding: 12px;
      }
      
      .notes-display {
        flex-direction: column;
        align-items: stretch;
      }
      
      .notes-toggle {
        align-self: flex-start;
        margin-top: 8px;
      }
    }
  `]
})
export class ProductionOrderListComponent {
  // Test enhancement: Notes display functionality
  notesExpanded = false;
  sampleNotes = 'This is a sample production order with detailed notes about special handling requirements, quality specifications, and delivery instructions that need to be visible to production managers for proper order execution.';

  toggleNotesExpansion(): void {
    this.notesExpanded = !this.notesExpanded;
  }

  getTruncatedNotes(notes: string, maxLength: number = 50): string {
    return notes.length > maxLength ? notes.substring(0, maxLength) + '...' : notes;
  }
}