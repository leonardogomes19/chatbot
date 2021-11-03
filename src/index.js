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
        "3. Especialização?"
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
        "Para tratar de outros assuntos referentes a pós-graduação, entre em contato através do whatsapp (12) 3621-2666"
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
            "BEM VINDO AOS CURSOS DE MESTRADO, ESCOLHA A ÁREA DESEJADA"
          );

          results2.body(
            "1. Exatas"
          );
  
          results3.body(
            "2. Biológicas"
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
              "BEM VINDO AOS CURSOS DE DOUTORADO, ESCOLHA A ÁREA DESEJADA"
            );
/*             results2.body(
              "1. Exatas"
            ); */
    
            results2.body(
              "1. Biológicas"
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
                "BEM VINDO AOS CURSOS DE ESPECIALIZAÇÃO, ESCOLHA A ÁREA DESEJADA"
              );
              results2.body(
                "1. Exatas"
              );
      
              results3.body(
                "2. Biológicas"
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
            "ENGENHARIA MECÂNICA - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/mestrado-profissional-em-engenharia-mecanica/" 

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
            "CIÊNCIAS AMBIENTAIS - ACADÊMICO https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-academico-em-ciencias-ambientais/\n" +
            "\nCIÊNCIAS AMBIENTAIS - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-profissional-em-ciencias-ambientais/\n" +
            "\nCIÊNCIAS AMBIENTAIS - PROFISSIONAL (TURMA ESPECIAL DE IMPERATRIZ-MA) https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/mestrado-profissional-em-ciencias-ambientais-turma-especial-imperatriz-ma/\n" +
            "\nCIÊNCIAS DA SAÚDE - ACADÊMICO | NOVO https://unitau.br/cursos/pos-graduacao/odontologia/mestrado-academico-em-ciencias-da-saude/\n" +
            "\nODONTOLOGIA - ACADÊMICO https://unitau.br/cursos/pos-graduacao/odontologia/mestrado-em-odontologia/" 

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
            "DESENVOLVIMENTO HUMANO - ACADÊMICO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-em-desenvolvimento-humano/\n" +
            "\nEDUCAÇÃO - PROFISSIONAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-profissional-em-educacao/\n" +
            "\nGESTÃO E DESENVOLVIMENTO REGIONAL - PROFISSIONAL (MGDR) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/mestrado-profissional-em-gestao-e-desenvolvimento-regional-mgdr/\n" +
            "\nGESTÃO E DESENVOLVIMENTO REGIONAL - PROFISSIONAL (PARCERIA UNITAU-FACIBI - REGIÃO DE IBIAPABA-CE) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/gestao-e-desenvolvimento-regional-profissional-parceria-unitau-facibi-regiao-de-ibiapaba-ce/\n" +
            "\nLINGUÍSTICA APLICADA - ACADÊMICO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/mestrado-em-linguistica-aplicada/\n" +
            "\nPLANEJAMENTO E DESENVOLVIMENTO REGIONAL - ACADÊMICO (MPDR) https://unitau.br/cursos/pos-graduacao/gestao-e-negocios/mestrado-academico-em-planejamento-e-desenvolvimento-regional-mpdr/" 

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
            "CIÊNCIAS DA SAÚDE - ACADÊMICO https://unitau.br/cursos/pos-graduacao/odontologia/ciencias-da-saude/\n" +
            "\nODONTOLOGIA - ACADÊMICO https://unitau.br/cursos/pos-graduacao/odontologia/doutorado-em-odontologia/" 
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
            "\nEDUCAÇÃO - INTERINSTITUCIONAL UNITAU E ESTÁCIO DE SÁ - RJ (UNESA) https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/doutorado-interinstitucional-em-educacao-parceria-unitau-e-estacio-de-sa-rj-unesa/" 
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
            "\nENGENHARIA DE SEGURANÇA DO TRABALHO https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/engenharia-de-seguranca-do-trabalho/\n" +
            "\nMANUTENÇÃO INDUSTRIAL https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/manutencao-industrial/\n" +
            "\nPROJETO MECÂNICO, EAD https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/projeto-mecanico-na-modalidade-a-distancia/"
          );
  
          results2.body(
            "TECNOLOGIA\n\n" +
            "\nANÁLISE DE DADOS E BIG DATA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/analise-de-dados-e-big-data/\n" +
            "\nAUTOMAÇÃO E CONTROLE INDUSTRIAL - MECATRÔNICA https://unitau.br/cursos/pos-graduacao/engenharia-mecanica/automacao-e-controle-industrial-mecatronica/\n" +
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
            "\nDESIGN DE ASSENTAMENTOS SUSTENTÁVEIS E ECOVILAS - EAD https://unitau.br/cursos/pos-graduacao/arquitetura/design-de-assentamentos-sustentaveis-e-ecovilas/\n" +
            "\nEMPREENDEDORISMO SOCIOAMBIENTAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/empreendedorismo-socioambiental/\n" +
            "\nGESTÃO DE RESÍDUOS INDUSTRIAIS, URBANOS E RURAIS https://unitau.br/cursos/pos-graduacao/ciencias-agrarias/gestao-de-residuos-industriais-urbanos-e-rurais/" 
          );
  
          results2.body(
            "SAÚDE\n\n" +
            "\nALIMENTAÇÃO ESCOLAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/alimentacao-escolar/\n" +
            "\nANÁLISES CLÍNICAS https://unitau.br/cursos/pos-graduacao/biologia/analises-clinicas/\n" +
            "\nANESTESIA CARDIOVASCULAR E TORÁCICA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/anestesia-cardiovascular-e-toracica/\n" +
            "\nAVALIAÇÃO, CONTROLE, REGULAÇÃO E AUDITORIA EM SAÚDE https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/avaliacao-controle-regulacao-e-auditoria-em-saude/\n" +
            "\nBIOLOGIA MOLECULAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/biologia-molecular/\n" +
            "\nDIAGNÓSTICO LABORATORIAL MULTIDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/diagnostico-laboratorial-ndash-multidisciplinar/\n" +
            "\nDOR: ABORDAGEM INTERDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/fisioterapia/dor-abordagem-interdisciplinar/\n" +
            "\nHARMONIZAÇÃO OROFACIAL https://unitau.br/cursos/pos-graduacao/odontologia/harmonizacao-orofacial/\n" +
            "\nIMPLANTODONTIA https://unitau.br/cursos/pos-graduacao/odontologia/implantodontia/\n" +
            "\nINTERDISCIPLINARIDADE DAS POLÍTICAS DE ASSISTÊNCIA SOCIAL, EDUCAÇÃO E SAÚDE NA INTERFACE DO TRABALHO COM FAMÍLIAS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/interdisciplinaridade-das-politicas-de-assistencia-social-educacao-e-saude-na-interface-do-trabalho-com-familias/\n\n" +
            "\nPara encontrar mais cursos, acesse o link: https://unitau.br/pos-graduacao/"

/*             "\nINTERVENÇÃO FAMILIAR: PSICOTERAPIA, ORIENTAÇÃO E MEDIAÇÃO DE CONFLITOS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/intervencao-familiar-psicoterapia-orientacao-e-mediacao-de-conflitos/" +
            "\nMEDICINA DO TRABALHO https://unitau.br/cursos/pos-graduacao/medicina/medicina-do-trabalho/" +
            "\nMEDICINA DO TRABALHO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/medicina-do-trabalho/" +
            "\nMETABOLISMO, PRÁTICA E TERAPIA NUTRICIONAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/metabolismo-pratica-e-terapia-nutricional/" +
            "\nNEUROCIÊNCIA APLICADA À EDUCAÇÃO INCLUSIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-aplicada-a-educacao-inclusiva/" +
            "\nNEUROCIÊNCIA COMPORTAMENTAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-comportamental/" +
            "\nNEUROCIÊNCIA E PROGRAMAÇÃO NEUROLINGUÍSTICA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencia-e-programacao-neurolinguistica/" +
            "\nNEUROCIÊNCIAS EM CONTEXTOS ESCOLARES - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neurociencias-em-contextos-escolares/" +
            "\nNEUROPSICOLOGIA DOS TRANSTORNOS DE APRENDIZAGEM - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/neuropsicologia-dos-transtornos-de-aprendizagem/" +
            "\nNUTRIÇÃO CLÍNICA FUNCIONAL - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/nutricao-clinica-funcional/" +
            "\nNUTRIÇÃO NAS DOENÇAS CRÔNICAS NÃO TRANSMISSÍVEIS - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/nutricao-nas-doencas-cronicas-nao-transmissiveis/" +
            "\nPERÍCIAS MÉDICAS https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/pericias-medicas/" +
            "\nPERÍCIAS MÉDICAS - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/pericias-medicas/" +
            "\nPLANEJAMENTO E ESTRUTURAÇÃO EM SERVIÇOS DE SAÚDE - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/planejamento-e-estruturacao-em-servicos-de-saude/" +
            "\nPSICOMOTRICIDADE EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/psicomotricidade/" +
            "\nSAÚDE COLETIVA E ESTRATÉGIA EM SAÚDE DA FAMÍLIA - MULTIDISCIPLINAR - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-coletiva-e-estrategia-em-saude-da-familia-multidisciplinar/" +
            "\nSAÚDE DA CRIANÇA E DO ADOLESCENTE - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-da-crianca-e-do-adolescente/" +
            "\nSAÚDE ESTÉTICA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-estetica/" +
            "\nSAÚDE MENTAL NO TRABALHO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/saude-mental-no-trabalho/" +
            "\nSEGURANÇA SANITÁRIA EM SERVIÇOS DE ALIMENTAÇÃO COLETIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/seguranca-sanitaria-em-servicos-de-alimentacao-coletiva/" +
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
            "ADMINISTRAÇÃO E NEGÓCIOS\n\n" +
            "\nGESTÃO PÚBLICA MUNICIPAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/gestao-publica-municipal/\n" +
            "\nLIDERANÇA E COACHING APLICADOS A GESTÃO DO CAPITAL HUMANO - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/lideranca-e-coaching-aplicados-a-gestao-do-capital-humano/" 
          );

          results2.body(
            "COMUNICAÇÃO E MARKETING\n\n" +
            "\nDESIGN E CRIAÇÃO DIGITAL https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/design-e-criacao-digital/\n" +
            "\nMARKETING DIGITAL 4.0 https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/marketing-digital-4-0/" 
          );

          results3.body(
            "DIREITO\n\n" +
            "\nDIREITO DO TRABALHO, PROCESSUAL DO TRABALHO E SEGURIDADE SOCIAL: TEORIA E PRÁTICA DA REFORMA TRABALHISTA E DO DIREITO DO TRABALHO NA PANDEMIA - EAD  https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/direito-do-trabalho-processual-do-trabalho-e-seguridade-social-teoria-e-pratica-da-reforma-trabalhista-e-do-direito-do-trabalho-na-pandemia/" 
          );
  
          results4.body(
            "EDUCAÇÃO\n\n" +
            "\nEDUCAÇÃO ESPECIAL E INCLUSIVA https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/alimentacao-escolar/\n"+
            "\nEDUCAÇÃO MUSICAL  https://unitau.br/cursos/pos-graduacao/biologia/analises-clinicas/\n" +
            "\nFERRAMENTAS DIGITAIS PARA DOCENTES - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/anestesia-cardiovascular-e-toracica/\n" +
            "\nGESTÃO E DOCÊNCIA DO ENSINO SUPERIOR - EAD  https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/avaliacao-controle-regulacao-e-auditoria-em-saude/\n" +
            "\nGESTÃO EDUCACIONAL INOVADORA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/biologia-molecular/\n" +
            "\nGESTÃO PEDAGÓGICA EMPRESARIAL E EDUCAÇÃO CORPORATIVA - EAD https://unitau.br/cursos/pos-graduacao/pesquisa-e-pos-graduacao/diagnostico-laboratorial-ndash-multidisciplinar/\n" +
            "\nMETODOLOGIAS ATIVAS DE APRENDIZAGEM E ENSINO HÍBRIDO - EAD https://unitau.br/cursos/pos-graduacao/fisioterapia/dor-abordagem-interdisciplinar/\n" +
            "\nPSICOLOGIA E SERVIÇO SOCIAL NA EDUCAÇÃO BÁSICA - EAD https://unitau.br/cursos/pos-graduacao/odontologia/harmonizacao-orofacial/\n" +
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
          "Não consegui compreender, desculpe."
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

