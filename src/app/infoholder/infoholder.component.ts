import { AfterViewInit, Component, ViewChild, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface AmbulanceData {
  doctorname: string;
  phone: number;
  symbol: string;
  description: string;
  address: string;
  UPHC: number;
}
const AMBULANCE_DATA: AmbulanceData[] = [
  {

    doctorname: 'Dr. Monirupa Sarkar',
    phone: 9674965863,
    symbol: 'MS',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '21, Raja Monindra Road',
    UPHC: 7
  },
  {

    doctorname: 'Dr. Basudeb Mukherjee',
    phone: 9830062150,
    symbol: 'BM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '160, Aurobindo Sarani',
    UPHC: 11
  },
  {

    doctorname: 'Dr. Sonia Majumder',
    phone: 9007264558,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '109, Narkeldanga Main Road, Kol-54',
    UPHC: 30
  },
  {
    doctorname: 'Dr. Sukriti Mukherjee',
    phone: 9830225902,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '9A Baranasi Ghosh Lane, Kol-6',
    UPHC: 25
  },
  {
    doctorname: 'Dr. Debashis Roy',
    phone: 9830053604,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '10 Harshi Street, Kol-9',
    UPHC: 36
  },
  {
    doctorname: 'Dr. Upal Kanji',
    phone: 9830022006,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '3, Girish Chandra Bose Road',
    UPHC: 54
  },
  {
    doctorname: 'Dr. Jhuma Chakraborty',
    phone: 9433381645,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '2, Dhapa Road',
    UPHC: 67
  },
  {
    doctorname: 'Dr. Puspen Das',
    phone: 9831137782,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: '3A, Dover Terrace, Kol-19',
    UPHC: 85
  },
  {
    doctorname: 'Dr. K.S. Ganguly',
    phone: 8777545021,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: 'Mayors Health Clinic ,Kol-27',
    UPHC: 82
  },
  {
    doctorname: 'Dr. Sharmishtha Mitra',
    phone: 7980529160,
    symbol: 'DM',
    description: `RTPCR[Reverse Transcription Polymerase Chain Reaction] fixed centre at Borough Level `,
    address: 'Mayors Chest Clinic, Lyalka Road',
    UPHC: 96
  },


];

@Component({
  selector: 'app-infoholder',
  templateUrl: './infoholder.component.html',
  styleUrls: ['./infoholder.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class InfoholderComponent implements OnInit, AfterViewInit {


  columnsToDisplay = ['doctorname', 'address', 'phone', 'UPHC'];
  expandedElement: AmbulanceData | null;

  dataSource = new MatTableDataSource(AMBULANCE_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log("THIS IS ID::", id)

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
