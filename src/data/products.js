export const products = [
  //superfood

  //OsteoAid
  {
    id: 1,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    rating: 3,
    topProduct: 1,
    description: "Supplements Award 2021.",
    name: "OsteoAid",
    category: "joint",
    newest: 1,
    href: "/details/1",
    price: "$35",
    imageSrc: "../images/products/osteoaid.png",
    coverImageUrl: "../images/background/osteoaid.jpg",
    imageAlt: "OsteoAid",
    relatedProducts: [2, 3],
    about: ``,
    fields: {
      Paketimi: "30 kapsula",
      Përdorimi: "1 tabletë në ditë",
      Përbërësit: `
                    <p>
                      <ul> 
                        <li><strong>&emsp;-	500mg NEM® (membrana natyrale e lëvozhgës së vezës)</strong></li>
                        <li><strong>&emsp;-	Acid Hyaluronic</strong></li> 
                        <li><strong>&emsp;-	Glucosaminë</strong></li> 
                        <li><strong>&emsp;-	Sulfat kondroitine</strong></li> 
                        <li><strong>&emsp;-	Kolagjen</strong></li> 
                        <li><strong>&emsp;-	Sulfat mangani 2 mg</strong></li>                        
                      </ul>
                    </p>
                    <br/>
                    <span>Pa gluten, sheqer dhe sojë të shtuar.</span>
                    `,
      Rekomandohet: `
      Osteoaid nga Superfoods është një formulë që ndihmon në shëndetin e kyçeve, duke pasur një efekt të dobishëm në uljen e dhimbjes, ngurtësimin dhe mbrojtjen e kërcit. </br></br>
      Veprimi i Osteoaid-it bazohet në elementin NEM (Natural Eggsell Membrane), i cili vjen nga membrana e lëvozhgës së vezës. Është një burim i pasur i acidit hialuronik, glukozaminës, sulfatit të kondroitinës dhe kolagjenit, elementë që janë përbërës strukturorë të kyçeve, indit lidhës dhe kërcit. Ato ndihmojnë në ruajtjen e fleksibilitetit dhe lëvizshmërisë së kyçeve, duke ndihmuar në uljen e dhimbjes dhe ngurtësimit. </br></br>
      I përshtatshëm për personat me probleme kyçesh p.sh. për shkak të moshës, mbipeshës dhe për ata që tendosin kyçet dhe kërcin me aktivitet fizik intensiv (p.sh. atletët). </br></br>
      Të gjithë personat që kryejnë punë të rënda fizike.</br>
      Njerëz me rrezik në rritje nga probleme të përgjithshme.</br>
      Njerëz me aktivitet të lartë fizik, që venë nën presion të fortë nyjet dhe kërcet, (p.sh. vrapues, lojtarë basketbolli, etj)</br>
      Njerëz me probleme të përgjithëshme për shkak të mbipeshës.</br>
      `,
      "Të dhëna për OSTEOAID": `      
          <p>Fituesi i medaljes së artë si suplementi i vitit 2021</p>
          <br/>
          <p>
            ΝΕΜ® (Membrana e lëvozhgës së vezës natyrale)
          </p>
          </br>
          <p>
              Multivitaminë natyrale për kockat, kërcet dhe nyjet. </br>
              Proces i prodhimit ekologjik, i lirë nga kimikatet në PMP bimë, në përputhje me standardet strikte të FDA. 
              Membrana e vezës natyrore, i nënshtrohet një metode përpunimi të çertifikuar, të teknologjisë së lartë. </br>
              Falë kësaj metode ka një kombinim ideal të substancave që ekzistojnë në trupin e njeriut dhe mund të shfrytëzohen prej tij.
              Lehtë për t'u përdorur - vetëm një kapsulë në ditë.
              Profili i shkëlqyeshëm i sigurisë.
              Efektiviteti i provuar në studimet klinike për zvogëlimin e dhimbjeve dhe ngurtësisë, si dhe në mbrojtjen e kërcit. </br>
          </p>
          </br>
          <p>
              Rezultate të dukshme në vetëm 7 deri në 10 ditë.
          </p>
      `,
      "Të tjera": `
      Mbajeni larg fëmijëve.
      <br/><br/>
      Suplementet dietike nuk duhet të përdoren si zëvendësim për një dietë të ekuilibruar. Mos e tejkaloni dozën e rekomanduar ditore. Ky produkt nuk ka për qëllim parandalimin, trajtimin ose shërimin e ndonjë sëmundjeje. Konsultohuni me mjekun tuaj nëse jeni shtatzënë, ushqeni me gji, merrni medikamente te tjera ose keni ndonjë problem shëndetësor. Mund të ketë ndërveprime dhe efekte anësore të mëtejshme nga ato të listuara.
      `,
      Magazinimi: `
          Mbajeni produktin në një vend të thatë dhe të freskët deri në 25°C (77°F) dhe mbrojeni nga drita. Kushtet e papërshtatshme të ruajtjes, të tilla si ekspozimi i zgjatur në rrezet e diellit, temperatura e lartë, lagështia dhe kushtet e ngrirjes, mund të rezultojnë në ndryshime të produktit.
      `,
    },
  },

  //Valeriana Plus
  {
    id: 2,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Natural Valerian extract processed in accordance with strict standards to ensure high quality extract in each capsule.",
    name: "Valeriana Plus",
    category: "stress",
    newest: 2,
    href: "/details/2",
    price: "$89",
    imageSrc: "../images/products/valeriana-plus.png",
    coverImageUrl: "../images/background/valeriana-plus.jpg",
    imageAlt: "Valeriana +",
    relatedProducts: [2, 3],
    about: `
    <p>
      Ekstrakt Natyror Valeriana, përpunuar me standarde strikte, për një cilësi sa më  të lartë në çdo kapsulë.</br>
      Vetitë e lehtësimit të stresit duket të jenë të lidhura me nivelin e acidit valerik, që vjen nga ekstrakti i rrënjëve Valeriana. </br>
      Për shkak të veprimit të provuar qetësues, gjumi vjen natyrshëm duke u shtuar. </br>
      Njerëzit që nuk duan të marrin medikamente për gjumë, marrin valeriana. </br>
      Është gjithashtu një qetësues natyral.   
    </p>
    `,
    fields: {
      Capsules: "50",
      Usage:
        "1-2 kapsula në ditë bashkë me ushqimin ose sipas udhëzimeve të mjekut ose farmacistit tuaj",
      Ingredients: `<ul> 
                      <li><strong>300mg ekstrakt i thatë</strong> i rrënjëve që rrjedh nga  1200mg rrënjë Valeriana</li> 
                    </ul>`,
      Recommended: `
         Për njerëz me problemet e pagjumësisë dhe që zgjohen shpesh gjatë natës.</br>
         Vegjetarianë dhe Veganë         
      `,
      Benefits: `<ul> 
      <li>Rrit cilësinë e gjumit. Të relakson</li> 
      <li>Nuk të jep përgjumje në mëngjes. Rrit përqëndrimin</li>     
    </ul>`,
      Without: "Gluten, Natriumi, Sheqer, Laktoza",
    },
  },

  //CranbeCare
  {
    id: 3,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description: "Cystitis",
    name: "CranbeCare",
    category: "cystitis",
    newest: 3,
    href: "/details/3",
    price: "$89",
    imageSrc: "../images/products/cranbecare.png",
    coverImageUrl: "../images/background/cranbecare.jpg",
    imageAlt: "CranbeCARE",
    relatedProducts: [2, 3],
    about: `
    <p>
      Crambercare SUPERFOODS përmban 400mg ekstrakt boronicë (Vaccinium macrocarpon) 
      me një raport veçanërisht të lartë 38: 1.</br>
      Metoda standarde e lartë e përpunimit siguron përmbajtje të lartë të Proanthocyanidins (72 mg).</br>
      Për të prodhuar 1 kapsulë, nevojiten 15200mg fruta.</br>
      Boronicë është një kaçubë, e rritur në rajonet veriore të kontinentit Amerikan </br>
      me emrin shkencor Vaccinium macrocarpon, në Kanada dhe në Veri të Shteteve të Bashkuara
      ndërsa është ambientuar edhe në Evropë. </br>
      Ajo prodhon fruta karakteristike të kuqe ndërsa lulet e saj janë të bardha ose rozë.
    </p>
    <p>
      <h3>Antioksidant i fuqishëm!</h3>
        Historikisht, frutat e Boronicës janë përdorur për çrregullimet e fshikëzës, stomakut dhe mëlçisë,
        si dhe për diabetin, plagët e hapura dhe sëmundje të tjera. </br>
        Sot përdoret gjerësisht për infeksionet e traktit urinar në formën e shtojcave dietike</br>
        ndërsa konsumohet si pije ose ushqim.      
    </p>
      `,
    fields: {
      Capsules: "30",
      Usage:
        "Merrni 1 kapsulë në ditë sipas udhëzimeve të mjekut ose farmacistit tuaj.",
      Ingredients: `<ul> 
                        <li><strong>400mg</strong> Ekstrakt makrokarponi Vaccinium</li>                        
                      </ul>`,
      Recommended: `
            Vegjetarianët dhe Veganët
        `,
      Without: "Gluten, Natriumi, Sheqer, Laktoza, Soja",
    },
  },

  //Slim Detox
  {
    id: 4,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description: "Detox and reduction of water retention in 6 days",
    name: "Slim Detox",
    category: "weight",
    newest: 4,
    href: "/details/4",
    price: "$35",
    imageSrc: "../images/products/slim-detox.png",
    coverImageUrl: "../images/background/slim-detox.jpg",
    imageAlt: "SlimDetox",
    relatedProducts: [2, 3],
    about: ``,
    fields: {
      Paketimi: "Shishe 300 ml",
      "Sasia e servirjes": " 50ml",

      Dozimi: "50 ml në ditë të tretura në 500 ml ujë natyral",
      "Shërbimi për enë": "6 porcione",
      "Udhëzimet e përdorimit": "Të konsumohet gjatë ditës.",
      "Dozimi i përbërësve": `  <ul>
       <li><strong>- Luleradhiqe</strong> 275mg</li>   
       <li><strong>- Thupër</strong> 275mg</li>  
       <li><strong>- Çaji jeshil</strong> 275mg</li>  
       <li><strong>- Angjinare</strong> 91mg</li>                       
       </ul>`,
      "Përbërës të tjerë":
        " Ujë, sorbitol, aromë manaferrash, aromë luleshtrydhe të egër, acid citrik, sorbat kaliumi, çamçakëz xanthan, sukralozë",

      Rekomanduar: `
       Për të detoksifikuar dhe reduktuar mbajtjen e lëngjeve në organizëm.</br>
       Përgatitja e trupit para humbjes së peshës. </br>`,

      "Të dhëna për S DETOX 300ml": `   
         
        
       <p>
       <ul>
        <li><strong>- Me Taraxacum officinalis</strong></li>   
        <li><strong>- Betula pendula</strong></li>  
        <li><strong>- Camelia sinensis</strong></li>  
        <li><strong>- Cynara scomylus</strong></li>                       
       </ul>
       </p>
       </br>
       <p>
         Superfoods S Detox është një suplement dietik për të detoksifikuar dhe reduktuar mbajtjen e lëngjeve me luleradhiqe, thupër, çaj jeshil dhe angjinare. </br><br/>
         Përmban 4 përbërës bimorë të njohur për vetitë e tyre diuretike dhe antioksidante, të cilat ndihmojnë në detoksifikimin e trupit dhe reduktojnë mbajtjen e lëngjeve. Falë vetive diuretike dhe antioksidante të bimëve si thupra, çaji jeshil, angjinarja dhe luleradhiqe, ndihmon në eliminimin e toksinave nga trupi, si dhe në menaxhimin e peshës.</br><br/>
         
         Mështekna, në veçanti, rrit funksionin e limfave, një suplement ideal në fillim të një programi për humbje peshe dhe ofron mirëqenie dhe përtëritje.</br></br>
         
         Agjencia Evropiane e Barnave (EMA) dhe Komiteti për Mjekësi Bimore (HMPC) kanë miratuar përdorimin e rhodiola rosea 
         si një preparat tradicional bimor afatshkurtër për lehtësim të përkohshëm nga simptomat e stresit si lodhja dhe dobësia.<br/><br/>

         Agjencia Evropiane e Barnave (EMA) dhe Komiteti për Mjekësi Bimore (HMPC) kanë miratuar përdorimin e angjinareve si një preparat tradicional bimor për lehtësimin e dispepsisë dhe fryrjeve.</br></br>
         I përshtatshëm për njerëzit në ankth , kanë momente në jete shumë të ngarkuar.</br></br>

         Së fundi, rrënja e luleradhiqes kontribuon në funksionimin e duhur të veshkave.`,

      "Të tjera": `
         <em>
           <small>
             Suplementet dietike nuk duhet të përdoren si zëvendësim për një dietë të ekuilibruar. Mos e tejkaloni dozën e rekomanduar ditore. Ky produkt nuk ka për qëllim parandalimin, trajtimin ose shërimin e ndonjë sëmundjeje. Konsultohuni me mjekun tuaj nëse jeni shtatzënë, ushqeni me gji, merrni medikamente ose keni ndonjë problem shëndetësor. Mund të ketë ndërveprime dhe efekte anësore të mëtejshme nga ato të listuara. Rekomandimi i ofruesit të kujdesit shëndetësor ka përparësi ndaj informacionit në faqen e internetit.
             <br/>
             Gentius sh.p.k bën çdo përpjekje për të siguruar që informacioni dhe imazhet e produkteve të ofruara në faqen e internetit të jenë të sakta. Megjithatë, variacionet për shkak të ndryshimeve nga prodhuesi janë të mundshme. Ne ju rekomandojmë që të lexoni me kujdes etiketat, masat paraprake dhe udhëzimet e përdorimit të të gjitha produkteve përpara se t'i përdorni.
           </small>
         </em>
        `,
      Magazinimi:
        "Ruajeni produktin në një vend të thatë dhe të freskët deri në 25°C (77°F) dhe mbrojeni nga drita. Pas hapjes së produktit, ndiqni udhëzimet e ruajtjes në paketim për ruajtjen e tij optimale. </br> </br>Mbajeni larg fëmijëve",
    },
  },

  //Anasa Kids
  {
    id: 5,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "ANASA KIDS is a syrup with great taste that creates a protective film which calms the cough and protects the upper respiratory tract.",
    name: "Anasa Kids",
    category: "cold",
    newest: 5,
    href: "/details/5",
    price: "$35",
    imageSrc: "../images/products/anasa-kids.png",
    coverImageUrl: "../images/background/anasa-kids.jpg",
    imageAlt: "Anasa Kids",
    relatedProducts: [2, 3],
    about: `
    <p>
      ANASA  KIDS është një shurup për fëmijë, me shije të këndëshme, që krijonë një film mbrojtës, 
      që qetëson kollën dhe mbronë traktin e sipërm të frymëmarrjes.  </br>
      Në rastet e kollës së njomë: favorizon dëbimin e mukusit duke hidratuar atë.</br>
      Në rastet e kollës së thatë: mbron mukozën e faringut nga irrituesit, 
      duke kryer një veprim qetësues në mukozën e irrituar dhe trajton irritimet e shkaktuara nga agjentët e jashtëm
    </p>
      `,
    fields: {
      Bottle: "120 ml",
      Usage: `Fëmijët nga 1 në 2 vjet: 5 ml dy herë në ditë </br>
      Fëmijët nga 3 në 4 vjet: 5 ml tri herë në ditë </br>
      Fëmijët nga 5 në 10 vjet: 10 ml dy herë në ditë  `,

      Ingredients: `  <ul>
                        <li><strong>Ekstrakt althea, Mjaltë</strong></li>   
                        <li><strong>Ekstrakt plantago, Fruktoza</strong></li>  
                        <li><strong>Ujë të pastruar, Gomë Xanthan</strong></li>
                        <li><strong>Acid limoni, Aromatizues</strong></li>
                        <li><strong></strong></li>  
                        <li><strong>Sorbate kaliumi</strong></li>                    
                      </ul>`,
      Recommended: `
      Fëmijë me kollë të thatë </br>
      Fëmijë me kollë të njomë </br>
      Kundra gripit, 
      Rastet e irritimit të fytit nga i ftohti</br>
      Ata që kërkojnë shurup natyral bimor të efektshëm
        `,
      Without: "Gluten",
    },
  },

  //Anasa
  {
    id: 6,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Anasa",
    category: "cold",
    newest: 6,
    href: "/details/6",
    price: "$35",
    imageSrc: "../images/products/anasa.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Maca
  {
    id: 7,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description: "Libido",
    name: "Maca",
    category: "libido",
    newest: 7,
    href: "/details/7",
    price: "$35",
    imageSrc: "../images/products/maca.png",
    coverImageUrl: "../images/background/maca.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
    about: `
    <p>
      Maca është një bimë barishtore që rritet në lartësi të mëdha të Andeve peruane. </br>
      Ajo kultivohet për rrënjën, e mirënjohur për vlerat e saja kurative.</br>
      Për Ekstrakti natyral i Macas përfitohet nga  standarte strikte për të siguruar cilësi shumë të lartë në çdo kapsulë.</br>
      Vepron si antioksidant natyror,  lufton  sëmundjet kronike dhe dëmtimet neurologjike.</br>
      Rrit përqëndrimin, energjinë dhe qëndrueshmërinë; ul nivelin e depresionit</br>
    </p>
    <p>
      Membrana e vezës natyrore, i nënshtrohet një metode përpunimi të çertifikuar, të teknologjisë së lartë.  </br>
      Efektiviteti i provuar në studimet klinike për zvogëlimin e dhimbjeve dhe ngurtësisë, si dhe në mbrojtjen e kërcit. </br>
      Rezultate të dukshme në vetëm 7 deri në 10 ditë
    </p>
      `,
    fields: {
      Capsules: "50",
      Usage:
        "1 kapsulë në ditë bashkë me ushqimin, ose sipas udhëzimeve të mjekut ose farmacistit tuaj.",
      Ingredients: `
                      <ul> 
                        <li>
                        <strong>300 mg ekstrakt i thatë</strong> (10:1) i (Lepidium meyenii)
                        </li>
                      </ul>`,
      Recommended: `
        Njerëzit të interesuar për të rritur prestacioni seksual me balancimin e hormoneve natyrore.<br/>
        Njerëzit që duan qëndrueshmëri dhe energji më të madhe. <br/>
        Gratë gjatë menopauses.<br/>
      `,
      "Male Benefits": `
        Rrit dëshirën dhe përmirësonë prestacionin seksual </br>
        Përmirësonë cilësinë dhe lëvizshmërinë e spermës. </br>
        Rrit fertilitetin. </br>   
    `,
      "Female Benefits": `
        Rrit dëshirat seksuale <br/>
        Përmirëson shëndetin seksual <br/>
        Rrit pjellshmërinë <br/>
        Ndihmon në balancimin e hormoneve seksual <br/>
        Kontrollonë estrogjenit në trup <br/>
        Lehtëson  simptomat e menopauzës <br/>    
    `,
    },
  },

  //Cinnamon Extra
  {
    id: 8,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Cinnamon Extra",
    category: "diabetes",
    newest: 8,
    href: "/details/8",
    price: "$35",
    imageSrc: "../images/products/cinnamon.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Cod Liver Oil Pure
  {
    id: 9,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Cod Liver Oil Pure",
    category: "cardiovascular",
    newest: 9,
    href: "/details/9",
    price: "$35",
    imageSrc: "../images/products/cod-liver-oil.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Echinacea x3
  {
    id: 10,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Echinacea x3",
    category: "cold",
    newest: 10,
    href: "/details/10",
    price: "$35",
    imageSrc: "../images/products/echinacea.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Garcinia Diet
  {
    id: 11,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Garcinia Diet",
    category: "weight",
    newest: 11,
    href: "/details/11",
    price: "$35",
    imageSrc: "../images/products/garcinia.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Green Coffee
  {
    id: 12,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Green Coffee",
    category: "weight",
    newest: 12,
    href: "/details/12",
    price: "$35",
    imageSrc: "../images/products/green-coffee.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Hippophaes Energy
  {
    id: 13,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Hippophaes Energy",
    category: "enhancement",
    newest: 13,
    href: "/details/13",
    price: "$35",
    imageSrc: "../images/products/hippo-energy.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Hippophaes Papaya
  {
    id: 14,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Hippophaes Papaya",
    category: "cold",
    newest: 14,
    href: "/details/14",
    price: "$35",
    imageSrc: "../images/products/hippo-papaya.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //HippoPhaes
  {
    id: 15,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "HippoPhaes",
    category: "enhancement",
    newest: 15,
    href: "/details/15",
    price: "$35",
    imageSrc: "../images/products/hippo-phaes.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Hippophaes 50+
  {
    id: 16,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Hippophaes 50+",
    category: "enhancement",
    newest: 16,
    href: "/details/16",
    price: "$35",
    imageSrc: "../images/products/hippo-plus.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Hippophaes Woman
  {
    id: 17,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Hippophaes Woman",
    category: "women",
    newest: 17,
    href: "/details/17",
    price: "$35",
    imageSrc: "../images/products/hippo-woman.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Memoact +
  {
    id: 18,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Memoact +",
    category: "memory",
    newest: 18,
    href: "/details/18",
    price: "$35",
    imageSrc: "../images/products/memoact.png",
    coverImageUrl: "../images/background/memoact.jpg",
    imageAlt: "MemoACT+",
    relatedProducts: [2, 3],
    about: `
    <p>
      Multivitaminë për pëqndrimin, memorjen dhe shëndetin mental
    </p>
    <p>
      Kombinimi i shkëlqyer i ekstrakteve natyrore</br>
      Formulë e përmirësuar me vitaminë B kompleks natyrale (në 100% të vlerës së përditshme të ushqyerjes) dhe Coenzyme Q10
    </p>
      `,
    fields: {
      Capsules: "30",
      Usage:
        "Një kapsulë në ditë bashkë me ushqimin ose sipas përshkrimit të mjekut ose farmacistit tuaj",
      Recommended: `
        I përshtatshëm për njerëzit me nevoja intensive mendore për burrat dhe gratë mbi 50vjeç    
      `,
      Ingredients: `<ul> 
                      <li>
                        <strong>Fara kakao</strong> 
                        <p>e cila ul presionin e gjakut</br>
                           përmison nivelin e oksidit nitrik</br> 
                           ruan zemrën</br>
                           rrit qarkullimin e gjakut në tru dhe përmirëson funksionin e tij.
                        </p>
                      </li> 

                      <li>
                        <strong>Eleutherococcus (Siberian xhensen)</strong>
                        <p>
                          që përdoret në mjeksinë tradicionale si adaptogjen </br>
                          përshtat dhe ndihmon trupin në përballimin e stresit</br>
                          vepron si stimulues, duke përmirsuar funksionimin e sistemit nervor
                        </p>
                      </li> 
                      <li>
                        <strong>Çaj jeshil</strong>
                        <p>
                          i cili ndihmonë në djegjen e yndyrave</br>
                          rritjen e përformancës fizike</br>
                          përmirson funksionin e trurit
                        </p>
                      </li> 
                      <li>
                        <strong>Coenzyme Q10</strong>
                        <p>
                          siguron energji për qelizat</br>
                          mungesa e të cilës vihet re në sëmundje të ndryshme si parkinsoni</br>
                          dëmtim të zemrës, lëkurës, muskujve.</br>
                          parandalon dhe ndihmon në luftimin e kancerit
                        </p>
                      </li> 
                      <li>
                        <strong>Vitaminë B kompleks natyrale</strong>
                        <p>
                          e mirnjohur për parandalimin e infeksioneve</br>
                          nxit dhe zhvillon shëndetin e qelizave</br>
                          dhe zink, të cilat kontribuojnë në funksionimin normal të sistemit nervor,</br>
                           performance më të mirë mendore dhe funksionin normal kognitiv. 
                        </p>
                      </li> 
                      <li>
                        <strong>Zinku</strong>
                        <p>
                          i cili ndihmon në forcimin e sistemit imunitar </br>
                          në luftën kundër viruseve dhe bakterive </br> 
                          përmirson shqisat si dhe ndihmon në shërimin e shpejtë të plagëve. 
                        </p>
                      </li>
                    </ul>`,
    },
  },

  //Milk Thistle
  {
    id: 19,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Milk Thistle",
    category: "detox",
    newest: 19,
    href: "/details/19",
    price: "$35",
    imageSrc: "../images/products/milkthistle.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Odorless Garlic
  {
    id: 20,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Odorless Garlic",
    category: "cardiovascular",
    newest: 21,
    href: "/details/20",
    price: "$35",
    imageSrc: "../images/products/odorless-garlic.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Omega Advance
  {
    id: 21,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Omega Advance",
    category: "cardiovascular",
    newest: 20,
    href: "/details/21",
    price: "$35",
    imageSrc: "../images/products/omega-advance.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Provio Max
  {
    id: 22,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Provio Max",
    category: "probiotics",
    newest: 22,
    href: "/details/22",
    price: "$35",
    imageSrc: "../images/products/proviomax.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Rhodiola
  {
    id: 23,
    isAvailable: 1,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Rhodiola",
    category: "stress",
    newest: 23,
    href: "/details/23",
    price: "$35",
    imageSrc: "../images/products/rhodiola.png",
    imageAlt: "Lorem ipsum ....",
    fields: {
      Paketimi: "30 kapsula",
      Përmbajtja: `<ul> <li><strong>&emsp;-	Ekstrakt Rodiola rosea 250 mg</strong></li> </ul> <br/>`,
      Dozimi: "1 kapsulë në ditë",
      "Përbërës të tjerë": `Celuloza mikrokristaline, arbocel, stearat magnezi bimor, aerosil, kapsulë e fortë vegjetale.`,
      "Udhëzimet e përdorimit": "Rekomandohet të merret pas vaktit",
      Rekomandohet: `<ul> 
                        <li><strong>&emsp;-	Për stresin </strong></li> 
                        <li><strong>&emsp;-	Mbështet përqendrimin dhe performancën shpirtërore</strong></li> 
                        <li><strong>&emsp;-	I përshtatshëm për vegjetarianët dhe veganët</strong></li> 
                        <li><strong>&emsp;-	Pa gluten, natrium, sheqerna, laktozë, soje</strong></li> 
                        <li><strong>&emsp;-	Kontribuon në qëndrueshmërinë, energjinë dhe tonifikimin e trupit</strong></li>
                        </ul><br/>`,
      "Të dhëna për RHODIOLA": `     
      <p>
        Superfoods Rodiola është një suplement dietik që përmban ekstrakt natyral të Rodiolës me një sasi konstante rozavine 
        për kapsulë, përbërësi bimor i njohur për vetitë e tij të dobishme adaptive. </br>
        Ndihmon trupin të përshtatet me kërkesat e ndryshme mendore dhe fizike dhe ndihmon në përballimin e stresit.</br>
        <br/>
        Agjencia Evropiane e Barnave (EMA) dhe Komiteti për Mjekësi Bimore (HMPC) kanë miratuar përdorimin e rhodiola rosea 
        si një preparat tradicional bimor afatshkurtër për lehtësim të përkohshëm nga simptomat e stresit si lodhja dhe dobësia.

        <br/>
        <br/>
        I përshtatshëm për njerëzit në ankth , kanë momente në jete shumë të ngarkuar.
  `,
      "Të tjera": `
          Mbajeni larg fëmijëve. <br/><br/>
          Pa gluten / Pa laktozë / I përshtatshëm për veganët / I përshtatshëm për vegjetarianët<br/><br/>

          <em>
            <small>
              Suplementet dietike nuk duhet të përdoren si zëvendësim për një dietë të ekuilibruar. Mos e tejkaloni dozën e rekomanduar ditore. Ky produkt nuk ka për qëllim parandalimin, trajtimin ose shërimin e ndonjë sëmundjeje. Konsultohuni me mjekun tuaj nëse jeni shtatzënë, ushqeni me gji, merrni medikamente ose keni ndonjë problem shëndetësor. Mund të ketë ndërveprime dhe efekte anësore të mëtejshme nga ato të listuara. Rekomandimi i ofruesit të kujdesit shëndetësor ka përparësi ndaj informacionit në faqen e internetit.
              <br/>
              Gentius sh.p.k bën çdo përpjekje për të siguruar që informacioni dhe imazhet e produkteve të ofruara në faqen e internetit të jenë të sakta. Megjithatë, variacionet për shkak të ndryshimeve nga prodhuesi janë të mundshme. Ne ju rekomandojmë që të lexoni me kujdes etiketat, masat paraprake dhe udhëzimet e përdorimit të të gjitha produkteve përpara se t'i përdorni.
            </small>
          </em>
         `,
      Magazinimi: `Mbajeni produktin në një vend të thatë dhe të freskët deri në 25°C (77°F) dhe mbrojeni nga drita. Kushtet e papërshtatshme të ruajtjes, të tilla si ekspozimi i zgjatur në rrezet e diellit, temperatura e lartë, lagështia dhe kushtet e ngrirjes, mund të rezultojnë në ndryshime të produktit.`,
    },
    about: ``,
    relatedProducts: [2, 3],
  },

  //Royal Jelly
  {
    id: 24,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Royal Jelly",
    category: "cold",
    newest: 24,
    href: "/details/24",
    price: "$35",
    imageSrc: "../images/products/royaljelly.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Sambucus
  {
    id: 25,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Sambucus",
    category: "cold",
    newest: 25,
    href: "/details/25",
    price: "$35",
    imageSrc: "../images/products/sambucus.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //S-Form
  {
    id: 26,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "S-Form",
    category: "weight",
    newest: 26,
    href: "/details/26",
    price: "$35",
    imageSrc: "../images/products/s-form.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Sleep Mood
  {
    id: 27,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Sleep Mood",
    category: "stress",
    newest: 27,
    href: "/details/27",
    price: "$35",
    imageSrc: "../images/products/sleep-mood.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Spirulina Gold
  {
    id: 28,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Spirulina Gold",
    category: "enhancement",
    newest: 28,
    href: "/details/28",
    price: "$35",
    imageSrc: "../images/products/spirulina.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Vitamin C
  {
    id: 29,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Vitamin C",
    category: "cold",
    newest: 29,
    href: "/details/29",
    price: "$35",
    imageSrc: "../images/products/vitamin-c.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Your Bar Strawberry
  {
    id: 30,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Your Bar Strawberry",
    newest: 30,
    href: "/details/30",
    price: "$35",
    imageSrc: "../images/products/your-bar-strawberry.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //Green Tea
  {
    id: 31,
    isAvailable: 0,
    vendor: "superfood",
    rating: 3,
    topProduct: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    name: "Green Tea",
    category: "weight",
    newest: 31,
    href: "/details/31",
    price: "$35",
    imageSrc: "../images/products/green-tea.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    relatedProducts: [2, 3],
  },

  //pharmalead

  //Oral Spray
  {
    id: 32,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 1,
    description: "Oral spray for grown ups",
    name: "Oral Spray",
    category: "cold",
    newest: 32,
    href: "/details/32",
    price: "$35",
    imageSrc: "../images/products/propolis-oral-spray.webp",
    coverImageUrl: "../images/background/propolis-plus.jpg",
    imageAlt: "Propolis",
    relatedProducts: [33],
    about: `
    <p>
      Spray që përmban propolis, mjaltë, echinacea, dredhkë dhe Vitaminë C për dhimbjen e fytit. </br>
      I përshtatshëm për ftohjet dhe dhimbjet e fytit për shkak të ndotjes së ajrit. </br>
      Përbërësit e tij zbusin dhe qetësojnë fytin me shijen e mollës jeshile.
    </p>
    <p>
      Propolisi ka qenë i njohur që në lashtësi për vetitë e tij të dobishme. </br>
      Përbërësit e tij tradicionalisht ndihmojnë në forcimin e mbrojtjes natyrore të trupit për të ndihmuar në trajtimin e simptomave të ftohjes së zakonshme.
    </p>
      `,
    fields: {
      Bottle: "30ml",
      Usage:
        "Shkundni para përdorimit. Spërkatni 2 herë në bazën e fytit, tri herë në ditë. Të mbahet në frigorifer pas hapjes.",
      Ingredients: `<ul> 
      <li>
        <strong>Mjalti i fuqishëm Manuka</strong> 
        <p>është i pasur me antioksidantë dhe siguron përfitime të shkëlqyera ushqyese për trupin. 
        </p>
      </li> 

      <li>
        <strong>Vitamina C</strong>
        <p>
          kontribuon në funksionimin normal të sistemit imunitar dhe zvogëlon lodhjen, 
          rrit absorbimin e hekurit dhe kontribuon në formimin normal të kolagjenit 
          për funksionimin normal të kockave, duke mbrojtur qelizat nga stresi oksidativ.
        </p>
      </li> 
      <li>
        <strong>Zinku</strong>
        <p>
          kontribuon në funksionimin normal të sistemit imunitar. 
        </p>
      </li> 
      <li>
        <strong>Trumza, Dredhkë, Eukalipt, Althae Anise</strong>
        <p>
          janë bimë me një kontribut të njohur tradicionalisht në shëndetin e sistemit të frymëmarrjes
          dhe zgavrën e gojës dhe faringut.
        </p>
      </li> 
     </ul>`,

      Without: " Alkool, Gluten, Laktozë, Ngjyrues",
    },
  },

  //Kids Oral Spray
  {
    id: 33,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Oral spray for kids",
    name: "Kids Oral Spray",
    category: "cold",
    newest: 33,
    href: "/details/33",
    price: "$35",
    imageSrc: "../images/products/propolis-kids.webp",
    coverImageUrl: "../images/background/propolis-plus-kids.jpg",
    imageAlt: "Propolis + Kids",
    relatedProducts: [32],
    about: `
    <p>
      Shtesë ushqyese për dhimbjen e fytit dhe kollës </br>
      Spray Oral me Propolis & Mjaltë Manuka, Probiotikë, Althea, Ivy, Vit. C & Zink</br>
      Për trajtim të infeksioneve orale dhe faringut, lehtësimi i dhimbjes së fytit. </br>
      Forcon sistemin imunitar. Me përbërje të sigurt bimor. </br>
    </p>
    <p>
      I përshtatshëm për fëmijët 3 vjeç e lart </br>
      I përshtatshëm për homeopatinë.</br>
      Shije qershie.
    </p>
      `,
    fields: {
      Bottle: "30ml",
      Usage:
        "3-4 spërkatje me gypin e veçantë në gojë dhe fyt, 3 herë në ditë (1ml). Pas hapjes mbajeni ne frigorifer",
      Ingredients: `<ul> 
      <li>
        <strong>Vitamina C</strong> 15mg        
      </li> 
      <li>
      <strong>Ekstrakt i thatë Propolis</strong> std 3%      
    </li> 
    <li>
      <strong>Polifenole-Mjaltë Manuka</strong> std 25% Polifenole 2mg        
    </li> 
    <li>
      <strong>Ekstrakt Althea</strong> 1mg       
    </li> 
    <li>
       <strong>Zink (si zink glukonat)</strong> 0.28mg     
    </li> 
    <li>
       <strong>Ekstrakt dredhkë</strong> 0.14mg      
    </li> 
    <li>
       <strong>Probiotik, Bacillus coagulans- Bacillus subtilis - Bacillus licheniformis</strong> 1.65mg      
    </li> 
    `,

      Without: " Sheqer të shtuar, Alkool, Gluten, Laktozë, Ngjyrues",
    },
  },

  //Vitamin D3
  {
    id: 34,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Vitamin D3",
    name: "Vitamin D3",
    category: "enhancement",
    newest: 34,
    href: "/details/34",
    price: "$35",
    imageSrc: "../images/products/vitamin-d3.webp",
    coverImageUrl: "../images/background/vitamin-d3.jpg",
    imageAlt: "Vitamine D3",
    relatedProducts: [32, 33],
    about: `
    <p>
      VITAMINA D3 Vitorgan Pharmalead (kolekalcoferol) është shtesë  ushqimor e cila  kontribuon: </br>
      në përthithjen/shfrytëzimin normal të kalciumit dhe fosforit </br>
      në nivelet normale të kalciumit në gjak </br>
      në ruajtjen e kockave dhe dhëmbëve normalë </br> 
      në ruajtjen e funksionit normal të muskujve </br>
      në funksionin normal të sistemit imunitar. 
      </br>
      </br>
      Prodhuar nga Vitorgan Greqi
    </p>
      `,
    fields: {
      Capsules: "60",
      Usage: "1 tabletë në ditë pas ngrënies",
      Recommended: `
      <ul> 
        <li>
          Fëmijët nga 12 vjeç e lart    
        </li>
        <li>
          Diabetikët    
        </li>
        <li>
          Vegjetarianët    
        </li>
        <li>
          Homeopati    
        </li>
      </ul> 
    `,

      Without: " Sheqer, Kripë, Drithëra, Gluten, Laktozë, Konservues, OMGJ",
    },
  },

  //Vitamin C Plus 1500mg
  {
    id: 35,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 1,
    description:
      "Maintaining the normal function of the immune system, protecting cells from oxidative stress, helping reduce fatiogue and tiredness.",
    name: "Vitamin C Plus 1500mg",
    category: "cold",
    newest: 35,
    href: "/details/35",
    price: "$35",
    imageSrc: "../images/products/vitamin-c-plus.png",
    coverImageUrl: "../images/background/vitamin-c-plus.jpg",
    imageAlt: "Vitamin C Plus",
    relatedProducts: [32, 33],
    about: `
    <p>
      PharmaLead Vitamin C 1500 mg Plus është një suplement ushqimor me vitamina C, D3 & K1 dhe zink në formë eferveshente. </br>
      Ka një shije të këndshme dhe është një zgjedhje ideale për mbështetjen e sistemit imunitar.      </br>
      Vitaminat C & D dhe zinku kontribuojnë në funksionimin normal të sistemit imunitar, ndërsa vitamina C dhe zinku 
      ndihmojnë në mbrojtjen e qelizave nga stresi oksidativ. </br>
      Vitamina K kontribuon në gjendjen normale të kockave dhe koagulimit të gjakut. </br>
      Vitamina C gjithashtu kontribuon në reduktimin e lodhjes dhe lodhjes, funksionimin normal të sistemit nervor, 
      funksionin normal psikologjik dhe funksionimin normal të proceseve metabolike që synojnë prodhimin e energjisë </br>
      Përveç kësaj, vitamina D ndihmon në ruajtjen e gjendjes normale të kockave dhe dhëmbëve dhe ruan funksionin normal të muskujve, 
      ndërsa zinku gjithashtu kontribuon në funksionin normal njohës, pjellorinë dhe riprodhimin normal dhe 
      ndihmon në ruajtjen e gjendjes normale të kockave, flokëve, thonjve dhe lëkurë. 
    </p>
      `,
    fields: {
      Tablets: "20",
      Usage: "Shpërbëhet në një gotë me ujë",
      Without: " Sheqer, Gluten, Laktozë",
    },
  },

  //Magnesium With Vitamin B6 and Potassium
  {
    id: 36,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "For the normal functioning of the nervous and muscular system",
    name: "Magnesium With Vitamin B6 and Potassium",
    category: "enhancement",
    newest: 36,
    href: "/details/36",
    price: "$35",
    imageSrc: "../images/products/magnesium.webp",
    coverImageUrl: "../images/background/magnesium.jpg",
    imageAlt: "Magnesium",
    relatedProducts: [32, 33],
    about: `
    <p>
      Food supplement in effervescent tablets that helps the normal functioning of teeth
      and bones. Maintains a normal heart rate, helps treat premenstrual syndrome and
      reduces stress.
    </p>
      `,
    fields: {
      Tablets: "20",
      Ingredients: `<ul> 
      <li>
        <strong>Magnezi (250mg/tablet)</strong> 
        <p>
            ndihmon në ruajtjen e gjendjes normale të eshtrave dhe muskujve, 
            funksionimin normal të sistemit nervor dhe funksionin psikologjik. </br>
            Gjithashtu kontribuon në funksionimin normal të proceseve metabolike që synojnë 
            prodhimin e energjisë. 
        </p>
      </li> 
      <li>
        <strong>Vitamina B6 (1.4mg/tablet)</strong>
        <p>
          kontribuon në funksionimin normal të proceseve metabolike që synojnë prodhimin e energjisë,
          formimin normal të qelizave të kuqe të gjakut dhe metabolizmin normal të proteinave.
        </p>
      </li> 
      <li>
        <strong>Kalium (100mg/tablet)</strong>
        <p>
          kontribuon në funksionimin normal të sistemit nervor, muskujve dhe presionit normal të gjakut. 
        </p>
      </li> 
      <li>
        <strong>Të tjera</strong>
        <p>
          Acid limoni, karbonate natriumi, sorbitole, ëmbëlsues (sukralozë), shije gëlqereje, riboflavina, polietilen glikol.
        </p>
      </li> 
     </ul>`,
      Usage: "Dissolve 1 tablet daily in 200ml of water.",
    },
    Without: " Gluten, Sheqer te shtuar, Laktozë, Konservues",
  },

  //Vitamin C 1000mg
  {
    id: 37,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Maintaining the normal function of the immune system, protecting cells from oxidative stress, contributing to the formation of collagen",
    name: "Vitamin C 1000mg",
    category: "cold",
    newest: 37,
    href: "/details/37",
    price: "$35",
    imageSrc: "../images/products/vitamin-c-1000.png",
    coverImageUrl: "../images/background/vitamin-c-1000.jpg",
    imageAlt: "Vitamin C 1000",
    relatedProducts: [32, 33],
    about: `
    <p>
      Vitamina C është aleati ideal në funksionimin e duhur të sistemit imunitar, 
      lufton në mënyrë efektive infeksionet dhe pengon përhapjen e agjentëve viralë. </br>
      Marrja e vitaminës C lehtëson thithjen e hekurit, duke qenë kështu zgjedhja e duhur në rastet e anemisë ose gjatë menstruacioneve.</br>
      Ofron ndihmë të vlefshme në funksionimin normal të sistemit psikologjik dhe nervor, 
      kështu që është shtesa ideale dietike për duhanpirësit dhe njerëzit me ankth të rëndë.

      Marrja e vitaminës C lehtëson thithjen e hekurit, duke qenë kështu zgjedhja e duhur në rastet e 
      anemisë ose gjatë menstruacioneve. </br>
      Ofron ndihmë të vlefshme në funksionimin normal të sistemit psikologjik dhe nervor, 
      kështu që është shtesa ideale dietike për duhanpirësit dhe njerëzit me ankth të rëndë.
    </p>
      `,
    fields: {
      Tablets: "20",
      Benefits: `<ul> 
      <li>
        Ndihmon në uljen e lodhjes dhe lodhjes 
      </li> 
      <li>
        Aftësia e saj për të rritur funksionin e prodhimit të kolagjenit në trup
      </li> 
      <li>
        Kontribuon në funksionimin normal të eshtrave, kërcit, enëve të gjakut, 
        dhëmbëve dhe mishrave të dhëmbëve
      </li> 
      <li>
        Veprimi i tij i fortë antioksidues;  lufton radikalet e lira.
      </li> 
      <li>
        mbron nga shenjat e plakjes së parakohshme.
      </li>       
     </ul>`,
      Usage: "Dissolve 1 tablet daily in 200ml of water, before meal..",

      Without: " Gluten, Laktozë, Konservues",
    },
  },

  //Probiotic Advance
  {
    id: 38,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Irritable Bowel Syndrome, restoration of the intestinal flora",
    name: "Probiotic Advance",
    category: "probiotics",
    newest: 38,
    href: "/details/38",
    price: "$35",
    imageSrc: "../images/products/probiotic-advance.webp",
    coverImageUrl: "../images/background/probiotic-advance.png",
    imageAlt: "Probiotic Advance",
    relatedProducts: [32, 33],
    about: `
    <p>
      NutraLead Probiotic Advance kombinon veprimin e 8 probiotikëve të specializuar Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus paracasei, Lactobacillus delbrueckii ssp bulgaricus, Bifidobacterium animalis ssp lactis, longifactus..
      Rivendos funksionimin normal të florës së zorrëve, ndihmon në krijimin e një mjedisi jo mikpritës për rritjen e mikrobeve, krijon një membranë biologjike mbrojtëse në mukozën
    </p>
    <p>
      Kapsulat e veshura me zorrë me guaskë rezistente ndaj acidit, të cilat treten në mjedisin e zorrëve, mbrojnë biodisponibilitetin e përbërësve
      Probiotikët rekomandohen gjatë marrjes së ilaçeve (antibiotikë). 
      Ato gjithashtu ndihmojnë në trajtimin e një sërë simptomash të quajtura çrregullime të tretjes (diarre, kapsllëk, fryrje) të shkaktuara nga dieta e dobët, stresi dhe stresues të tjerë.
    </p>
      `,
    fields: {
      Capsules: "7",
      Benefits: `<ul> 
      <li>
        Rivendos funksionimin e duhur të florës së zorrëve 
      </li> 
      <li>
        Ndihmon në krijimin e një mjedisi jo mikpritës që mikrobet të rriten
      </li> 
      <li>
         Krijon një membranë biologjike mbrojtëse në mukozën
      </li> 
      <li>
        Lehtëson simptomat e sindromës së zorrëve të irritueshme
      </li>   
     </ul>`,
      Usage: "1 capsule daily with meal.",

      Without: " Gluten, Laktozë, Konservues",
    },
  },

  //Thermo Cream
  {
    id: 39,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Immediate relief from common colds, flu and warming up for athletes, with analgesic muscle relaxant action",
    name: "Thermo Cream",
    category: "joint",
    newest: 39,
    href: "/details/39",
    price: "$35",
    imageSrc: "../images/products/thermo-active.webp",
    coverImageUrl: "../images/background/thermo-active.jpg",
    imageAlt: "Thermo Active",
    relatedProducts: [32, 33],
    about: `
    <p>
      Krem trupi me ekstrakt të bimës Eukalipt & Arnica, i krijuar posaçërisht me përbërës bimorë
       që kanë veti analgjezike dhe relaksuese të muskujve. </br>
       Ndihmon në lehtësimin e menjëhershëm nga çdo lloj shqetësimi të muskujve 
       (ftohje, grip, shtrëngim, tërheqje, ngërçe, ndrydhje, thyerje, zhvendosje).
    </p>
    <p>
      I përshtatshëm për aplikime lokale dhe të plota.  
      Ideale për ngrohjen e atletëve.
    </p>
    <p>
      Mbani jashtë mundësive të fëmijëve në një vend të freskët dhe të lagësht.
    </p>
      `,
    fields: {
      Tube: "100ml",
      Ingredients: `<ul> 
      <li>
        <strong> Vaj djegës</strong>
        <p>
           i cili rrit qarkullimin e gjakut dhe gjeneron nxehtësi intensive në zonat 
           e dhimbshme të trupit, duke siguruar lehtësim dhe mirëqenie afatgjatë
        </p> 
      </li> 
      <li>
        <strong> Vaj Eukalipti, Mentol, Vaj Karafili, Trumzë dhe ekstrakt Arnica</strong>
        <p>
          janë përbërës me veti të njohura analgjezike, qetësuese dhe tonike.
        </p>  
      </li>     
     </ul>`,
      Usage:
        "Aplikoni 2-3 herë në ditë në zonën ku është problemi (qafa, shpatullat, krahët, beli, gjunjët, këmbët) një sasi të kremit dhe masazhojeni lehtë. Vetëm për përdorim të jashtëm. Mos aplikoni në plagë të hapura dhe mukozë (sy, hundë, buzë).",
    },
  },

  //Haemosooth Cream
  {
    id: 40,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Hemorrhoid care, mild, cleansing and soothing action for daily use in the periproctitic area",
    name: "Haemosooth Cream",
    category: "selfhealing",
    newest: 40,
    href: "/details/40",
    price: "$35",
    imageSrc: "../images/products/haemosooth-cream.webp",
    coverImageUrl: "../images/background/haemosooth-cream.jpg",
    imageAlt: "Haemosooth",
    relatedProducts: [32, 33],
    about: `
    <p>
      Krem bimor me calendula, vaj ulliri dhe ekstrakt kamomili.
      Ofron veprim të butë qetësues dhe pastrues për përdorim të përditshëm në trajtimin e hemorroideve.
      I testuar dermatologjikisht pa vaj mineral kultivuar organikisht.    
    </p>
    <p>
      Vetëm për përdorim të jashtëm. </br>
      Mbajeni larg arritjes së fëmijëve, në një vend të thatë dhe të ftohtë.
    </p>`,
    fields: {
      Tube: "30ml",
      Ingredients: `<ul> 
      <li>
        <strong> Ujë hamamelis, kamomil, mentol dhe calendula</strong>
        <p>
          me veti të pasura qetësuese dhe anti-inflamatore.
        </p> 
      </li> 
      <li>
        <strong> Vaj ulliri, allantoina dhe glicerina</strong>
        <p>
          hidratojnë lëkurën dhe e mbajnë atë të butë, 
          ndërsa Escin (përbërës bimor i gështenjës së egër), dhe mentës njihen për 
          veprimin e tyre tonik dhe freskues, duke dhënë një ndjenjë freski dhe higjiene
        </p>    
      </li>     
     </ul>`,
      Usage:
        "Lani me ujë të vakët dhe më pas me ndihmën e aplikuesit special aplikojeni kremin pas çdo defekimi dhe para gjumit derisa simptomat të qetësohen.",
    },
  },

  //Moisturizing hand cream
  {
    id: 41,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Hydration, elasticity, regeneration of hand’s skin",
    name: "Moisturizing hand cream",
    category: "wellness",
    newest: 41,
    href: "/details/41",
    price: "$35",
    imageSrc: "../images/products/moisturizing-cream.webp",
    coverImageUrl: "../images/background/moisturizing-cream.jpg",
    imageAlt: "Moisturizing hand cream",
    relatedProducts: [32, 33],
    about: `
    <p>
      Kremi hidratues i duarve dhe thonjve, i cili rikthen lagështinë natyrale dhe elasticitetin e lëkurës, përshpejton rigjenerimin e tij dhe vonon shenjat e plakjes së parakohshme.
      Ideal për mbrojtjen e lëkurës nga faktorët e dëmshëm të mjedisit (dielli, era, uji, punë manuale intensive). 
      Thithet  menjëherë, pa yndyrë, siguron duar me cilësi të butë dhe kadifeje.      
    </p>
    <p>
      Vetëm për përdorim të jashtëm. </br>
      Mbajeni larg arritjes së fëmijëve.
    </p>`,
    fields: {
      Tube: "50ml",
      Ingredients: `<ul> 
      <li>
        <strong> Vaji i ullirit</strong>
        <p>
          i cili mbron lëkurën dhe përmirëson pamjen e saj, duke vonuar plakjen.
        </p> 
      </li> 
      <li>
        <strong> Ure</strong>
        <p>
          njihni përbërësin hidratues që balancon hidratimin e lëkurës.
        </p>  
      </li>     
      <li>
        <strong> Vaji i Arganit</strong>
        <p>
        vaj fiks i shprehur nga thelbi i palmës së vajit.
        </p>  
      </li>     
      <li>
        <strong> Argania spinosa</strong>
        <p>
          i cili përkëdhel dhe rinon lëkurën.
        </p>  
      </li>   
     </ul>`,
      Usage:
        "Aplikoni kremin çdo ditë në duar dhe zonën përreth thonjve, duke masazhuar butësisht, derisa të absorbohet.",
    },
  },

  //Arnica Cream
  {
    id: 42,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Relief and coverage of bruises and swelling from bumps, insect bites and skin irritations",
    name: "Arnica Cream",
    category: "wellness",
    newest: 42,
    href: "/details/42",
    price: "$35",
    imageSrc: "../images/products/arnica-cream.webp",
    coverImageUrl: "../images/background/arnica-cream.jpg",
    imageAlt: "Arnica Cream",
    relatedProducts: [32, 33],
    about: `
    <p>
       Pharmalead Arnica Cream është një krem i përshtatshëm për lehtësimin dhe mbulimin e edemave, 
       mavijosjeve dhe ënjtjeve të shkaktuara nga balluket, pickimet e insekteve dhe acarimet e lëkurës.  
    </p>
    <p>
      Vetëm për përdorim të jashtëm. </br>
      Shmangni kontaktin në sy.
    </p>`,
    fields: {
      Tube: "50ml",
      Ingredients: `<ul> 
      <li>
        <strong> Tinktura e arnicës</strong>
        <p>
          përbërësit e dobishëm të bimës përdoren tradicionalisht për të trajtuar dhe lehtësuar ënjtjet, mavijosjet, acarimet.
        </p> 
      </li> 
      <li>
        <strong>Ekstrakti Ruscus</strong>
        <p>
          jep një ndjenjë lehtësimi dhe qetësimi.
        </p>  
      </li>     
      <li>
        <strong>Vaji esencial i rigonit</strong>
        <p>
           i pasur me minerale dhe oligoelemente me veti të forta antioksiduese dhe të buta astringente.
        </p>  
      </li>     
      <li>
        <strong> Mentol</strong>
        <p>
          ofron një ndjenjë freskie
        </p>  
      </li>   
      <li>
        <strong> Panthenol</strong>
        <p>
           aftësitë e tij hidratuese janë ideale për kujdesin e lëkurës së dehidratuar ose të irrituar.
        </p>  
      </li> 
     </ul>`,
      Benefits: `<ul> 
      <li>
        Ka një ngjyrë të lehtë, natyrale
      </li>         
      <li>
      Ofron një ndjenjë të këndshme freskie
      </li> 
      <li>
      Lehtëson nga pickimet dhe acarimetl
      </li> 
      <li>
      I përshtatshëm për të gjitha llojet e lëkurës, duke përfshirë edhe ato të ndjeshme.
      </li> 
     </ul>
    `,
      Usage:
        "Aplikojeni produktin me lëvizje rrethore në zonën që dëshironi të qetësoni dhe mbuloni.",
    },
  },

  //Nyhofort
  {
    id: 43,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Against nail biting",
    name: "Nyhofort",
    category: "wellness",
    newest: 43,
    href: "/details/43",
    price: "$35",
    imageSrc: "../images/products/nyhofort.webp",
    coverImageUrl: "../images/background/nyhofort.jpg",
    imageAlt: "Nyhofort",
    relatedProducts: [32, 33],
    about: `
    <p>
      Nyhofort ka një furçë të veçantë për aplikim të lehtë dhe mund të përdoret si bazë apo edhe në thonjtë e lyer.
      Shija e tij shumë e hidhur ju pengon të vendosni gishtat në gojë, duke ju çliruar përgjithmonë dhe menjëherë nga kafshimi i thonjve.
    </p>
    <p>
      Nuk ndikon në manikyrën</br>
      I përshtatshëm për të rritur dhe fëmijë nga 3 vjeç.
    </p>`,
    fields: {
      Tube: "10ml",
      Benefits: `<ul> 
      <li>
         Lehtëson onikofaginë
      </li>         
      <li>
         Parandalon shkatërrimin e thonjve
      </li>
     </ul>
    `,
      Usage: "Aplikojeni në thonjtë çdo ditë sa herë të dëshironi.",
      Without: "Konservues dhe alergjenë.",
    },
  },

  //Baby Nappy Cream
  {
    id: 44,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Protection against irritations and rashes for everyday diaper change nail biting",
    name: "Baby Nappy Cream",
    category: "babycare",
    newest: 44,
    href: "/details/44",
    price: "$35",
    imageSrc: "../images/products/baby-nappy-cream.webp",
    coverImageUrl: "../images/background/baby-nappy-cream.jpg",
    imageAlt: "Baby Nappy Cream",
    relatedProducts: [32, 33],
    about: `
    <p>
       Krem i butë i papërshkueshëm nga uji, i përshtatshëm për çdo ndryshim të pelenës së foshnjës tuaj. </br>
       Krijon një film të papërshkueshëm nga uji për të mbrojtur lëkurën nga acarimi dhe lagështia
       që mund të shkaktojë djegie nga dielli; parandalon humbjen e lagështirës dhe ka një aromë të butë 
       dhe delikate.
    </p>
    <p>
       Vetëm për përdorim të jashtëm.
    </p>`,
    fields: {
      Tube: "150ml",
      Ingredients: `<ul> 
      <li>
        <strong> Proteinat e qumështit</strong>
        <p>
           të pasura me aminoacide, lidhin dhe mbajnë lagështinë natyrale të lëkurës, duke e mbrojtur atë nga dehidratimi.
        </p> 
      </li> 
      <li>
        <strong>Ekstrakti i Sherebelës </strong>
        <p>
            përmban antioksidantë natyralë që lidhin radikalet e lira dhe qetësojnë acarimet
        </p>  
      </li>     
      <li>
        <strong>H Allantoin</strong>
        <p>
           zbut acarimet, qetëson dhe ndihmon në rinovimin dhe rivendosjen e shëndetit të lëkurës.
        </p>  
      </li>     
      <li>
        <strong> H Panthenol</strong>
        <p>
            i njohur si provitamina B5, është një agjent hidratues dhe është ideal për kujdesin e lëkurës së thatë ose të irrituar.      
        </p>  
      </li>   
      <li>
        <strong> Η Bisabolol</strong>
        <p>
           një përbërës natyral me veprim qetësues dhe të butë antimikrobik, është ideal për lëkurën e irrituar ose të ndjeshme
        </p>  
      </li> 
      <li>
      <strong> Gjalpi Shea</strong>
      <p>
         është i pasur me vitamina A, E, F dhe acide yndyrore omega që ushqejnë dhe hidratojnë lëkurën.
      </p>  
    </li> 
     </ul>`,
      Benefits: `<ul> 
      <li>
         Hidraton lëkurën e foshnjës dhe të fëmijëve
      </li>         
      <li>
         Mbron kundër acarimit dhe kapsllëkut
      </li>
      <li>
          Parandalon humbjen e lagështirës
      </li>
     </ul>
    `,
      Usage:
        "Aplikoni kur ndërroni pelenën, pas pastrimit në lëkurë të thatë, në zonën e femurit.",
      Without: "Parabenë, Vaj mineral, Alergenë, Ngjyrues.",
    },
  },

  //Baby Shampoo + Bath
  {
    id: 45,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Gentle shower for sensitive baby skin, for body and hair",
    name: "Baby Shampoo + Bath",
    category: "babycare",
    newest: 45,
    href: "/details/45",
    price: "$35",
    imageSrc: "../images/products/baby-shampoo.webp",
    coverImageUrl: "../images/background/baby-shampoo.jpg",
    imageAlt: "Baby Shampoo",
    relatedProducts: [32, 33],
    about: `
    <p>
        Shampo e butë dhe xhel dushi për kujdesin e përditshëm të lëkurës së ndjeshme të foshnjës,
        me agjentë hidratues natyralë, zbutës dhe ekstrakte bimore që respektojnë pH natyral të foshnjës.
    </p>
    <p>
        Përbërje e pasuruar me proteina qumështi që hidratojnë dhe mbrojnë lëkurën e ndjeshme të bebes,
         duke i dhënë butësi. </br>
         Njëkohësisht, ekstrakti i kamomilit, me vetitë e tij zbutëse, ofron veprim qetësues, 
         antiinflamator dhe antiseptik, ndërsa ekstrakti i sherebelës siguron mbrojtje natyrale 
         antibakteriale, rinovon lëkurën dhe qetëson irritimet.
    </p>
    <p>I testuar dermatologjikisht dhe klinikisht </p>
    `,
    fields: {
      Bottle: "500ml",
      Ingredients: `<ul> 
      <li>
        <strong> Proteinat e qumështit</strong>
      </li> 
      <li>
        <strong>Ekstrakte të sherebelës </strong>
      </li>     
     </ul>`,
      Benefits: `<ul> 
      <li>
         Me një aromë të butë
      </li>         
      <li>
         Mbron nga acarimi
      </li>
      <li>
          Ofron mbrojtje antimikrobike
      </li>
      <li>
          Zbut lëkurën
      </li>
     </ul>
    `,
      Without: "Sapun, alkale dhe alergenë",
    },
  },

  //pharmalab

  //VitaPreg
  {
    id: 46,
    isAvailable: 1,
    vendor: "pharmalab",
    rating: 5,
    topProduct: 0,
    description: "Vitamins for pregancy",
    name: "VitaPreg",
    category: "women",
    newest: 46,
    href: "/details/46",
    price: "$35",
    imageSrc: "../images/products/vitapreg.jpg",
    coverImageUrl: "../images/background/vitapreg.jpg",
    imageAlt: "VitaPreg",
    relatedProducts: [32, 33],
    about: `
    <p>
      VITAPREG është një formulë e përparuar e multivitaminave, mineraleve dhe elementëve gjurmë 
      për gratë që planifikojnë për shtatëzani, gjatë shtatëzanisë dhe gjatë gjidhënies.
    </p>
    `,
    fields: {
      Tablets: "30",
      Ingredients: `<ul> 
      <li>
        <strong> Kalçium</strong>
        <p> 
          rrit zhvillimin e kockave dhe dhëmbëve.
          Ai gjithashtu rrit prodhimin e qumështit të gjirit.
        </p>
      </li> 
      <li>
          <strong> Jodi</strong>
          <p> luan një rol të rëndësishëm në rregullimin e gjëndrës tiroide</p>
      </li> 
      <li>
          <strong> Krom, Selen, Bakër, Zink</strong>
          <p> dhezinkujanë elementë gjurmë që kërkohen gjatë shtatëzanisë për zhvillimin dhe rritjen e shëndetshme të foshnjës</p>
      </li> 
      <li>
          <strong> Hekur</strong>
          <p>Hekurirekomandohet për gratë shtatzëna për të parandaluar aneminë e nënës, sepsën puerperale, peshën e ulët të lindjes dhe lindjen e parakohshme </p>
      </li> 
      <li>
          <strong> Acidi folik</strong>
          <p> është një vitaminë e rëndësishme B për shëndetin e foshnjës së palindur për të parandaluar keqformime të caktuara të trurit, kafkës dhe shpinë që quhen defekte të tubit nervor</p>
      </li> 
      <li>
          <strong> Multivitamina (B1, B2, B6, B12, C, D, E & K)</strong>
          <p> janë të gjitha vitaminat prenatale dhe ato janë të nevojshme dhe të rëndësishme në planifikim, gjatë shtatëzënësisë dhe gjatë ushqyerjes me gji për zhvillimin të shëndetshëm të fëmijës.</p>
      </li>  
     </ul>`,
      Recommended: `<ul> 
      <li>
        Femrat që planifikojnë shtatzani
      </li>         
      <li>
         Femrat që janë shtatzëna
      </li>
      <li>
        Femrat pas lindjes dhe që kanë femijë në gji
      </li>
     </ul>
    `,
      Usage: "Sipas udhezimeve të specialistit",
    },
  },

  //Modus
  {
    id: 47,
    isAvailable: 1,
    vendor: "pharmalab",
    rating: 5,
    topProduct: 0,
    description:
      "MODUS Calm day in the form of herbal tablets is recommended for supplementation during the period of intense stress, nervous tension, irritability and agitation during the day.",
    name: "Modus",
    category: "stress",
    newest: 47,
    href: "/details/47",
    price: "$35",
    imageSrc: "../images/products/modus.jpg",
    coverImageUrl: "../images/background/modus.jpg",
    imageAlt: "Modus",
    relatedProducts: [32, 33],
    about: `
    <p>
    MODUS calm day është vitaminë bimore  në formën  tablete.  Vitamina B6 kontribuon në rregullimin e aktivitetit hormonal, për më tepër, së bashku me magnezin kontribuojnë në funksionimin normal të sistemit nervor, në funksionimin normal psikologjik dhe në uljen e lodhjes.P��rbërja e përgatitjes e plotësuar me ekstrakte të vlefshme bimore.
    </p>

    `,
    fields: {
      Tablets: "30",
      Ingredients: `<ul> 
      <li>
        <strong> Barishte limoni (Melissa officinalis)</strong>
      </li> 
      <li>
         <strong> Ekstrakt kone thatë (Humulus lupulus)</strong>
      </li> 
      <li>
          <strong> Ekstrakt livande i thatë (Lavandula officinalis)</strong>
      </li> 
      <li>
          <strong> Magnezi (citrat magnezi)</strong>
      </li> 
      <li>
          <strong> Vitamina B6 (hidroklorur piridoksinë)</strong>
      </li> 
    
     </ul>`,
      Recommended: `<ul> 
      <li>
        Periudha me stres intensiv
      </li>         
      <li>
         Periudha me tension nervor
      </li>
      <li>
        Agjitacion gjatë ditës
      </li>
     </ul>
    `,
      Usage: "1 tabletë në ditë, ose sipas rekumandimeve të specialistit",
    },
  },

  //DIOSMIN & HESPERIDIN
  {
    id: 48,
    isAvailable: 1,
    vendor: "pharmalab",
    rating: 5,
    topProduct: 0,
    description: "",
    name: "DIOSMIN & HESPERIDIN",
    category: "selfhealing",
    newest: 48,
    href: "/details/48",
    price: "$35",
    imageSrc: "../images/products/diosmin.jpg",
    coverImageUrl: "../images/background/diosmin.jpg",
    imageAlt: "Diosmin",
    relatedProducts: [32, 33],
    about: `
    <p>
      Diosmin është një lloj ekstrakti  bimor që gjendet kryesisht tek agrumet.  Ajo përdoret për trajtimin e çrregullimeve të ndryshme të enëve të gjakut si hemorroide, venat me variçe, qarkullimin edobët të gjakut në këmbë (staz��n venoze) dhe gjakderdhje (hemoragjinë).
    </p>
    <p>
       Hesperidinështë një ekstrakt bimor që klasifikohet si një "bioflavonoid".Gjendet kryesisht tek agrumet.Hesperidin në kombinim me bioflavonoide të tjera agrumesh (diosmin, për shembull), përdoret për hemorroide,venat me variçedhe qarkullimi gjaku të dobët (staza venoze).
    </p>
    <p>
       Përdoret gjithashtu për të trajtuar limfedemës
    </p>
    `,
    fields: {
      Tablets: "60",
      Ingredients: `<ul> 
        <li>
          <strong> Diosmis (250 mg)</strong>
        </li> 
        <li>
          <strong> Hesperidin (50mg)</strong>
        </li> 
     </ul>`,
      Recommended: `<ul> 
      <li>
         Hemorroidet
      </li>         
      <li>
          Insuficenca kronike venoze  (stanza venoze).
      </li>
      <li>
          Hemoragjitë  nga kapilar të dobët
      </li>
      <li>
          Lymphedema
      </li>      
     </ul>
    `,
      Usage: "2 herë në ditë nga një tabletë bashkë me ushqimin për 2 muaj",
    },
  },

  //Multivita-Z
  {
    id: 49,
    isAvailable: 1,
    vendor: "pharmalab",
    rating: 5,
    topProduct: 0,
    description: "",
    name: "Multivita-Z",
    category: "enhancement",
    newest: 49,
    href: "/details/49",
    price: "$35",
    imageSrc: "../images/products/multivita.jpg",
    coverImageUrl: "../images/background/multivita.jpg",
    imageAlt: "Multivita",
    relatedProducts: [32, 33],
    about: `
    <p>
      MULTIVITA-Z është një formulë e përparuar gjithëpërfshirëse e vitaminave, mineraleve dhe elementëve gjurmë të dizajnuar për të mbështetur shëndetin, paraqitjen fizike dhe mirëqënien.Një numër i madh i reaksioneve metabolike dhe proceseve qelizore varen nga prania e këtyre substancave e cila zakonisht njihet si mikronutritientë.Mungesa e një mikronutriti mund të çojë në dëmtimin e disa proceseve metabolike në trup dhe mund të rezultojë në pasoja afatgjata në shëndet.
    </p>
    `,
    fields: {
      Tablets: "30",
      Benefits: `<ul> 
      <li>
        Energjia dhe metabolizmi përmes kalciumit, bashk����punimit, jodit, hekurit, magnezit, manganit, niacinës, acidit panthotenik dhe vitaminave B1, B2, B6, B12 & C
      </li>         
      <li>
         Përmirësues i sistemit imunitar me ndihmën e zinkut, selenit, acidit folik, bashkëpunimit, hekurit dhe vitaminave A, B6, B12, C, D3.
      </li>
      <li>
          Mbrojtja e qelizave dhe indeve nga adi i bakrit, manganit, selenit, zinkut dhe vitaminave B2, C & E.
      </li>
      <li>
          Hemoglobina dhe formimi i gjakut përmes acidit folik, hekurit dhe vitaminave B2, B6 & B12.
      </li>      
      <li>
         Funksionimi i muskujve nga kalciumi, magnezi dhe vitamina D3.
      </li>   
      <li>
         Shëndeti i vizionit me ndihmën e zinkut dhe vitaminave A & B2
      </li>   
      <li>
          Mbështet shëndetin e eshtrave nga kalciumi, magnezi, mangani, zinku dhe vitaminat D3 & K.
      </li>   
      <li>
         Lëkura e shëndetshme me ndihmën e mbështetjes së zinkut, bakrit, niacinës, jodit dhe vitaminave A & B2.
      </li>   
     </ul>
    `,
      Usage: "1 në  ditë  ose sipas udhëzimeve të  specialistit",
    },
  },

  ////DILITIUS

  //Dilitus
  {
    id: 50,
    isAvailable: 1,
    vendor: "dilitus",
    rating: 6,
    topProduct: 0,
    description: "",
    name: "Dilitus",
    category: "cold",
    newest: 50,
    href: "/details/50",
    price: "$35",
    imageSrc: "../images/products/dilitus.jpg",
    coverImageUrl: "../images/background/dilitus.jpg",
    imageAlt: "Dilitus",
    relatedProducts: [32, 33],
    about: `
    <p>
      Shurup me ekstrakte natyrale, qetëson simptomat e sistemit të frymëmarrjes të prekura nga kolla dhe gripi.
      Prodhim Italian. Përqëndrimi i ekuilibruar i përbërsve të ndryshëm natyral, si dhe pregatitja specifike e bëjnë DILITUS një shurup të shkëlqyer për mirëmbajtjen e rrugëve të frymëmarrjes.
      Mund të jepet pa frikë për të gjitha moshat pa efekte anësore.  
    </p>
    `,
    fields: {
      Bottle: "150ml",
      Recommended: `<ul> 
      <li>
        Për fëmijë dhe për të rritur
      </li>         
      <li>
         Për kollë të njomë edhe të thatë
      </li>  
      <li>
        Anti grip dhe anti rrufë
      </li>  
     </ul>
    `,
      Ingredients: `<ul> 
    <li>
      <strong> Mjaltë</strong>
      <p>
      i cili shërben për të mbrojtur sistemin e frymëmarrjes nga kolla gripale pasi përmban monosakaride dhe acetilkolinë të cilat stimulojnë mukozën e sistemit të frymëmarrjes të largoje rrufën. Gjithashtu përmban edhe nybines, një substance bakteriostatike
      </p>
    </li> 
    <li>
       <strong> Lëng Limoni</strong>
       <p> 
       ka një ndikim të madh në sistemin e frymëmarrjes  pasi përmban acid citrik për largimin e rrufës;
       </p>
    </li> 
    <li>
        <strong> Lëng Luleshtrydhe</strong>
        <p> 
        përmban acid hellagic i cili ka një efekt shumë të mirë në sistemin e frymëmarrjes të acaruar nga pirja e duhanit. 
        </p>
    </li> 
    <li>
        <strong> Kamomil</strong>
        <p>
        Përmban kalvados i cili ka veprime qetësuese dhe antiinflamatore të sistemit të frymëmarrjes. Një kombinim perfekt dhe shumë efikas. Terapi simptomatike të sistemit të frymëmarrjes, e shoqëruar me kollë dhe gëlbazë; faringjit, laringjit, trakeiti, bronkit, pneumoni.  Veçoritë balsamike, mukolitike, fluiduese, zbutëse dhe shtypëse të kollës.
        </p>
    </li> 
   </ul>`,
      Usage:
        "Për të rritur 1 lugë gjelle 3 herë në ditë. Për fëmijë 1/2 luge gjellë 3 herë në ditë.Tundet shishja mirë para përdorimit. Të mos përdoret për diabetikët.",
    },
  },

  ////VIAN

  //Tonotil
  {
    id: 51,
    isAvailable: 1,
    vendor: "vian",
    rating: 1,
    topProduct: 1,
    description:
      "A suplement that fully meets the needs for stimulation and energy",
    name: "Tonotil",
    category: "enhancement",
    newest: 51,
    href: "/details/51",
    price: "$35",
    imageSrc: "../images/products/tonotil.jpg",
    coverImageUrl: "../images/background/tonotil.jpg",
    imageAlt: "Tonotil",
    relatedProducts: [52],
    about: `
    <p>
        Shtesë ushqimore  me 4 aminoacide. 
        Stimulon në mënyrë efektive trupin dhe përmirëson gjendjen shpirtërore. 
        Përmirëson lodhjen fizike, mendore dhe shpirtrore. 
        Lufton tensionin nervor dhe ndihmon në rimëkëmbjen pas operacionit ose ndonjë sëmundje.
        Garanton marrjen ditore të përbërjeve të rëndësishme anaplastik (aminoacide thelbësore) në trup. 
        Është i dobishëm te fëmijët dhe të rinjtë që studiojnë,
        (sidomos në periudhën e provimeve) ose merren me sport dhe konsumojnë ushqime me vlera të dyshimta ushqyese.
        Rekomandohet gjithashtu për ata që ndjekin djeta të veçanta sepse zvogëlimi sasior dhe cilësor i ushqimit të marrë të redukton aminoacidet thelbësore në trup.
    </p>
    <p>TONOTIL plotëson përbërësit normalë të pamjaftueshëm të qelizave, pa e ngarkuar trupin me kimikate anormale. </p>
    `,
    fields: {
      Box: "1 box with 10 ampoules of 10ml each",
      Recommended: `<ul> 
      <li>
        Fëmijët mbi 10 vjec
      </li>         
      <li>
         Të rriturit
      </li>  
      <li>
        Të moshuarit, sepse nuk ka efekte anësore dhe është plotësisht i padëmshëm.
      </li>  
     </ul>
    `,
      Ingredients: `<ul> 
    <li>
      <strong> Arginina</strong>
      <p>
          e cila është e domosdoshme në sintezën e të gjithave proteinace ( proteinstrukturore, enzima, proteina gjaku etj). Detoksifikon trupin. 
      </p>
    </li> 
    <li>
       <strong> Glutamina</strong>
       <p> 
          luan një rol të rëndësishëm në metabolizmin e trupit sidomos në metabolizmin e indeve nervore. Merr pjesë në sintezën e acetilkolinës e cila është një neurotransmetues. Detoksifikon trurin.
       </p>
    </li> 
    <li>
        <strong> Fosfoserina dhe fosfotreonia</strong>
        <p> 
        Përfshihen në sintezën e acideve nukleike dhe më shumë fosfoproteinat e trurit. Përmban fosfor, ndaj edhe shërben si burim energjie për funksionet e trupit
        </p>
    </li> 
    <li>
        <strong> Hidroksokobalamin</strong>
        <p>
           Njihet më shumë si vitamina B12. Promovon sintezëm e proteinave të përfshira në biosintezën e acideve nukleike
        </p>
    </li> 
    <li>
        <strong> Sorbitol</strong>
        <p>
            Është sheqer i toleruar nga diabetikët sepse lejon përdorimin e vlerave të tij.  
        </p>
    </li>     
   </ul>`,
      Usage: "Të rriturit dhe fëmijët mbi 10 vjeç, një shishkë para mëngjesit",
    },
  },

  //Tonotil Plus
  {
    id: 52,
    isAvailable: 1,
    vendor: "vian",
    rating: 1,
    topProduct: 1,
    description:
      "A suplement that fully meets the needs for stimulation and energy",
    name: "Tonotil Plus",
    category: "enhancement",
    newest: 52,
    href: "/details/52",
    price: "$35",
    imageSrc: "../images/products/tonotil-plus.jpg",
    coverImageUrl: "../images/background/tonotil-plus.jpg",
    imageAlt: "Tonotil Plus",
    relatedProducts: [51],
    about: `
    <p>
      Stimulon në mënyrë efektive trupin  dhe përmirëson gjendjen shpirtërore.
      Lufton lodhjen fizike, mendore dhe shpirtrore.
      Lufton tensionin nervor dhe ndihmon ne rimëkëmbjen pas operacionit ose ndonjë sëmundje.
      Garanton marrjen ditore të përbërjeve të rëndësishme anaplastik (aminoacide thelbësore) në trup.
    </p>
    `,
    fields: {
      Box: "1 box with 10 ampoules of 10ml each",
      Recommended: `<ul> 
      <li>
          Ata që ushtrojnë veten fizikisht apo bëjnë  punë të rënda.
      </li>         
      <li>
          Ata që ushtrohen që të ruajnë formën dhe shëndetin e mirë fizik.
      </li>  
      <li>
          Ata që përdorin dieta të veçanta si vegjetarianët, veganët etj.
      </li>  
      <li>
          Ata që i janë detyruar të rrinë për një kohë  gjatë shtrirë në shtrat
      </li> 
      <li>
          Të moshuarit dhe veçanërisht të dobët.
      </li>  
     </ul>
    `,
      Ingredients: `<ul> 
    <li>
      <strong> Arginina</strong>
      <p>
          e cila është e domosdoshme në sintezën e të gjithave proteinace ( proteinstrukturore, enzima, proteina gjaku etj). Detoksifikon trupin. 
      </p>
    </li> 
    <li>
       <strong> Glutamina</strong>
       <p> 
          luan një rol të rëndësishëm në metabolizmin e trupit sidomos në metabolizmin e indeve nervore. Merr pjesë në sintezën e acetilkolinës e cila është një neurotransmetues. Detoksifikon trurin.
       </p>
    </li> 
    <li>
        <strong> Fosfoserina dhe fosfotreonia</strong>
        <p> 
        Përfshihen në sintezën e acideve nukleike dhe më shumë fosfoproteinat e trurit. Përmban fosfor, ndaj edhe shërben si burim energjie për funksionet e trupit
        </p>
    </li> 
    <li>
        <strong> Hidroksokobalamin</strong>
        <p>
           Njihet më shumë si vitamina B12. Promovon sintezëm e proteinave të përfshira në biosintezën e acideve nukleike
        </p>
    </li> 
    <li>
        <strong> Sorbitol</strong>
        <p>
            Është sheqer i toleruar nga diabetikët sepse lejon përdorimin e vlerave të tij.  
        </p>
    </li>     
    <li>
        <strong> Karnitina</strong>
        <p>
            Lehtëson përdorimin e acideve yndyrore  të larta nga organizmi dhe rrjedhimisht kontribuon në prodhimin e më shumë energjisë.
        </p>
    </li>     
   </ul>`,
      Usage: "Të rriturit dhe fëmijët mbi 10 vjeç, një shishkë para mëngjesit",
    },
  },

  ////VIANEX

  //Pricefil 500mg
  {
    id: 53,
    isAvailable: 1,
    vendor: "vianex",
    rating: 2,
    topProduct: 0,
    description: "",
    name: "Pricefil 500mg",
    category: "antibiotics",
    newest: 53,
    href: "/details/53",
    price: "$35",
    imageSrc: "../images/products/pricefil-500.jfif",
    coverImageUrl: "../images/background/pricefil.jpg",
    imageAlt: "Pricefil 500mg",
    relatedProducts: [54],
    about: `
    <p>
       Pricefil është një antibiotik i cefalosporinës i gjeneratës së dytë monohydrate që tregohet për trajtimin e pacientëve të infektuar me infeksione të shkaktuara nga shtame të ndryshme: S. Pneumoniae, H. Influenzae, safilokoket,S. Pyogenes (frupi beta-betastreptokokët hemolitikë). 
    </p>
    <p>
      Pricefil 500mg përdoret për kurimin:
      Infeksionet e traktit të poshtëm të frymëmarrjes; Bronkit: Pneumoni akute; Infeksionet e traktit të sipërm respirator; Sinusiti; Faringjiti; Amedaniti Mediat otitike akute; Infeksionet e lëkurës dhe indeve të buta; Infeksionet e traktit urinar pa komplikime.
    </p>
    `,
    fields: {
      Box: "Kuti me 1 blister x 12 tableta të veshura me film",
      Recommended: `<ul> 
      <li>
            <strong> Infeksionet e lëkurës dhe indeve të buta</strong>
            <p>1 tabletë në ditë e ndarë në 2 doza orale ose 1 tabletë në ditë ose 2 tableta në ditë në varësi të ashpërsisë së sëmundjes.</p>
      </li>         
      <li>
         <strong>Faringit - bajamet</strong>
         <p>1 tabletë në ditë</p>
      </li>  
      <li>
          <strong>Infeksionet e traktit të poshtëm të frymëmarrjes</strong>
          <p>2 kapsula në ditë</p>
      </li>  
      <li>
          <strong>Sinusit akut ose sinusit akut i përsëritur</strong>
          <p> 2 kapsula në ditë</p>
      </li> 
      <li>
          <strong>Infeksione të pakomplikuara të traktit urinar</strong>
          <p> 1 tabletë në ditë</p>
      </li>  
      <li>
          <strong>Otiti media akut</strong>
          <p>2 kapsula në ditë</p>
      </li> 
     </ul>
    `,
      Usage:
        "Pricefil 500mg merret nga goja. Ky ilaç është si çdo ilaç tjetër që duhet të merrni me recetë të mjekut tuaj. Ju nuk duhet ta rrisni dozën ose ta zvogëloni atë ose ta merrni pa recetë.",
    },
  },

  //Pricefil 250mg/5ml
  {
    id: 54,
    isAvailable: 1,
    vendor: "vianex",
    rating: 2,
    topProduct: 0,
    description: "",
    name: "Pricefil 250mg/5ml",
    category: "antibiotics",
    newest: 54,
    href: "/details/54",
    price: "$35",
    imageSrc: "../images/products/pricefil-100.jpg",
    coverImageUrl: "../images/background/pricefil.jpg",
    imageAlt: "Pricefil 250mg",
    relatedProducts: [53],
    about: `
    <p>
       Pricefil është një ilaç që përbërësi aktiv i të cilit është Cefprozil, një antibiotik i cefalosporinës i gjeneratës së dytë monohydrate që tregohet për trajtimin e pacientëve të infektuar me infeksione të shkaktuara nga shtame të ndryshme: S. Pneumoniae, H. Influenzae, safilokoket, S. Pyogenes (frupi beta-betastreptokokët hemolitikë). 
    </p>
    <p>
       Pricefil pluhur për solucion të pijshëm 250mg/5ml përdoret për kurimin: Infeksionet e traktit të poshtëm të frymëmarrjes: Bronkit;  Pneumoni akute; Infeksionet e traktit të sipërm respirator; Sinusiti; Faringjiti; Medaniti Mediat otitike akute; Infeksionet e lëkurës dhe indeve të buta; Infeksionet e traktit urinar pa komplikime.
    </p>
    <p>
        Dozimi i ilaçit për fëmijë dhe foshnje:  Duhet të përdoret si pluhur për solucion të pijshëm.  Fëmijët nga 6 muaj deri në 12 vjeç përdorni Pricefil për të paktën 10 ditë në trajtimin e infeksioneve të shkaktuara nga streptokoku beta hemolitik. Infeksionet e traktit të sipërm respirator si faringjiti, amedaniti, sinusiti, doza e rekomanduar është 20mg / kg  1 herë në ditë ose 7.5mg / kg   2 herë në ditë. Doza e rekomanduar për otitis media është 15 mg / kg çdo 12 orë. 
        Absolutisht  mos përdorni dozën maksimale për fëmijët që tejkalojnë dozën e zakonshme për të rritur. Për fëmijët nën moshën 6 muajsh, efekti nuk është vërtetuar, këshillohuni me një mjek para përdorimit.
    </p>
    `,
    fields: {
      Box: "Kuti me 1 flakon brenda",
      Usage:
        "Tundeni flakonin që të shkëputet pluhuri nga muret. Shtojini ujë deri te vija e zezë dhe tundeni fort derisa të formohet një solucion uniform. Para çdo përdorimi të tundet fort solucioni.  Ky ilaç është si çdo ilaç tjetër që duhet të merrni me recetë të mjekut tuaj.",
    },
  },

  ////PHARMALEAD  again (forgotten)

  //Collagen
  {
    id: 55,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 1,
    description:
      "With peptides that help maintain the natural structure of skin, nails, hair and the health of bones and joints",
    name: "Collagen",
    category: "wellness",
    newest: 55,
    href: "/details/55",
    price: "$35",
    imageSrc: "../images/products/collagen.jpg",
    coverImageUrl: "../images/background/collagen.jpg",
    imageAlt: "Collagen",
    relatedProducts: [53],
    about: `
    <p>
      Kollagen i lëngshëm me përqëndrim 10 000 mg; me Shegë, Acid Hyaluronic dhe Kurkumin Kolagjeni është proteina më themelore natyrore në trupin e njeriut. 
      Përfaqëson 30% të proteinave totale të trupit dhe mbi 75% të proteinave që përbëjnë lëkurën. 
      Ai është përgjegjës për elasticitetin, hidratimin e duhur dhe rigjenerimin e vazhdueshëm të lëkurës,
      ndërsa në të njëjtën kohë luan një rol të madh në kohezionin e eshtrave, 
      kërcit dhe nyjeve.
      Sipas studimeve më të fundit shkencore, zgjidhja ideale është marrja e kolagjenit të hidrolizuar, 
      një lloj kolagjeni në formë të lëngshme, i cili absorbohet me shpejtësi nga trupi. 
      Për më tepër, ajo përmban 3 herë më shumë prolinë dhe glicinë, aminoacide thelbësore për sintezën e kolagjenit të ri dhe rrisin qëndrueshmërinë e indeve lidhës.
    </p>
    <p>Shije të shijshme portokalle</p>
    `,
    fields: {
      Bottle: "100ml",
      Benefits: `<ul> 
      <li>
        <strong>Kockat dhe nyjet</strong>
        <p>Aktivizon qelizat e kërcit; rrit dendësinë e kockave dhe zvogëlon dhimbjen e kyçeve</p>
      </li>  
      <li>
        <strong>Lëkura, flokët dhe thonjtë</strong>
        <p>Rrit densitetin e fibrave dhe fibroblasteve, qelizat kryesore të lëkurës përgjegjëse për prodhimin e kolagjenit.</p>
      </li>  
      <li>
        <strong>Kundër plakjes</strong>
        <p>Gjatë gjumit, trupi konverton kolagjenin në dispozicion dhe ushqyes të tjerë në inde të reja. </p>
      </li>  
      <li>
        <strong>Sporti</strong>
        <p>
          Ushtrimet intensive shkatërrojnë proteinat e trupit. Përmes kolagjenit të hidrolizuar, arrihet deri në 97% shërim i proteinave, pasi përmban 8 nga 9 aminoacidet thelbësore.
          Ai përmban glicinë dhe argininë, 2 nga 3 përbërësit kryesorë të kreatinës, e cila siguron energji dhe përmirëson performancën atletike.
        </p>
      </li>  
     </ul>
    `,
      Usage:
        "25ml (një masë) 2 orë para gjumit. Mund të pjet direkt ose i përzier me lëngje të ndryshme si çaj, ujë, kos etj",
    },
  },

  //Bon Appetite
  {
    id: 56,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Multivitaminë për fëmijë me mjaltë Manuka",
    name: "Bon Appetite",
    category: "wellness",
    newest: 56,
    href: "/details/56",
    price: "$35",
    imageSrc: "../images/products/bon-appetite.JPG",
    coverImageUrl: "../images/background/bon-appetite.jpg",
    imageAlt: "Bon Appetite",
    relatedProducts: [55],
    about: `
    <p>
    Shtojcë ushqimore e përshtatshme për fëmijët nga 3 vjeç e lart në një racion prej 10 ml të së cilës përmban: 
    Mjaltë 2000 mg; FOS (frukto-oligosakaridet) 250 mg; Pelte mbretërore 50 mg; Pluhur i lëngut të farës së grurit 50 mg; Vitamina C 40 mg; Propolisi 10 mg;	Vitamina B1 (tiaminë) 1.1 mg; Vitamina B2 (riboflavin) 1.4 mg; Vitamina B3 (Niacin) 8 mg; Acid pantotenik (si Kalcium -D -pantothenat) 2 mg; Vitamina B6 1.4 mg; Vitamina B12 2.5 mcg; Acidi folik 50 mcg; Ngjyrues (si glukonat hekuri) 4.2 mg; Zink (si glukonat zinku) 3 mg; Bakri (si citrat bakri) 0.2 mg.
    </p>
    <p>Pa alkool, sheqer, ngjyra dhe konservantë.</p>
    <p>
    Me ëmbëlsues nga bima stevia. 
    Të ruhet në temperature ambjenti në vende të thata dhe pa dritë. 
    </p>
    `,
    fields: {
      Usage:
        "1 lugë gjelle 5 ml, 1-2 herë në ditë. Mos e tejkaloni dozën e rekomanduar.",
    },
  },

  //Deo Roll-On
  {
    id: 57,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Deodorant për lëkurë e freskët, mbrojtur dhe të aromatizuar.",
    name: "Deo Roll-On",
    category: "wellness",
    newest: 57,
    href: "/details/57",
    price: "$35",
    imageSrc: "../images/products/deo-roll-on.png",
    coverImageUrl: "../images/background/deo-roll-on.jpg",
    imageAlt: "Deo Roll-On",
    relatedProducts: [56],
    about: `
    <p>
      Roll-on deodorant kremoz i pasur me përbërës antibakterialë, jashtëzakonisht i butë dhe shumë efektiv kundër erës. <br/>
      I përshtatshëm edhe për lëkurën më të ndjeshme. 
      Falë përbërjes së tij të pasur me përbërës natyralë, është shumë efektiv kundër baktereve përgjegjëse për erën. 
    </p>
    <p>
      Nuk bllokon poret dhe nuk bllokon djersitjen natyrale.     
    </p>
    <p>
      Thahet menjëherë  duke mos lënë mbetje dhe njolla.
    </p>
    `,
    fields: {
      Bottle: "50ml",
      Ingredients: `<ul> 
          <li>
            <strong> Panthenoli dhe glicerina </strong>
            <p>
              zbutin dhe hidratojnë lëkurën, qetësojnë irritimet. 
            </p>
          </li> 
          <li>
            <strong> Ekstrakti i çajit jeshil dhe ekstrakti i balsamit </strong>
            <p> 
              trajtojnë lëkurën falë vetive astringente, antioksidante dhe tonike. 
            </p>
          </li> 

   </ul>`,
    },
  },

  //First Aid Gel
  {
    id: 58,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Xhel i përshtatshëm për djegie të lehta nga dielli ose nxehtësi dhe acarime të lehta sipërfaqësore të lëkurës. ",
    name: "First Aid Gel",
    category: "wellness",
    newest: 58,
    href: "/details/58",
    price: "$35",
    imageSrc: "../images/products/first-aid-gel.png",
    coverImageUrl: "../images/background/first-aid-gel.jpg",
    imageAlt: "First Aid Gel",
    relatedProducts: [57],
    about: `
    <p>
       Përbërësit e tij të vlefshëm krijojnë një shtresë mbrojtëse dhe i japin një ndjesi të këndshme freskie dhe lehtësimi lëkurës së skuqur/irrituar.
    </p>
    <p>
      Nuk bllokon poret dhe nuk bllokon djersitjen natyrale.     
    </p>
    <p>
      Thahet menjëherë  duke mos lënë mbetje dhe njolla.
    </p>
    `,
    fields: {
      Usage: `Aplikojeni produktin me lëvizje rrethore në zonën e dëshiruar.<br/>
              Mos e aplikoni në lëkurë të hapur.<br/>
              Vetëm për përdorim të jashtëm`,
      Ingredients: `<ul> 
          <li>
            <strong> Ekstrakti i timolës </strong>
            <p>
             Rrjedh nga gjethet e bimës Bulbine Frutescens, një bimë vendase e Afrikës së Jugut, e përdorur tradicionalisht si një ndihmë e parë për lëkurën e irrituar. 
            </p>
          </li> 
          <li>
            <strong> Vaji i pemës së çajit:  </strong>
            <p> 
               Është vaj jashtëzakonisht efektiv dhe i gjithanshëm me veti antiseptike, antimikrobike dhe anti-inflamatore.
            </p>
          </li> 
          <li>
          <strong> Acidi hialuronik  </strong>
          <p> 
            Kontribuon në prodhimin e kolagjenit dhe rrit elasticitetin dhe rinovimin e lëkurës.
          </p>
        </li> 

        <li>
        <strong> Βisabolon  </strong>
        <p> 
          Përbërës natyral me aktivitet qetësues dhe të butë antimikrobik, ideal për lëkurën e irrituar ose të ndjeshme. 
        </p>
      </li> 

    <li>
      <strong> Panthenol  </strong>
      <p> 
        Aftësitë e tij hidratuese janë ideale për kujdesin e lëkurës së dehidratuar dhe të irrituar. 
      </p>
    </li> 
    <li>
      <strong> Vaji i Kalendulës  </strong>
      <p> 
        Është i pasur me përbërës me efekt antioksidues dhe qetësues.
      </p>
    </li> 


   </ul>`,
    },
  },

  //Hot Power Cream
  {
    id: 59,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "Krem per lehtesimin e cdo lloj dhimbje muskulore ",
    name: "Hot Power Cream",
    category: "wellness",
    newest: 59,
    href: "/details/59",
    price: "$35",
    imageSrc: "../images/products/hot-power-cream.png",
    coverImageUrl: "../images/background/hot-power-cream.jpg",
    imageAlt: "Hot Power Cream",
    relatedProducts: [57, 58],
    about: `
    <p>
      Për më tepër, mentoli, vaji i eukaliptit, vaji i karafilit, ekstrakti i trumzës dhe arnicës.  <br/>
      Krem trupi i krijuar posaçërisht me përbërës bimorë që kanë veti analgjezike dhe relaksuese të muskujve. <br/>
      Ndihmon në lehtësimin e menjëhershëm nga çdo lloj shqetësimi të muskujve (ftohje, grip, shtrëngim, tërheqje, ngërçe, ndrydhje, thyerje, zhvendosje). <br/>
    </p>
    <p>
    I përshtatshëm për aplikime lokale dhe në të gjithë trupin. Ideale edhe për atletët për t'u nxehur. 
    </p>
    `,
    fields: {
      Usage: `Aplikoni 2- 3 herë në ditë në zonën ku është problemi (qafa, shpatullat, krahët, beli, gjunjët, këmbët) një sasi të kremit dhe masazhojeni lehtë. `,
      Ingredients: `<ul> 
          <li>
            <strong> Vaj  piperi djegës </strong>
            <p>
              i cili përmirëson qarkullimin e gjakut dhe krijimin e nxehtësisë intensive në pjesët e dhimbshme të trupit, duke ofruar kështu lehtësim dhe rehati afatgjatë
            </p>
          </li> 
          <li>
            <strong> Mentol, vaj eukalipt, vaj karafil, ekstrakt i trumzës dhe arnikës  </strong>
            <p> 
              janë përbërës të njohur për vetitë e tyre analgjezike, qetësuese dhe stimuluese.
            </p>
          </li> 
   </ul>`,
    },
  },

  //Insect Repellent Spray
  {
    id: 60,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description:
      "Spray kundër insekteve për mizave dhe mushkonjat, duke përfshirë mushkonjat aziatike tiger. ",
    name: "Insect Repellent Spray",
    category: "wellness",
    newest: 60,
    href: "/details/60",
    price: "$35",
    imageSrc: "../images/products/insect-repellent-spray.png",
    coverImageUrl: "../images/background/insect-repellent-spray.jpg",
    imageAlt: "Insect Repellent Spray",
    relatedProducts: [58, 59],
    about: `
    <p>
      Me përbërje efektive, bazuar në përbërësin aktiv vaj Eucalyptus citriodora, me origjinë natyrale me veprim të provuar kundër insekteve. 
    </p>
    <p>
      Për më tepër, kombinimi i 5 vajrave esencialë natyralë që përmban (barbarozë, nenexhik, eukalipt, livando dhe bima e borzilokut) mbron dhe trajton lëkurën. 
    </p>
    <p>
      Vepron deri në 5 orë, pa lënë gjurmë vajore. <br/>
      Me aromë të këndshme, për të gjithë familjen.
      </p>
    `,
    fields: {
      Bottle: `100ml `,
      Ingredients: `<ul> 
          <li>
            <strong> Vaj eukalipt citriodora </strong>
            <p>
              i cili përmirëson qarkullimin e gjakut dhe krijimin e nxehtësisë intensive në pjesët e dhimbshme të trupit, duke ofruar kështu lehtësim dhe rehati afatgjatë
            </p>
          </li> 
          <li>
            <strong> Mentol, vaj eukalipt, vaj karafil, ekstrakt i trumzës dhe arnikës  </strong>
            <p> 
              janë përbërës të njohur për vetitë e tyre analgjezike, qetësuese dhe stimuluese.
            </p>
          </li> 
   </ul>`,
    },
  },

  //Krem Këmbësh
  {
    id: 61,
    isAvailable: 1,
    vendor: "pharmalead",
    rating: 4,
    topProduct: 0,
    description: "",
    name: "Krem Këmbësh",
    category: "wellness",
    newest: 61,
    href: "/details/61",
    price: "$35",
    imageSrc: "../images/products/insect-repellent-spray.png",
    coverImageUrl: "../images/background/insect-repellent-spray.jpg",
    imageAlt: "Insect Repellent Spray",
    relatedProducts: [60],
    about: `
    <p>
      Kombinimi i uresë, glicerinës dhe vitaminës E ofron hidratim të pasur duke luftuar lëkurën e thatë dhe të ngurtësuar.  
    </p>
    <p>
      Për më tepër, vaji i Abisinisë (i pasur me acide yndyrore Omega 3), si dhe vajra të ndryshëm bimorë, mbrojnë lëkurën nga radikalet e lira dhe oksidimi dhe sigurojnë butësi dhe strukturë të mëndafshtë. 
    </p>
    <p>
      Jashtëzakonisht efektiv në rastet e erës së këmbëve dhe infeksioneve mykotike. 
    </p>
    <p>
       Përmban përbërës me veti intensive hidratuese dhe zbutëse që rivendosin ekuilibrin natyral të lëkurës. <br/>
       I testuar dermatologjikisht<br/>
       Pa parabene<br/>
       Pa vaj mineral </br>
    </p>
    
    `,
    fields: {
      Bottle: `75ml `,
    },
  },

  // More products...
];
