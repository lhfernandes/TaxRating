import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Segment } from '../share/entities/segment';
import { SegmentService } from '../share/services/segment/segment.service';


@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;
    items!: MenuItem[];
    menuSeg :MenuItem[] = [];
    segments: Segment[] = [];

    constructor(private segmentService: SegmentService) {

    }

    ngOnInit() {
        
        this.segmentService.get().then(segs => {

            this.segments = segs;          
           
            segs.forEach(s => {
                this.menuSeg.push(
                    {
                        label: s.name,
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/segment/'+ s.id]
                    }
                )
            })


            this.items = [
                {                    
                    label: 'Início',
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/']
                },
                {                    
                    label: 'Cotação de Moedas',
                    icon: 'pi pi-fw pi-money-bill',
                    items: [
                        {
                            label: 'Segmentos',
                            icon: 'pi pi-fw pi-share-alt',
                            items: this.menuSeg
                        }
    
                    ]
                },
                {
                    label: 'Administração',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        {
                            label: 'Segmentos',
                            icon: 'pi pi-fw pi-share-alt',
                            routerLink: ['/list-segments']
                        }
                    ]
                }
            ];
        }); 


        
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
