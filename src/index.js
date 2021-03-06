require("dotenv").config({ path: "../.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
var express = require("express");
var app = express();
console.log(accountSid + "" + authToken + "" + process.env.TWILIO_ACCOUNT_SID);
const client = require("twilio")(accountSid, authToken);
const { MessagingResponse } = require("twilio").twiml;
app.use(express.urlencoded({ extended: true }));
const axios = require("axios");
var voltar = false;
var voltarDeDoutorado = false;
var voltarDeAssunto = false;
var voltar2 = false;
var voltar3 = false;
var voltar4 = false;
var mestrado = false;
var especializacao = false;
var doutorado = false;


app.get("/", function (req, res) {
  res.send("Hello World!");

  client.messages
    .create({
      body: `iniciado 2 `,
      mediaUrl: ["https://cataas.com/cat"],

      from: "whatsapp:+14155238886",
      to: "whatsapp:+5512997787953",
    })
    .then((message) => console.log(JSON.stringify(message)));
});

app.post("/whatsapp", async (req, res) => {
  let answer;
  const incomingWhatsappMsg = req.body.Body.toLowerCase();
  const twiml = new MessagingResponse();
 
  console.log(incomingWhatsappMsg);
  console.log(encodeURI(req.body.Body));
  try {
    if (
      incomingWhatsappMsg == "oii" ||
      incomingWhatsappMsg == "oi" ||
      incomingWhatsappMsg == "ola" ||
      incomingWhatsappMsg == "tudo bem?" ||
      (incomingWhatsappMsg == "4" && voltar === true) ||
      (incomingWhatsappMsg == "3" && voltarDeDoutorado === true) ||
      (incomingWhatsappMsg == "voltar" && voltarDeAssunto === true) 
    ) {
      voltar = false;
      voltarDeDoutorado = false;
      voltarDeAssunto = false;
      voltar2 = false;
      voltar3 = false;
      voltar4 = false;
      mestrado = false;
      especializacao = false;
      doutorado = false;

      const results = twiml.message();
      const results2 = twiml.message();
      const results3 = twiml.message();
      const results4 = twiml.message();
      const results5 = twiml.message();

      res.header("Content-Type", "text/xml").status(200);
      results.body(
        "Boas vindas, como podemos te ajudar?"
      );
      
      results2.body(
        "1. Cursos de Mestrado?"
      );

      results3.body(
        "2. Cursos de Doutorado?"
      );

      results4.body(
        "3. Especializa????o?"
      );
      
      results5.body(
        "4. Outro assunto?"
      );

      //menu = true;
/*       voltar = false;
      mestrado = false;
      doutorado = false;
      especializacao = false; */

      res.send(results.toString());
      res.send(results2.toString()); 
      res.send(results3.toString()); 
      res.send(results4.toString()); 
      res.send(results5.toString());

    } else if (incomingWhatsappMsg == "4"){
      console.log('teste')

      voltarDeAssunto = true;

      const results = twiml.message();
      const results2 = twiml.message();

      res.header("Content-Type", "text/xml").status(200);
      results.body(
        "Para tratar de outros assuntos referentes a p??s-gradua????o, entre em contato atrav??s do whatsapp (12) 3621-2666"
      );

      results2.body(
        "Digite 'Voltar' para voltar"
      );

      res.send(results.toString());
      res.send(results2.toString());

    //CLICOU EM CURSOS DE MESTRADO
    } else if (
        incomingWhatsappMsg == "1" && mestrado == false && especializacao == false && doutorado == false||
        (incomingWhatsappMsg == "voltar" && voltar2 == true)
        ) {

          voltar = true;
          voltar2 = false;
          mestrado = true;
  
          const results = twiml.message();
          const results2 = twiml.message();
          const results3 = twiml.message();
          const results4 = twiml.message();
          const results5 = twiml.message();
  
          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "BEM VINDO AOS CURSOS DE MESTRADO, ESCOLHA A ??REA DESEJADA"
          );

          results2.body(
            "1. Exatas"
          );
  
          results3.body(
            "2. Biol??gicas"
          );
  
          results4.body(
            "3. Humanas"
          );
  
          results5.body(
            "4. Voltar"
          );
  
/*           voltar = true;
          voltar2 = false;
          mestrado = true; */
          res.send(results.toString());
          res.send(results2.toString()); 
          res.send(results3.toString()); 
          res.send(results4.toString()); 
          res.send(results5.toString()); 
         
        //CLICOU EM CURSOS DE DOUTORADO  
        } else if (
          incomingWhatsappMsg == "2" && doutorado == false && especializacao == false && mestrado == false||
          (incomingWhatsappMsg == "voltar" && voltar3 == true)
          ) {

            voltarDeDoutorado = true;
            voltar3 = false;
            doutorado = true;
    
            const results = twiml.message();
            const results2 = twiml.message();
            const results3 = twiml.message();
            const results4 = twiml.message();
    
            res.header("Content-Type", "text/xml").status(200);
            results.body(
              "BEM VINDO AOS CURSOS DE DOUTORADO, ESCOLHA A ??REA DESEJADA"
            );
/*             results2.body(
              "1. Exatas"
            ); */
    
            results2.body(
              "1. Biol??gicas"
            );
    
            results3.body(
              "2. Humanas"
            );
    
            results4.body(
              "3. Voltar"
            );
    
/*             voltar = true;
            voltar3 = false;
            doutorado = true; */
            res.send(results.toString());
            res.send(results2.toString()); 
            res.send(results3.toString()); 
            res.send(results4.toString());  

        //CLICOU EM CURSOS DE ESPECIALIZACAO    
        } else if (
            incomingWhatsappMsg == "3" && especializacao == false && mestrado == false && doutorado == false||
            (incomingWhatsappMsg == "voltar" && voltar4 == true)
        ) {

          voltar = true;
          voltar4 = false;
          especializacao = true;
      
              const results = twiml.message();
              const results2 = twiml.message();
              const results3 = twiml.message();
              const results4 = twiml.message();
              const results5 = twiml.message();
      
              res.header("Content-Type", "text/xml").status(200);
              results.body(
                "BEM VINDO AOS CURSOS DE ESPECIALIZA????O, ESCOLHA A ??REA DESEJADA"
              );
              results2.body(
                "1. Exatas"
              );
      
              results3.body(
                "2. Biol??gicas"
              );
      
              results4.body(
                "3. Humanas"
              );
      
              results5.body(
                "4. Voltar"
              );
      
/*               voltar = true;
              voltar4 = false;
              especializacao = true; */
              res.send(results.toString());
              res.send(results2.toString()); 
              res.send(results3.toString()); 
              res.send(results4.toString());  
              res.send(results5.toString());  
        
        //MESTRADO - EXATAS
        } else if (
          incomingWhatsappMsg == "1" && mestrado == true && especializacao == false && doutorado == false
        ) {

          voltar2 = true;
          mestrado = false;

          const results = twiml.message();
          const results2 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "ENGENHARIA MEC??NICA - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/mestrado-profissional-em-engenharia-mecanica/" 

          );
  
          results2.body(
            "Digite 'Voltar' para voltar"
          );
  
/*           voltar2 = true;
          mestrado = false; */
          res.send(results.toString());
          res.send(results2.toString()); 

      //MESTRADO - BIOLOGICAS
      } else if (
          incomingWhatsappMsg == "2" && mestrado == true && especializacao == false && doutorado == false
      ) {

        voltar2 = true;
        mestrado = false;

          const results = twiml.message();
          const results2 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "CI??NCIAS AMBIENTAIS - ACAD??MICO https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-academico-em-ciencias-ambientais/\n" +
            "\nCI??NCIAS AMBIENTAIS - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-profissional-em-ciencias-ambientais/\n" +
            "\nCI??NCIAS AMBIENTAIS - PROFISSIONAL (TURMA ESPECIAL DE IMPERATRIZ-MA) https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-profissional-em-ciencias-ambientais-turma-especial-imperatriz-ma/\n" +
            "\nCI??NCIAS DA SA??DE - ACAD??MICO | NOVO https://unitau.br/cursos/pos-graduacao/odontologia/mestrado-academico-em-ciencias-da-saude/\n" +
            "\nODONTOLOGIA - ACAD??MICO https://unitau.br/cursos/pos-graduacao/odontologia/mestrado-em-odontologia/" 

          );
  
          results2.body(
            "Digite 'Voltar' para voltar"
          );

          res.send(results.toString());
          res.send(results2.toString());
      
      //MESTRADO - HUMANAS
      } else if (
          incomingWhatsappMsg == "3" && mestrado == true && especializacao == false && doutorado == false
      ) {

        voltar2 = true;
        mestrado = false;

          const results = twiml.message();
          const results2 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "DESENVOLVIMENTO HUMANO - ACAD??MICO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-em-desenvolvimento-humano/\n" +
            "\nEDUCA????O - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-profissional-em-educacao/\n" +
            "\nGEST??O E DESENVOLVIMENTO REGIONAL - PROFISSIONAL (MGDR) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/mestrado-profissional-em-gestao-e-desenvolvimento-regional-mgdr/\n" +
            "\nGEST??O E DESENVOLVIMENTO REGIONAL - PROFISSIONAL (PARCERIA UNITAU-FACIBI - REGI??O DE IBIAPABA-CE) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/gestao-e-desenvolvimento-regional-profissional-parceria-unitau-facibi-regiao-de-ibiapaba-ce/\n" +
            "\nLINGU??STICA APLICADA - ACAD??MICO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-em-linguistica-aplicada/\n" +
            "\nPLANEJAMENTO E DESENVOLVIMENTO REGIONAL - ACAD??MICO (MPDR) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/mestrado-academico-em-planejamento-e-desenvolvimento-regional-mpdr/" 

          );
  
          results2.body(
            "Digite 'Voltar' para voltar"
          );
  
/*           voltar2 = true;
          mestrado = false; */
          res.send(results.toString());
          res.send(results2.toString()); 

      //DOUTORADO - BIOLOGICAS
      } else if (
          incomingWhatsappMsg == "1" && doutorado == true && especializacao == false && mestrado == false
      ) {

        voltar3 = true;
        doutorado = false;

          const results = twiml.message();
          const results2 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "CI??NCIAS DA SA??DE - ACAD??MICO https://unitau.br/cursos/pos-graduacao/odontologia/ciencias-da-saude/\n" +
            "\nODONTOLOGIA - ACAD??MICO https://unitau.br/cursos/pos-graduacao/odontologia/doutorado-em-odontologia/" 
          );
  
          results2.body(
            "Digite 'Voltar' para voltar"
          );
  
/*           voltar = true;
          doutorado = false;
          escolhaCurso = true; */
          res.send(results.toString());
          res.send(results2.toString()); 
      
      //DOUTORADO - HUMANAS
      } else if (
          incomingWhatsappMsg == "2" && doutorado == true && especializacao == false && mestrado == false
      ) {

        voltar3 = true;
        doutorado = false;

          const results = twiml.message();
          const results2 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "DESENVOLVIMENTO REGIONAL - INTERINSTITUCIONAL UNITAU E UNISC https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/doutorado-interinstitucional-em-desenvolvimento-regional/\n" +
            "\nEDUCA????O - INTERINSTITUCIONAL UNITAU E EST??CIO DE S?? - RJ (UNESA) https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/doutorado-interinstitucional-em-educacao-parceria-unitau-e-estacio-de-sa-rj-unesa/" 
          );
  
          results2.body(
            "Digite 'Voltar' para voltar"
          );
  
/*           voltar = true;
          doutorado = false;
          escolhaCurso = true; */
          res.send(results.toString());
          res.send(results2.toString()); 

      //ESPECIALIZACAO - EXATAS
      } else if (
          incomingWhatsappMsg == "1" && especializacao == true && doutorado == false && mestrado == false
      ) {

        voltar4 = true;
        especializacao = false;

          const results = twiml.message();
          const results2 = twiml.message();
          const results3 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "ENGENHARIA\n\n" +
            "\NENERGIA SOLAR FOTOVOLTAICA - TECNOLOGIAS E SISTEMAS z https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/energia-solar-fotovoltaica-tecnologias-e-sistemas/\n" +
            "\nENGENHARIA DA QUALIDADE LEAN SEIS SIGMA GREEN BELT https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/engenharia-da-qualidade-lean-seis-sigma-green-belt-sabado/\n" +
            "\nENGENHARIA DE SEGURAN??A DO TRABALHO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/engenharia-de-seguranca-do-trabalho/\n" +
            "\nMANUTEN????O INDUSTRIAL https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/manutencao-industrial/\n" +
            "\nPROJETO MEC??NICO, EAD https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/projeto-mecanico-na-modalidade-a-distancia/"
          );
  
          results2.body(
            "TECNOLOGIA\n\n" +
            "\nAN??LISE DE DADOS E BIG DATA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/analise-de-dados-e-big-data/\n" +
            "\nAUTOMA????O E CONTROLE INDUSTRIAL - MECATR??NICA https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/automacao-e-controle-industrial-mecatronica/\n" +
            "\nCLOUD COMPUTING https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/cloud-computing/" 
          );

          results3.body(
            "Digite 'Voltar' para voltar"
          )
  
          res.send(results.toString());
          res.send(results2.toString()); 
          res.send(results3.toString());   

      //ESPECIALIZACAO - BIOLOGICAS
      } else if (
          incomingWhatsappMsg == "2" && especializacao == true && doutorado == false && mestrado == false
      ) {

        voltar4 = true;
        especializacao = false;

          const results = twiml.message();
          const results2 = twiml.message();
          const results3 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "AMBIENTE\n\n" +
            "\NAPICULTURA E MELIPONICULTURA - EAD https://unitau.br/cursos/pos-graduacao/ead/apicultura-e-meliponicultura/\n" +
            "\nDESIGN DE ASSENTAMENTOS SUSTENT??VEIS E ECOVILAS - EAD https://unitau.br/cursos/pos-graduacao/arquitetura/design-de-assentamentos-sustentaveis-e-ecovilas/\n" +
            "\nEMPREENDEDORISMO SOCIOAMBIENTAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/empreendedorismo-socioambiental/\n" +
            "\nGEST??O DE RES??DUOS INDUSTRIAIS, URBANOS E RURAIS https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/gestao-de-residuos-industriais-urbanos-e-rurais/" 
          );
  
          results2.body(
            "SA??DE\n\n" +
            "\nALIMENTA????O ESCOLAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/alimentacao-escolar/\n" +
            "\nAN??LISES CL??NICAS https://unitau.br/cursos/pos-graduacao/biologia/analises-clinicas/\n" +
            "\nANESTESIA CARDIOVASCULAR E TOR??CICA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/anestesia-cardiovascular-e-toracica/\n" +
            "\nAVALIA????O, CONTROLE, REGULA????O E AUDITORIA EM SA??DE https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/avaliacao-controle-regulacao-e-auditoria-em-saude/\n" +
            "\nBIOLOGIA MOLECULAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/biologia-molecular/\n" +
            "\nDIAGN??STICO LABORATORIAL MULTIDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/diagnostico-laboratorial-ndash-multidisciplinar/\n" +
            "\nDOR: ABORDAGEM INTERDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/fisioterapia/dor-abordagem-interdisciplinar/\n" +
            "\nHARMONIZA????O OROFACIAL https://unitau.br/cursos/pos-graduacao/odontologia/harmonizacao-orofacial/\n" +
            "\nIMPLANTODONTIA https://unitau.br/cursos/pos-graduacao/odontologia/implantodontia/\n" +
            "\nINTERDISCIPLINARIDADE DAS POL??TICAS DE ASSIST??NCIA SOCIAL, EDUCA????O E SA??DE NA INTERFACE DO TRABALHO COM FAM??LIAS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/interdisciplinaridade-das-politicas-de-assistencia-social-educacao-e-saude-na-interface-do-trabalho-com-familias/\n\n" +
            "\nPara encontrar mais cursos, acesse o link: https://unitau.br/pos-graduacao/"

/*             "\nINTERVEN????O FAMILIAR: PSICOTERAPIA, ORIENTA????O E MEDIA????O DE CONFLITOS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/intervencao-familiar-psicoterapia-orientacao-e-mediacao-de-conflitos/" +
            "\nMEDICINA DO TRABALHO https://unitau.br/cursos/pos-graduacao/medicina/medicina-do-trabalho/" +
            "\nMEDICINA DO TRABALHO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/medicina-do-trabalho/" +
            "\nMETABOLISMO, PR??TICA E TERAPIA NUTRICIONAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/metabolismo-pratica-e-terapia-nutricional/" +
            "\nNEUROCI??NCIA APLICADA ?? EDUCA????O INCLUSIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-aplicada-a-educacao-inclusiva/" +
            "\nNEUROCI??NCIA COMPORTAMENTAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-comportamental/" +
            "\nNEUROCI??NCIA E PROGRAMA????O NEUROLINGU??STICA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-e-programacao-neurolinguistica/" +
            "\nNEUROCI??NCIAS EM CONTEXTOS ESCOLARES - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencias-em-contextos-escolares/" +
            "\nNEUROPSICOLOGIA DOS TRANSTORNOS DE APRENDIZAGEM - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neuropsicologia-dos-transtornos-de-aprendizagem/" +
            "\nNUTRI????O CL??NICA FUNCIONAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/nutricao-clinica-funcional/" +
            "\nNUTRI????O NAS DOEN??AS CR??NICAS N??O TRANSMISS??VEIS - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/nutricao-nas-doencas-cronicas-nao-transmissiveis/" +
            "\nPER??CIAS M??DICAS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/pericias-medicas/" +
            "\nPER??CIAS M??DICAS - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/pericias-medicas/" +
            "\nPLANEJAMENTO E ESTRUTURA????O EM SERVI??OS DE SA??DE - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/planejamento-e-estruturacao-em-servicos-de-saude/" +
            "\nPSICOMOTRICIDADE EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/psicomotricidade/" +
            "\nSA??DE COLETIVA E ESTRAT??GIA EM SA??DE DA FAM??LIA - MULTIDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-coletiva-e-estrategia-em-saude-da-familia-multidisciplinar/" +
            "\nSA??DE DA CRIAN??A E DO ADOLESCENTE - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-da-crianca-e-do-adolescente/" +
            "\nSA??DE EST??TICA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-estetica/" +
            "\nSA??DE MENTAL NO TRABALHO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-mental-no-trabalho/" +
            "\nSEGURAN??A SANIT??RIA EM SERVI??OS DE ALIMENTA????O COLETIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/seguranca-sanitaria-em-servicos-de-alimentacao-coletiva/" +
            "\nTRANSTORNO DO ESPECTRO AUTISTA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/transtorno-do-espectro-autista/"  */
          );

          results3.body(
            "Digite 'Voltar' para voltar"
          )
  
          res.send(results.toString());
          res.send(results2.toString()); 
          res.send(results3.toString());   

      //ESPECIALIZACAO - HUMANAS
      } else if (
          incomingWhatsappMsg == "3" && especializacao == true && doutorado == false && mestrado == false
      ) {

        voltar4 = true;
        especializacao = false;

          const results = twiml.message();
          const results2 = twiml.message();
          const results3 = twiml.message();
          const results4 = twiml.message();
          const results5 = twiml.message();

          res.header("Content-Type", "text/xml").status(200);
          results.body(
            "ADMINISTRA????O E NEG??CIOS\n\n" +
            "\nGEST??O P??BLICA MUNICIPAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/gestao-publica-municipal/\n" +
            "\nLIDERAN??A E COACHING APLICADOS A GEST??O DO CAPITAL HUMANO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/lideranca-e-coaching-aplicados-a-gestao-do-capital-humano/" 
          );

          results2.body(
            "COMUNICA????O E MARKETING\n\n" +
            "\nDESIGN E CRIA????O DIGITAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/design-e-criacao-digital/\n" +
            "\nMARKETING DIGITAL 4.0 https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/marketing-digital-4-0/" 
          );

          results3.body(
            "DIREITO\n\n" +
            "\nDIREITO DO TRABALHO, PROCESSUAL DO TRABALHO E SEGURIDADE SOCIAL: TEORIA E PR??TICA DA REFORMA TRABALHISTA E DO DIREITO DO TRABALHO NA PANDEMIA - EAD  https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/direito-do-trabalho-processual-do-trabalho-e-seguridade-social-teoria-e-pratica-da-reforma-trabalhista-e-do-direito-do-trabalho-na-pandemia/" 
          );
  
          results4.body(
            "EDUCA????O\n\n" +
            "\nEDUCA????O ESPECIAL E INCLUSIVA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/alimentacao-escolar/\n"+
            "\nEDUCA????O MUSICAL  https://unitau.br/cursos/pos-graduacao/biologia/analises-clinicas/\n" +
            "\nFERRAMENTAS DIGITAIS PARA DOCENTES - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/anestesia-cardiovascular-e-toracica/\n" +
            "\nGEST??O E DOC??NCIA DO ENSINO SUPERIOR - EAD  https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/avaliacao-controle-regulacao-e-auditoria-em-saude/\n" +
            "\nGEST??O EDUCACIONAL INOVADORA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/biologia-molecular/\n" +
            "\nGEST??O PEDAG??GICA EMPRESARIAL E EDUCA????O CORPORATIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/diagnostico-laboratorial-ndash-multidisciplinar/\n" +
            "\nMETODOLOGIAS ATIVAS DE APRENDIZAGEM E ENSINO H??BRIDO - EAD https://unitau.br/cursos/pos-graduacao/fisioterapia/dor-abordagem-interdisciplinar/\n" +
            "\nPSICOLOGIA E SERVI??O SOCIAL NA EDUCA????O B??SICA - EAD https://unitau.br/cursos/pos-graduacao/odontologia/harmonizacao-orofacial/\n" +
            "\nPSICOPEDAGOGIA https://unitau.br/cursos/pos-graduacao/odontologia/implantodontia/\n" +
            "\nPSICOPEDAGOGIA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/interdisciplinaridade-das-politicas-de-assistencia-social-educacao-e-saude-na-interface-do-trabalho-com-familias/" 
          );

          results5.body(
            "Digite 'Voltar' para voltar"
          )
  
          res.send(results.toString());
          res.send(results2.toString()); 
          res.send(results3.toString());   
          res.send(results4.toString());  
          res.send(results5.toString());  

      //ERRO    
      } else {
        const results = twiml.message();
        res.writeHead(200, { "Content-Type": "text/xml" });
        results.body(
          "N??o consegui compreender, desculpe."
        );
  
        
        res.end(results.toString());
      }

  } catch (error) {
    console.log(error);
  }
});
app.listen(process.env.PORT || 8080, function () {
  console.log("Example app listening on port 3000!");
});

