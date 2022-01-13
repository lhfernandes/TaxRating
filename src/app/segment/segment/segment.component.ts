import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { SymbolItem } from 'src/app/share/entities/symbol';
import { ConverterTaxPost } from 'src/app/share/entities/converter-tax';
import { TaxRatingService } from 'src/app/share/services/tax-rating/tax-rating.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css'],
  providers:[MessageService]
})
export class SegmentComponent implements OnInit, OnDestroy {
  public idSegmento!: number;
  segmentForm: any;
  text!: SymbolItem;
  amount: number = 1;
  result!: number;
  sub!: Subscription;

  results: string[] = [];
  symbols: SymbolItem[] = [{ symbol: 'AFN', name: 'Afegane afegão- (AFN)' },
  { symbol: 'MGA', name: 'Ariari malgaxe- (MGA)' },
  { symbol: 'THB', name: 'Baht tailandês- (THB)' },
  { symbol: 'PAB', name: 'Balboa panamense- (PAB)' },
  { symbol: 'ETB', name: 'Birr etíope- (ETB)' },
  { symbol: 'VES', name: 'Bolívar Soberano Venezuelano- (VES)' },
  { symbol: 'BOB', name: 'Boliviano- (BOB)' },
  { symbol: 'GHS', name: 'Cedi do Gana- (GHS)' },
  { symbol: 'CRC', name: 'Colón costarriquenho- (CRC)' },
  { symbol: 'NIO', name: 'Córdoba nicaraguano- (NIO)' },
  { symbol: 'CZK', name: 'Coroa checa- (CZK)' },
  { symbol: 'DKK', name: 'Coroa dinamarquesa- (DKK)' },
  { symbol: 'ISK', name: 'Coroa islandesa- (ISK)' },
  { symbol: 'NOK', name: 'Coroa norueguesa- (NOK)' },
  { symbol: 'SEK', name: 'Coroa sueca- (SEK)' },
  { symbol: 'GMD', name: 'Dalasi gambiano- (GMD)' },
  { symbol: 'DZD', name: 'Dinar argelino- (DZD)' },
  { symbol: 'BHD', name: 'Dinar barenita- (BHD)' },
  { symbol: 'KWD', name: 'Dinar cuaitiano- (KWD)' },
  { symbol: 'IQD', name: 'Dinar iraquiano- (IQD)' },
  { symbol: 'JOD', name: 'Dinar jordano- (JOD)' },
  { symbol: 'LYD', name: 'Dinar líbio- (LYD)' },
  { symbol: 'MKD', name: 'Dinar macedónio- (MKD)' },
  { symbol: 'RSD', name: 'Dinar sérvio- (RSD)' },
  { symbol: 'TND', name: 'Dinar tunisino- (TND)' },
  { symbol: 'AED', name: 'Dirame dos Emirados Árabes Unidos- (AED)' },
  { symbol: 'MAD', name: 'Dirame marroquino- (MAD)' },
  { symbol: 'STD', name: 'Dobra de São Tomé e Príncipe- (STD)' },
  { symbol: 'AUD', name: 'Dólar australiano- (AUD)' },
  { symbol: 'BSD', name: 'Dólar baamense- (BSD)' },
  { symbol: 'BMD', name: 'Dólar bermudense- (BMD)' },
  { symbol: 'CAD', name: 'Dólar canadiano- (CAD)' },
  { symbol: 'NZD', name: 'Dólar da Nova Zelândia- (NZD)' },
  { symbol: 'XCD', name: 'Dólar das Caraíbas Orientais- (XCD)' },
  { symbol: 'KYD', name: 'Dólar das Ilhas Caimão- (KYD)' },
  { symbol: 'SBD', name: 'Dólar das Ilhas Salomão- (SBD)' },
  { symbol: 'HKD', name: 'Dólar de Honguecongue- (HKD)' },
  { symbol: 'SGD', name: 'Dólar de Singapura- (SGD)' },
  { symbol: 'TTD', name: 'Dólar de Trindade e Tobago- (TTD)' },
  { symbol: 'BZD', name: 'Dólar do Belize- (BZD)' },
  { symbol: 'BND', name: 'Dólar do Brunei- (BND)' },
  { symbol: 'BBD', name: 'Dólar dos Barbados- (BBD)' },
  { symbol: 'USD', name: 'Dólar dos Estados Unidos- (USD)' },
  { symbol: 'FJD', name: 'Dólar fijiano- (FJD)' },
  { symbol: 'GYD', name: 'Dólar guianense- (GYD)' },
  { symbol: 'JMD', name: 'Dólar jamaicano- (JMD)' },
  { symbol: 'LRD', name: 'Dólar liberiano- (LRD)' },
  { symbol: 'NAD', name: 'Dólar namibiano- (NAD)' },
  { symbol: 'SRD', name: 'Dólar surinamês- (SRD)' },
  { symbol: 'VND', name: 'Dongue vietnamita- (VND)' },
  { symbol: 'AMD', name: 'Dram arménio- (AMD)' },
  { symbol: 'CVE', name: 'Escudo cabo-verdiano- (CVE)' },
  { symbol: 'EUR', name: 'Euro- (EUR)' },
  { symbol: 'EUR', name: 'Euro[I]- (EUR)' },
  { symbol: 'ANG', name: 'Florim antilhano- (ANG)' },
  { symbol: 'AWG', name: 'Florim arubano- (AWG)' },
  { symbol: 'HUF', name: 'Florim húngaro- (HUF)' },
  { symbol: 'BIF', name: 'Franco burundiano- (BIF)' },
  { symbol: 'XOF', name: 'Franco CFA BCEAO- (XOF)' },
  { symbol: 'XAF', name: 'Franco CFA BEAC- (XAF)' },
  { symbol: 'XPF', name: 'Franco CFP- (XPF)' },
  { symbol: 'KMF', name: 'Franco comorense- (KMF)' },
  { symbol: 'CDF', name: 'Franco congolês- (CDF)' },
  { symbol: 'GNF', name: 'Franco guineense- (GNF)' },
  { symbol: 'DJF', name: 'Franco jibutiano- (DJF)' },
  { symbol: 'RWF', name: 'Franco ruandês- (RWF)' },
  { symbol: 'CHF', name: 'Franco suíço- (CHF)' },
  { symbol: 'UAH', name: 'Grívnia ucraniana- (UAH)' },
  { symbol: 'PYG', name: 'Guarani paraguaio- (PYG)' },
  { symbol: 'HTG', name: 'Gurde haitiano- (HTG)' },
  { symbol: 'JPY', name: 'Iene japonês- (JPY)' },
  { symbol: 'CNY', name: 'Iuane chinês- (CNY)' },
  { symbol: 'PGK', name: 'Kina papuásia- (PGK)' },
  { symbol: 'LAK', name: 'Kipe lau- (LAK)' },
  { symbol: 'HRK', name: 'Kuna croata- (HRK)' },
  { symbol: 'MWK', name: 'Kwacha malauiano- (MWK)' },
  { symbol: 'ZMK', name: 'Kwacha zambiano- (ZMK)' },
  { symbol: 'AOA', name: 'Kwanza angolano- (AOA)' },
  { symbol: 'MMK', name: 'Kyat de Mianmar- (MMK)' },
  { symbol: 'GEL', name: 'Lari georgiano- (GEL)' },
  { symbol: 'ALL', name: 'Lek albanês- (ALL)' },
  { symbol: 'HNL', name: 'Lempira hondurenha- (HNL)' },
  { symbol: 'SLL', name: 'Leone serra-leonino- (SLL)' },
  { symbol: 'MDL', name: 'Leu moldávio- (MDL)' },
  { symbol: 'RON', name: 'Leu romeno- (RON)' },
  { symbol: 'BGN', name: 'Lev búlgaro- (BGN)' },
  { symbol: 'FKP', name: 'Libra das Ilhas Malvinas- (FKP)' },
  { symbol: 'GIP', name: 'Libra de Gibraltar- (GIP)' },
  { symbol: 'GGP[B]', name: 'Libra de Guernesei- (GGP[B])' },
  { symbol: 'JEP[B]', name: 'Libra de Jérsia- (JEP[B])' },
  { symbol: 'SHP', name: 'Libra de Santa Helena- (SHP)' },
  { symbol: 'EGP', name: 'Libra egípcia- (EGP)' },
  { symbol: 'GBP', name: 'Libra esterlina- (GBP)' },
  { symbol: 'GBP', name: 'Libra esterlina[C]- (GBP)' },
  { symbol: 'LBP', name: 'Libra libanesa- (LBP)' },
  { symbol: 'IMP[B]', name: 'Libra manesa- (IMP[B])' },
  { symbol: 'SYP', name: 'Libra síria- (SYP)' },
  { symbol: 'SDG', name: 'Libra sudanesa- (SDG)' },
  { symbol: 'SSP', name: 'Libra sul-sudanesa- (SSP)' },
  { symbol: 'SZL', name: 'Lilangeni suazilandês- (SZL)' },
  { symbol: 'TRY', name: 'Lira turca- (TRY)' },
  { symbol: 'LSL', name: 'Loti do Lesoto- (LSL)' },
  { symbol: 'AZN', name: 'Manat azerbaijano- (AZN)' },
  { symbol: 'TMT', name: 'Manat turcomeno- (TMT)' },
  { symbol: 'BAM', name: 'Marco convertível da Bósnia e Herzegovina- (BAM)' },
  { symbol: 'MZN', name: 'Metical moçambicano- (MZN)' },
  { symbol: 'NGN', name: 'Naira nigeriano- (NGN)' },
  { symbol: 'ERN', name: 'Nakfa eritreia- (ERN)' },
  { symbol: 'BTN', name: 'Ngultrum butanês- (BTN)' },
  { symbol: 'TWD', name: 'Novo dólar de Taiuã- (TWD)' },
  { symbol: 'ILS', name: 'Novo siclo israelita- (ILS)' },
  { symbol: 'PEN', name: 'Novo sol peruano- (PEN)' },
  { symbol: 'TOP', name: 'Paʻanga tonganesa- (TOP)' },
  { symbol: 'MOP', name: 'Pataca macaense- (MOP)' },
  { symbol: 'ARS', name: 'Peso argentino- (ARS)' },
  { symbol: 'CLP', name: 'Peso chileno- (CLP)' },
  { symbol: 'COP', name: 'Peso colombiano- (COP)' },
  { symbol: 'CUP', name: 'Peso cubano- (CUP)' },
  { symbol: 'CUC', name: 'Peso cubano convertível- (CUC)' },
  { symbol: 'DOP', name: 'Peso dominicano- (DOP)' },
  { symbol: 'PHP', name: 'Peso filipino- (PHP)' },
  { symbol: 'MXN', name: 'Peso mexicano- (MXN)' },
  { symbol: 'UYU', name: 'Peso uruguaio- (UYU)' },
  { symbol: 'BWP', name: 'Pula do Botsuana- (BWP)' },
  { symbol: 'GTQ', name: 'Quetzal guatemalteco- (GTQ)' },
  { symbol: 'ZAR', name: 'Rand sul-africano- (ZAR)' },
  { symbol: 'BRL', name: 'Real- (BRL)' },
  { symbol: 'QAR', name: 'Rial catarense- (QAR)' },
  { symbol: 'YER', name: 'Rial iemenita- (YER)' },
  { symbol: 'IRR', name: 'Rial iraniano- (IRR)' },
  { symbol: 'OMR', name: 'Rial omanense- (OMR)' },
  { symbol: 'SAR', name: 'Rial saudita- (SAR)' },
  { symbol: 'KHR', name: 'Riel cambojano- (KHR)' },
  { symbol: 'MYR', name: 'Ringuite malaio- (MYR)' },
  { symbol: 'BYR', name: 'Rublo bielorrusso- (BYR)' },
  { symbol: 'RUB', name: 'Rublo russo- (RUB)' },
  { symbol: 'PNB[B]', name: 'Rublo transdniestriano- (PNB[B])' },
  { symbol: 'LKR', name: 'Rupia do Sri Lanka- (LKR)' },
  { symbol: 'INR', name: 'Rupia indiana- (INR)' },
  { symbol: 'IDR', name: 'Rupia indonésia- (IDR)' },
  { symbol: 'MVR', name: 'Rupia maldívia- (MVR)' },
  { symbol: 'MUR', name: 'Rupia maurícia- (MUR)' },
  { symbol: 'NPR', name: 'Rupia nepalesa- (NPR)' },
  { symbol: 'PKR', name: 'Rupia paquistanesa- (PKR)' },
  { symbol: 'SCR', name: 'Rupia seichelense- (SCR)' },
  { symbol: 'KGS', name: 'Som quirguiz- (KGS)' },
  { symbol: 'UZS', name: 'Som usbeque- (UZS)' },
  { symbol: 'TJS', name: 'Somoni tajique- (TJS)' },
  { symbol: 'BDT', name: 'Taka bangladexense- (BDT)' },
  { symbol: 'WST', name: 'Tala samoana- (WST)' },
  { symbol: 'KZT', name: 'Tengue cazaque- (KZT)' },
  { symbol: 'MNT', name: 'Tugrik mongol- (MNT)' },
  { symbol: 'MRO', name: 'Uguia mauritana- (MRO)' },
  { symbol: 'VUV', name: 'Vatu do Vanuatu- (VUV)' },
  { symbol: 'KPW', name: 'Won norte-coreano- (KPW)' },
  { symbol: 'KRW', name: 'Won sul-coreano- (KRW)' },
  { symbol: 'KES', name: 'Xelim queniano- (KES)' },
  { symbol: 'SOS', name: 'Xelim somaliano- (SOS)' },
  { symbol: 'TZS', name: 'Xelim tanzaniano- (TZS)' },
  { symbol: 'UGX', name: 'Xelim ugandês- (UGX)' },
  { symbol: 'PLN', name: 'Zlóti polaco- (PLN)' }
  ];


  constructor(private taxRatingService: TaxRatingService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService :MessageService) {
    this.segmentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      tax: ['', [Validators.required]]
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idSegmento = +params['id'];
      this.amount = 1    
      this.text = {} as SymbolItem;
      this.result = 0;
    });
  }
  onSubmit() {
   
  }

  search(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.symbols.length; i++) {
      let symbol = this.symbols[i];
      if (symbol.symbol.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(symbol);
      }
    }
    this.results = filtered;
  }

  onCalculate() {
    const calc: ConverterTaxPost = {
      amount: this.amount,
      segment: this.idSegmento,
      symbol: this.text.symbol
    }

    this.taxRatingService.post(calc).then(ret => {
      this.result = ret.valConverted;
      this.messageService.add({ severity: 'success', summary: 'Conversão', detail: 'Conversão realizado com sucesso!' });
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: 'Conversão', detail: 'Erro para realizar a conversão.' });
    });

  }

}
